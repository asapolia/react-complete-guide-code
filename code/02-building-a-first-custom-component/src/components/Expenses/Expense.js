import './Expense.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, {useState} from 'react';
import ExpenseList from "./ExpenseList";

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const onExpenseFilterChangeHandler = (data) => {
        setFilteredYear(data);
        console.log(filteredYear);
    }
    const filterExpense = props.items.filter((expense) => {
        return expense.expenseDate.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <li>
            <Card className="expenses">
                <ExpenseFilter selectedYear={filteredYear} onChangeFilter={onExpenseFilterChangeHandler}></ExpenseFilter>
                <ExpenseList items={filterExpense}/>
            </Card>
            </li>
        </div>
    );

}
export default Expense;
