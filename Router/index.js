import { Router } from "express";
import expenseRouter from "./expense.js";

const router = Router();

router.get('/status', (req, res) => {
    console.log(req.url);
    res.json({ message: 'Server is live!', code: 200 });
});

router.use('/expense', expenseRouter)



export default router;