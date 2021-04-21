import React from 'react';

import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const newExpenseSubmitHandler = (newExpenseData) => {
    const newExpense = {
        ...newExpenseData,
        id: Math.random().toString()
    }
    console.log(newExpense);
    props.onNewExpense(newExpense);

    };
    return (
        <div className='new-expense'>
            <NewExpenseForm onExpenseSubmit={newExpenseSubmitHandler}/>
        </div>
    );
};

export default NewExpense;
