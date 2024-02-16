import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Utils/Firebase';
import ExpenseForm from './Expenses/ExpenseForm';
import PremiumButton from './Expenses/PremiumButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../Store/ThemSlice';

const Expense = ({isProfileComplete, userDisplayName}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.darkMode);
  const expenses = useSelector((state) => state.expenses.expenses);

  const handleToggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  const handleprofile = () => {
    navigate('/profile');
  };

  const handleEditProfile = () => {
    navigate('/profile');
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        navigate('/error');
      });
  };

  return (
    <div>
      <div className='md:flex justify-between p-6 text-white bg-slate-950'>
        <h1>Welcome To Expense Tracker</h1>
        {isProfileComplete ? (
          <div className='md:flex md:mt-2'>
            <h1 className='p-2 cursor-pointer' onClick={handleEditProfile}>
              {userDisplayName}!
            </h1>
            <PremiumButton expenses={expenses} />
            <button
              onClick={handleToggleTheme}
              className={`md:ml-6 ml-2 p-2 rounded-lg ${isDarkTheme ? 'bg-gray-300 text-gray-800' : 'bg-gray-800 text-white'}`}
            >
              Theme
            </button>
            <div>
              <button className='md:ml-6 ml-2 bg-blue-500 p-2 rounded-lg hover:bg-sky-800' 
              onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className='md:flex'>
            <p className='px-2 py-1'>
              Your Profile is Incomplete.{' '}
              <button className=' text-teal-400' onClick={handleprofile}>
                Complete Now
              </button>
            </p>
          </div>
        )}
      </div>
      <div>
        <ExpenseForm />
      </div>
    </div>
  );
};

export default Expense;
