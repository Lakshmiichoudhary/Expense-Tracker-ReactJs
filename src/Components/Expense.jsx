import React from 'react'
import { useNavigate } from 'react-router-dom'

const Expense = ({isProfileComplete,userDisplayName}) => {
  const navigate = useNavigate()

  const handleprofile = () => {
    navigate('/profile')

  }

  return (
    <div className='flex justify-between p-6 text-white bg-slate-950'>
      <h1>Welcome To Expense Tracker</h1>
      {isProfileComplete ? (
        <h1>{userDisplayName}!</h1>
      ) : (
        <div>
          <p>Your Profile is Incomplete.{' '}
            <button onClick={handleprofile}>Complete Now</button>
          </p>
        </div>
      )}
    </div>
  )
}

export default Expense
