
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import handler from '../api/submit-form';
import adminHandler from '../api/admin';

const app = express();
const PORT = 3001;

// Enable CORS for frontend requests
app.use(cors());

// Parse JSON bodies for POST requests
app.use(express.json());

// Log all requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Handle the submit-form route
app.all('/api/submit-form', async (req, res) => {
    try {
        console.log(`Processing ${req.method} request to /api/submit-form`);
        await handler(req as any, res as any);
    } catch (err: any) {
        console.error('Handler Error:', err);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
    }
});


// Handle the admin API route
app.all('/api/admin', async (req, res) => {
    try {
        console.log(`Processing ${req.method} request to /api/admin`);
        await adminHandler(req as any, res as any);
    } catch (err: any) {
        console.error('Admin Handler Error:', err);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
    }
});

// Handle 404 for other routes
app.use((req, res) => {
    console.log(`404 Not Found: ${req.url}`);
    res.status(404).json({ error: 'Not Found' });
});

// Keep process alive dummy interval
const keepAlive = setInterval(() => { }, 60000);

const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`
🚀 Local API Server running at http://localhost:${PORT}
👉 API Endpoint: http://localhost:${PORT}/api/submit-form
✅ Process ID: ${process.pid}
    `);
});

// Global error handlers
process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('UNHANDLED REJECTION:', reason);
});

// Graceful shutdown
const shutdown = () => {
    console.log('Shutting down server...');
    clearInterval(keepAlive);
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
