// routes/submissions.ts
import express, { Request, Response } from 'express';
import fs from 'fs';

const router = express.Router();
const dbFilePath = './db.json';

// POST /submit - Save submission
router.post('/submit', (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;

    if (!name || !email || !phone || !github_link || !stopwatch_time) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Create new submission object
    const submission = {
        name,
        email,
        phone,
        github_link,
        stopwatch_time,
        timestamp: new Date().toISOString()
    };

    // Read existing submissions from db.json
    let submissions: any[] = [];
    if (fs.existsSync(dbFilePath)) {
        const data = fs.readFileSync(dbFilePath, 'utf8');
        submissions = JSON.parse(data);
    }

    // Add new submission
    submissions.push(submission);

    // Write updated submissions to db.json
    fs.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2));

    res.json({ success: true, submission });
});

// GET /read - Retrieve submission by index
router.get('/read', (req: Request, res: Response) => {
    const index = Number(req.query.index);

    if (isNaN(index)) {
        return res.status(400).json({ error: 'Invalid index parameter' });
    }

    // Read submissions from db.json
    if (fs.existsSync(dbFilePath)) {
        const data = fs.readFileSync(dbFilePath, 'utf8');
        const submissions = JSON.parse(data);

        if (index < 0 || index >= submissions.length) {
            return res.status(404).json({ error: 'Submission not found' });
        }

        const submission = submissions[index];
        res.json({ success: true, submission });
    } else {
        res.status(404).json({ error: 'No submissions found' });
    }
});

export default router;
