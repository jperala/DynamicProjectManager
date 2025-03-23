const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Path to index.html file
const basePath = "C:/Users/peral/Downloads/task_json_iframe/task_json_iframe - Copy";

// Path to works/frontend directory
const frontendPath = path.join(basePath, "works/frontend");

// Serve static files
app.use(express.static(basePath));

// API to get all .html files in the directory
app.get('/list-all-html-files', (req, res) => {
    fs.readdir(frontendPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to scan directory.' });
        }
        const htmlFiles = files
            .filter(file => file.endsWith('.html')) // Only return .html files
            .map(file => ({
                title: file.replace('.html', ''), // Remove .html extension for display
                url: `/frontend/${file}` // File URL for accessing directly
            }));
        res.json(htmlFiles);
    });
});

// Serve static files for works/frontend
app.use('/frontend', express.static(frontendPath));

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});