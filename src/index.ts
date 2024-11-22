import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Middleware for JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello TypeScript!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});