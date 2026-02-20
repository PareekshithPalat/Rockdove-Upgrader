
import type { VercelRequest, VercelResponse } from '@vercel/node';
import formidable from 'formidable';
import fs from 'fs';
import db from '../lib/db.js';

export const config = {
    api: {
        bodyParser: false, // Disable default body parser to handle multipart/form-data
    },
};

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const form = formidable({});

    try {
        const [fields, files] = await form.parse(req);

        // Helper to get single value from fields (formidable returns arrays)
        const getValue = (key: string) => {
            const val = fields[key];
            if (Array.isArray(val)) return val[0];
            return val;
        };

        const type = getValue('type');

        if (!type) {
            return res.status(400).json({ error: 'Missing form type' });
        }

        if (type === 'contact') {
            const name = getValue('name');
            const email = getValue('email');
            const phone = getValue('phone');
            const message = getValue('message');

            if (!name || !email || !phone || !message) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            await db.query(
                'INSERT INTO contact_submissions (name, email, phone, message) VALUES (?, ?, ?, ?)',
                [name, email, phone, message]
            );

            return res.status(200).json({ success: true, message: 'Contact form submitted' });

        } else if (type === 'rfq') {
            const partNumber = getValue('partNumber');
            const condition = getValue('condition') || null;
            const description = getValue('description');
            const certificate = getValue('certificate') || null;
            const quantity = getValue('quality'); // Note: Frontend uses 'quality' for quantity field name
            const notes = getValue('notes');

            if (!partNumber || !description || !quantity || !notes) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            await db.query(
                'INSERT INTO rfq_submissions (part_number, condition_code, description, certificate, quantity, notes) VALUES (?, ?, ?, ?, ?, ?)',
                [partNumber, condition, description, certificate, quantity, notes]
            );

            return res.status(200).json({ success: true, message: 'RFQ submitted' });

        } else if (type === 'career') {
            const jobType = getValue('jobType');
            const jobRole = getValue('jobRole');
            const position = getValue('position');
            const name = getValue('name');
            const email = getValue('email');
            const phone = getValue('phone'); // Frontend uses 'contact' ID but let's check what name it sends
            const education = getValue('education');
            const address = getValue('address');

            // File handling
            const resumeFile = files.resume?.[0];
            const photoFile = files.photo?.[0];

            if (!jobType || !jobRole || !position || !name || !email || !phone || !education || !address) {
                // Note: Phone might come as 'contact' based on Career.tsx IDs. logic below handles renaming if needed via frontend updates.
                return res.status(400).json({ error: 'Missing required text fields' });
            }

            let resumeData: Buffer | null = null;
            let resumeName: string | null = null;
            let resumeType: string | null = null;

            let photoData: Buffer | null = null;
            let photoName: string | null = null;
            let photoType: string | null = null;

            if (resumeFile) {
                resumeData = fs.readFileSync(resumeFile.filepath);
                resumeName = resumeFile.originalFilename;
                resumeType = resumeFile.mimetype;
            }

            if (photoFile) {
                photoData = fs.readFileSync(photoFile.filepath);
                photoName = photoFile.originalFilename;
                photoType = photoFile.mimetype;
            }

            await db.query(
                `INSERT INTO career_applications 
        (job_type, job_role, position, name, email, phone, education, address, resume_filename, resume_data, resume_mimetype, photo_filename, photo_data, photo_mimetype) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [jobType, jobRole, position, name, email, phone, education, address, resumeName, resumeData, resumeType, photoName, photoData, photoType]
            );

            return res.status(200).json({ success: true, message: 'Application submitted' });
        }

        return res.status(400).json({ error: 'Invalid form type' });

    } catch (error: any) {
        console.error('API Error:', error);
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}
