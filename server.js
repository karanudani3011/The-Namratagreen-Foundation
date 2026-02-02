const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'data', 'visits.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
}

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ count: 0 }));
}

// Get visit count
app.get('/api/visits', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(DATA_FILE));
        res.json(data);
    } catch (error) {
        console.error('Error reading visits:', error);
        res.status(500).json({ error: 'Failed to read visits' });
    }
});

// Increment visit count
app.post('/api/visits/increment', (req, res) => {
    try {
        let data = { count: 0 };
        if (fs.existsSync(DATA_FILE)) {
            data = JSON.parse(fs.readFileSync(DATA_FILE));
        }

        data.count += 1;
        fs.writeFileSync(DATA_FILE, JSON.stringify(data));

        res.json(data);
    } catch (error) {
        console.error('Error incrementing visits:', error);
        res.status(500).json({ error: 'Failed to increment visits' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
