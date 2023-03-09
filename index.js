import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import router from './Router/index.js';
import errorHandler from './middlewares/errorMiddleware.js';
import APIError from './utils/APIError.js';
import { connectDB } from './utils/db.js';

const app = express();
connectDB()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use('/api', router);

app.get('/favicon.ico', (req, res) => res.status(204));
app.use('/api', router);

app.get('*', (req, res, next) => {
    next(new APIError('Invalid API path', 400));
});
app.post('*', (req, res, next) => {
    next(new APIError('Invalid API path', 400));
});
app.use(errorHandler);

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})