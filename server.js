const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Health check endpoint
app.get('/health', (_, res) => res.status(200).send('OK'));

// Catch-all route (if needed)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));
