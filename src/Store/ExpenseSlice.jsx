import { createSlice } from '@reduxjs/toolkit';

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: [],
    totalAmount: 0,
    isPremiumActivated: false,
  },
  reducers: {
    addExpense(state, action) {
      state.expenses.push(action.payload);
      state.totalAmount += parseInt(action.payload.moneySpent); 
      state.showPremiumButton = state.totalAmount >= 10000; 
    },
    activatePremium(state) {
      state.isPremiumActivated = true;
    },
  },
});

export const { addExpense, activatePremium } = expensesSlice.actions;
export default expensesSlice.reducer;
