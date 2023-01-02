import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency, expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleSetBudget = (value) => {
        const newValue = Number(value);
        if(newValue > 20000) {
            alert(`Budget not exceed ${currency}20,000`)
        } else if( totalExpenses > newValue) {
            alert(`You cannot reduce the budget value lower than the spending`)
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: Number(value)
            });
        }  
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input
                        required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        step={10}
                        max={20000}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => handleSetBudget(event.target.value)}>
                        </input></span>
        </div>
    );
};

export default Budget;