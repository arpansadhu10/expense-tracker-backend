import Income from "../model/IncomeModel.js";
import APIError from "../utils/APIError.js";


export const addIncome = async (req, res, next) => {
    try {
        const { title, amount, category, description, date } = req.body;
        if (!amount || !category || !date) {
            throw new APIError("Invalid Inputs", 400);
        }
        if (amount <= 0) {
            throw new APIError("Amount cannot be negative or zero", 400);

        }
        const income = await Income.create({
            title, amount, category, description, date
        });
        return res.status(200).json({ message: "Income Created Successfully", data: income, code: 200 });
    } catch (err) {
        next(err);
    }
}


export const getAllIncomes = async (req, res, next) => {
    try {

        const income = await Income.find();
        return res.status(200).json({ message: "Incomes fetched", data: income, code: 200 });
    } catch (err) {
        next(err);
    }
}

export const deleteIncomeById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const income = await Income.deleteOne({ _id: id });
        // console.log(income);
        if (income.deletedCount === 0) {
            throw new APIError("Item Not Found", 404);
        }
        return res.status(200).json({ message: "Income deleted", code: 200 });
    } catch (err) {
        next(err)
    }
}

