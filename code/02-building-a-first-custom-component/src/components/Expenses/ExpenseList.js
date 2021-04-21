import ExpenseItem from "./ExpenseItem";
import React from "react";
import './ExpenseList.css'

const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return  <h2 className="expenses-list__fallback">No Content Found!</h2>;
    }
    return(
       <ul className="expenses-list">
           {props.items.map(expense =>
               <ExpenseItem key={expense.id}
                            date={expense.expenseDate}
                            amount={expense.expenseAmount}
                            title={expense.expenseTitle}>
               </ExpenseItem>
           )}
       </ul>);
}
export default ExpenseList;
