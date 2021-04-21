import Expense from './components/Expenses/Expense';
import NewExpense from "./components/NewExpense/NewExpense";
import React,{useState} from 'react';

const App = () => {
    const initialExpenseList = [
        {expenseTitle: "Car Insurance", expenseAmount: "$250", expenseDate: new Date(2021, 3, 12)},
        {expenseTitle: "Bus Insurance", expenseAmount: "$550", expenseDate: new Date(2021, 3, 16)}
    ];
    const [expenseList, setExpenseList] = useState(initialExpenseList);

    const newExpenseHandler = (newExpense) => {
        console.log(newExpense);
        setExpenseList(prevExpense => {
            return [newExpense, ...prevExpense];
        });
    }

    return (
        <div>
            <NewExpense onNewExpense={newExpenseHandler}/>
           <Expense items={expenseList}></Expense>
        </div>
    );
}

export default App;
