import Expense from "../model/ExpenseModel.js";
import APIError from "../utils/APIError.js";


export const addExpense = async (req, res, next) => {
    try {
        const { title, amount, category, description, date } = req.body;
        if (!amount || !category || !date) {
            throw new APIError("Invalid Inputs", 400);
        }
        if (amount <= 0) {
            throw new APIError("Amount cannot be negative or zero", 400);

        }
        const expense = await Expense.create({
            title, amount, category, description, date
        });
        return res.status(200).json({ message: "Expense Created Successfully", data: expense, code: 200 });
    } catch (err) {
        next(err);
    }
}

