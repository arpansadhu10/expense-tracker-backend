import { Router } from "express";
import { addIncome, deleteIncomeById, getAllIncomes } from "../Controller/IncomeController.js";


const incomeRouter = Router();

incomeRouter.post('/', addIncome);
incomeRouter.get('/', getAllIncomes);
incomeRouter.delete('/:id', deleteIncomeById);

export default incomeRouter;