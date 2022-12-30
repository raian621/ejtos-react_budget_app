import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { currency, expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    const remaining = budget - totalExpenses;

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{remaining}</span>
        </div>
    );
};

export default Remaining;