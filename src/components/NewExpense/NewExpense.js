import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const isEditingHandler = () => {
        setEditing(true);
    }

    const stopEditingHandler = () => {
        setEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button type="submit" onClick={isEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm stopEditing={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
};

export default NewExpense;