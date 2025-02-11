import cors from 'cors';
import dotenv from 'dotenv';
import express, { json, urlencoded } from 'express';
import mongoose from 'mongoose';

import articleRoutes from './client/routes/articles.js';
const app = express();



app.use(cors());
dotenv.config({ path: './.env' });

// Middleware to parse JSON
app.use(json());
app.use(urlencoded({ extended: true }));

//Auth
app.use('/articles', articleRoutes)

mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log('Connected!')
    app.listen(process.env.PORT, () => {
        console.log('Server started on port 3000');
    });
})