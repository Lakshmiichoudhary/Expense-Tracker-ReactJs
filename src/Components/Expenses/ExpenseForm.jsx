import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';

const ExpenseForm = () => {
    const [moneySpent, setMoneySpent] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [expenses, setExpenses] = useState([]);

    const handleExpense = (e) => {
        e.preventDefault()

        const newExpense ={
        moneySpent,
        description,
        category
        }

        setExpenses([...expenses,newExpense])

        setMoneySpent("")
        setDescription("")
        setCategory("")
    }
  
  return (
    <div>
        <form onSubmit={handleExpense}
            className='flex justify-evenly bg-slate-900 h-32 text-white mx-10 p-4 rounded-full mt-7'>
        <div>
            <label>Amount Spent</label>
            <input className='p-2 m-6 rounded-lg text-black'
                type='number'
                value={moneySpent}
                onChange={(e) => setMoneySpent(e.target.value)}
                required/>
        </div>
        <div>
            <label>Description</label>
            <input className='p-2 m-6 rounded-lg text-black'
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required/>
        </div>
        <div>
        <label>Category</label>   
        <select className='p-2 m-6 rounded-lg text-black'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required>
            <option>Select</option>
            <option>Food</option>
            <option>Petrol</option>
            <option>Rent</option>
            <option>Salary</option>
        </select>
        </div>
        <div>
        <button className='p-3 mt-5 rounded-lg bg-emerald-600 hover:bg-emerald-800 '
        type='submit'>
            Add Expense
        </button>
        </div>
        </form>
        <ExpenseItem expenses={expenses} />
    </div>
  )
}

export default ExpenseForm
