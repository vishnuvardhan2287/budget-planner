import React from 'react';
import {BudgetConsumer} from '../../store';

function BalanceDisplay() {
    return (
        <BudgetConsumer>
            {value =>{
                const totalExpense = value.expenses.length > 0 ?(
                    value.expenses.reduce((acc,curr)=>{
                        acc += parseInt(curr.amount)
                        return acc
                    }, 0)) : 0;
                
                return(
               <div className="row">
               <div className="col-lg-4">
                   <div className="card">
                       <div className="card-header">Budget</div>
                       <div className="card-body">
                           <h3 className="text-center card-title">{value.budget}</h3>
                       </div>
                   </div>
               </div>
   
               <div className="col-lg-4">
                   <div className="card">
                       <div className="card-header">Expense</div>
                       <div className="card-body">
                           <h3 className="text-center card-title">{totalExpense}</h3>
                       </div>
                   </div>
               </div>
   
               <div className="col-lg-4">
                   <div className="card">
                       <div className="card-header">Balance</div>
                       <div className="card-body">
                           <h3 className="text-center card-title"> {value.budget - totalExpense} </h3>
                       </div>
                   </div>
               </div>
           </div>
                )
            }}
           
        </BudgetConsumer>
    )
}

export default BalanceDisplay;
