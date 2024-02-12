import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './AuthSlice'
import expenseReducer from './ExpenseSlice'
import themeReducer from './ThemSlice'

const store = configureStore({
    reducer: {
        auth : AuthReducer,
        expenses : expenseReducer,
        theme : themeReducer

    }

})

export default store;