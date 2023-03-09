import { Router } from "express";
import expenseRouter from "./expense.js";
import incomeRouter from "./income.js";

const router = Router();

router.get('/status', (req, res) => {
    console.log(req.url);
    res.json({ message: 'Server is live!', code: 200 });
});

router.use('/expense', expenseRouter)
router.use('/income', incomeRouter)



export default router;