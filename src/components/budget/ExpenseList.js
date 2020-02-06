import React from 'react';
import {BudgetConsumer} from '../../store';

function ExpenseList() {
    return (
        <div className="card mt-5">
            <table className="table-bordered">
                <thead>
                    <th>Title</th>
                    <th>Amount</th>
                </thead>
                    <BudgetConsumer>
                        {value =>{
                            const expensesList = value.expenses.length > 0 ? (
                                value.expenses.map((expense,index) =>{
                                    return(
                                        <tr key={index}>
                                            <td>{expense.title}</td>
                                            <td>{expense.amount}</td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td>No Listed Expenses Yet</td>
                                </tr>
                            )
                            return <tbody>{expensesList}</tbody>
                        }}
                    </BudgetConsumer>
            </table>
        </div>
    )
}

export default ExpenseList;
