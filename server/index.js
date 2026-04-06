const express = require('express');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Thai translation support middleware
app.use((req, res, next) => {
    // Here you would integrate Thai translation capabilities
    // This is a placeholder for actual translation logic
    console.log('Thai translation middleware');
    next();
});

// Whisper AI integration
app.post('/whisper', (req, res) => {
    const audioData = req.body.audio;
    // Send audioData to Whisper AI for processing
    // This is a placeholder for actual Whisper AI logic
    res.send('Audio data received for processing');
});

// Sample route
app.get('/', (req, res) => {
    res.send('Hello from TedaCutEnd backend!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});