import React from 'react'

const ExpenseItem = ({expenses,deleteData,EditData}) => {
  return (
    <div className='p-2 text-center mt-5 bg-slate-700 mx-4 md:mx-40 text-white rounded-lg'>
        <h2 className='text-2xl font-sans m-2'>Your Expense</h2>
        {expenses.length === 0 ? (
            <p className='p-2 m-4 text-amber-300 font-bold'>
                No Expenses Added Yet...
            </p>
        ):(
        <div>    
        {expenses.map((expenseItem,id) => (
          <ul className='md:flex justify-evenly border-b-2 border-black p-4 m-2' key={id}>
            <li className='m-2'>Amount : {expenseItem.moneySpent}</li>
            <li className='m-2'>Description : {expenseItem.description}</li>
            <li className='m-2'>Category : {expenseItem.category}</li>
            <button onClick={() => deleteData(expenseItem.id)}
              className='p-2 px-4 bg-red-800 hover:bg-red-900 rounded-lg'>
              Delete
            </button>
            <button 
            className='p-2 px-6 rounded-lg bg-violet-600 hover:bg-violet-900'
            onClick={() => EditData(
              expenseItem.id,
              expenseItem.moneySpent,
              expenseItem.description,
              expenseItem.category)}>
              Edit
            </button>
        </ul>
        ))}
        </div>)}
    </div>
  )
}

export default ExpenseItem