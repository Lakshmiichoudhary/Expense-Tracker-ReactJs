import React from 'react'

const ExpenseItem = ({expenses}) => {
  return (
    <div className='p-2 text-center mt-5 bg-slate-700 mx-40 text-white'>
        <h2 className='text-2xl font-sans m-2'>Your Expense</h2>
        {expenses.length === 0 ? (
            <p className='p-2 m-4 text-amber-300 font-bold'>
                No Expenses Added Yet...
            </p>
        ):(
        <div>    
        {expenses.map((expenseItem,id) => (
          <ul className='flex justify-evenly border-b-2 border-black p-4 m-2' key={id}>
            <li className='m-2'>Amount : {expenseItem.moneySpent}</li>
            <li className='m-2'>Description : {expenseItem.description}</li>
            <li className='m-2'>Category : {expenseItem.category}</li>
        </ul>
        ))}
        </div>)}
    </div>
  )
}

export default ExpenseItem
