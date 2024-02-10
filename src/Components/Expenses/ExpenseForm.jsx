import React, { useEffect, useState } from 'react'
import ExpenseItem from './ExpenseItem';
import { db } from '../../Utils/Firebase';
import { getDocs, addDoc, collection } from '@firebase/firestore'

const ExpenseForm = () => {
    const [moneySpent, setMoneySpent] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [expenses, setExpenses] = useState([]);

    const value = collection(db,"expense")

    useEffect(() => {
        const getData = async () => {
        const dbval =  await getDocs(value)
            setExpenses(dbval.docs.map(doc => ({...doc.data(),id:doc.id})))
        }
        getData()
    },[])

    const handleExpense = async (e) => {
        e.preventDefault()
        await addDoc(value,{
            moneySpent:moneySpent,
            description: description,
            category:category
        })

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
