import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";
import './Expenses.css'

const Expenses = (props) => {
    const tabExpense = props.items;

    const [filteredYear, setFilteredYear] = useState('2020');

    const filteredExpenses = tabExpense.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    const filterChangedHandler = selectedYear => {
        setFilteredYear(selectedYear)
    };

    return (
        <div>
            <li>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangedHandler}
                />
                <ExpensesList items={filteredExpenses} />
            </Card>
            </li>
        </div>
    );
}

export default Expenses;