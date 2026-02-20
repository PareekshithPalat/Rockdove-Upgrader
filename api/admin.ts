
import type { VercelRequest, VercelResponse } from '@vercel/node';
import db from '../lib/db.js';

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    // 1. Basic CORS for dev (Vercel handles this in prod usually, but good for local)
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        const { action } = req.query;
        const body = req.body || {};

        // Simple Admin Secret Check
        // Expecting 'Authorization': 'Bearer <SECRET>' or in body for login
        const authHeader = req.headers.authorization;
        const secret = process.env.ADMIN_SECRET || 'admin123'; // Default fallback for dev if env missing

        const providedSecret = authHeader?.split(' ')[1] || body.secret;

        if (action === 'login') {
            if (providedSecret === secret) {
                return res.status(200).json({ success: true, token: secret });
            } else {
                return res.status(401).json({ error: 'Invalid secret' });
            }
        }

        // Middleware-like check for other actions
        if (providedSecret !== secret) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        if (action === 'fetch_contact') {
            const [rows] = await db.query('SELECT * FROM contact_submissions ORDER BY created_at DESC');
            return res.status(200).json({ success: true, data: rows });
        }

        if (action === 'fetch_rfq') {
            const [rows] = await db.query('SELECT * FROM rfq_submissions ORDER BY created_at DESC');
            return res.status(200).json({ success: true, data: rows });
        }

        if (action === 'fetch_career') {
            // Exclude BLOBs to keep response light
            const [rows] = await db.query(`
                SELECT id, job_type, job_role, position, name, email, phone, education, address, 
                       resume_filename, resume_mimetype, photo_filename, photo_mimetype, created_at 
                FROM career_applications 
                ORDER BY created_at DESC
            `);
            return res.status(200).json({ success: true, data: rows });
        }

        if (action === 'download_file') {
            const { id, type } = req.query; // type: 'resume' or 'photo'
            if (!id || !type) return res.status(400).json({ error: 'Missing ID or type' });

            const [rows]: any = await db.query(
                'SELECT resume_data, resume_mimetype, resume_filename, photo_data, photo_mimetype, photo_filename FROM career_applications WHERE id = ?',
                [id]
            );

            if (!rows || rows.length === 0) return res.status(404).json({ error: 'Not found' });

            const record = rows[0];
            let fileData, mimeType, fileName;

            if (type === 'resume') {
                fileData = record.resume_data;
                mimeType = record.resume_mimetype;
                fileName = record.resume_filename;
            } else if (type === 'photo') {
                fileData = record.photo_data;
                mimeType = record.photo_mimetype;
                fileName = record.photo_filename;
            } else {
                return res.status(400).json({ error: 'Invalid type' });
            }

            if (!fileData) return res.status(404).json({ error: 'File data not found' });

            res.setHeader('Content-Type', mimeType || 'application/octet-stream');
            res.setHeader('Content-Disposition', `attachment; filename="${fileName || 'download'}"`);
            res.send(fileData);
            return;
        }

        return res.status(400).json({ error: 'Invalid action' });

    } catch (error: any) {
        console.error('Admin API Error:', error);
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}
