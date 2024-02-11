import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activatePremium } from '../../Store/ExpenseSlice';

const PremiumButton = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector(state => state.expenses.totalAmount);
  const isPremiumActivated = useSelector(state => state.expenses.isPremiumActivated);

  const handleActivatePremium = () => {
    dispatch(activatePremium());
  };

  return !isPremiumActivated && totalAmount > 10000 && (
    <button className='ml-4 bg-white text-black hover:bg-slate-400 rounded-lg px-2' 
    onClick={handleActivatePremium}>
      Premium
  </button>
  );
};

export default PremiumButton;
