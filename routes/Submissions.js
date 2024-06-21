"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/submissions.ts
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
const dbFilePath = './db.json';
// POST /submit - Save submission
router.post('/submit', (req, res) => {
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
    let submissions = [];
    if (fs_1.default.existsSync(dbFilePath)) {
        const data = fs_1.default.readFileSync(dbFilePath, 'utf8');
        submissions = JSON.parse(data);
    }
    // Add new submission
    submissions.push(submission);
    // Write updated submissions to db.json
    fs_1.default.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2));
    res.json({ success: true, submission });
});
// GET /read - Retrieve submission by index
router.get('/read', (req, res) => {
    const index = Number(req.query.index);
    if (isNaN(index)) {
        return res.status(400).json({ error: 'Invalid index parameter' });
    }
    // Read submissions from db.json
    if (fs_1.default.existsSync(dbFilePath)) {
        const data = fs_1.default.readFileSync(dbFilePath, 'utf8');
        const submissions = JSON.parse(data);
        if (index < 0 || index >= submissions.length) {
            return res.status(404).json({ error: 'Submission not found' });
        }
        const submission = submissions[index];
        res.json({ success: true, submission });
    }
    else {
        res.status(404).json({ error: 'No submissions found' });
    }
});
exports.default = router;
