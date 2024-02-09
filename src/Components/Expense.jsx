import { signOut } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Utils/Firebase'
import ExpenseForm from './Expenses/ExpenseForm'

const Expense = ({isProfileComplete,userDisplayName}) => {
  const navigate = useNavigate()

  const handleprofile = () => {
    navigate('/profile')
  }

  const handleEditProfile = () => {
    navigate('/profile');
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch(() => {
        navigate('/error')
      })
    
  }

  return (
    <div>
    <div className='flex justify-between p-6 text-white bg-slate-950'>
      <h1>Welcome To Expense Tracker</h1>
      {isProfileComplete ? (
        <div className='flex'>
        <h1 className='px-2 py-1 cursor-pointer'
             onClick={handleEditProfile}>
              {userDisplayName}!
        </h1>
        <div>
            <button className='mx-8 bg-blue-500 px-2 py-1 rounded-lg hover:bg-sky-800'
            onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>  
      ) : (
        <div className='flex'>
          <p className='px-2 py-1'>Your Profile is Incomplete.{' '}
            <button className=' text-teal-400' onClick={handleprofile}>Complete Now</button>
          </p>
        </div>
      )}
      </div>
      <div>
        <ExpenseForm />
      </div>
    </div>
  )
}

export default Expense
