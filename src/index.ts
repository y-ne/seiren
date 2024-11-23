import express from 'express';
import 'dotenv/config';
import { db } from './db';
import { usersTable } from './db/schema/user.schema';

const app = express();
const port = process.env.PORT || 3000;

// Middleware for JSON
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
    try {
        const users = await db.select().from(usersTable);
        res.json(users);
    }catch (error) {
        console.log(error);
    }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});