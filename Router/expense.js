import { Router } from "express";
import { addExpense, deleteExpenseById, getAllExpenses } from "../Controller/ExpenseController.js";


const expenseRouter = Router();

expenseRouter.post('/', addExpense);
expenseRouter.get('/', getAllExpenses);
expenseRouter.delete('/:id', deleteExpenseById);

export default expenseRouter;