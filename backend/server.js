import 'dotenv/config.js';
import express from 'express';
import { connectDB } from './database/db.js';
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    return res.status(200).json({
        succcess: true,
        message: "api running"
    })
})

app.listen(PORT, () => {
    console.log(`visit http://localhost:${PORT}`);
    connectDB();
})