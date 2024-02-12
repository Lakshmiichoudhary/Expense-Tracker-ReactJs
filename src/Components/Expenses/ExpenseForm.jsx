import React, { useEffect, useState } from 'react'
import ExpenseItem from './ExpenseItem';
import { auth, db } from '../../Utils/Firebase';
import { getDocs, doc, addDoc, collection, deleteDoc, updateDoc } from '@firebase/firestore'
import { useDispatch } from 'react-redux';
import { addExpense } from '../../Store/ExpenseSlice';
import PremiumButton from './PremiumButton';

const ExpenseForm = () => {
    const [moneySpent, setMoneySpent] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [expenses, setExpenses] = useState([]);
    const [id,setId] = useState("")
    const [show,setShow] = useState(false) 
    const dispatch = useDispatch()

    const value = collection(db,"expense")

    useEffect(() => {
        const getData = async () => {
            const user = auth.currentUser;
            if (user) {
                const userId = user.uid;
                const querySnapshot = await getDocs(value);
                const userExpenses = querySnapshot.docs
                    .filter(doc => doc.data().userId === userId)
                    .map(doc => ({ ...doc.data(), id: doc.id }));
                setExpenses(userExpenses);
            }
        }
        getData();
    }, [value]);

    const handleExpense = async () => {
        const userId = auth.currentUser.uid;
    
        const expenseData = {
            userId: userId,
            moneySpent: moneySpent,
            description: description,
            category: category
        };
    
        dispatch(addExpense(expenseData));
    
        await addDoc(value, expenseData);
    
        setMoneySpent("");
        setDescription("");
        setCategory("");
    };
    

    const handleDelete = async(id) => {
        const deleteData = doc(db,'expense',id)
        await deleteDoc(deleteData)
    }

    const handleEdit = async (id,moneySpent,description,category) => {
        setMoneySpent(moneySpent)
        setDescription(description)
        setCategory(category)
        setId(id)
        setShow(true)
    }

    const handleUpdate = async() => {
        const updateData = doc(db,"expense",id)
        await updateDoc(updateData,{
            moneySpent:moneySpent,
            description:description,
            category:category
        })
        setShow(false)
        setMoneySpent("")
        setDescription("")
        setCategory("")
        setId("")    
    }
  
  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()}
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
        {!show ? (<button className='p-3 mt-5 rounded-lg bg-emerald-600 hover:bg-emerald-800 '
         onClick={handleExpense}>
            Add Expense
        </button>) :(
        <button className='p-3 mt-5 rounded-lg bg-emerald-600 hover:bg-emerald-800 '
         onClick={handleUpdate}>
            update
        </button>)}
        </div>
        </form>
        <ExpenseItem expenses={expenses} 
            deleteData={handleDelete}
            EditData={handleEdit} />
    </div>
  )
}

export default ExpenseForm