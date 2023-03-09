import { Router } from "express";
import { addExpense } from "../Controller/ExpenseController.js";


const expenseRouter = Router();

expenseRouter.post('/', addExpense);

export default expenseRouter;