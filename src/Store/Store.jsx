import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './AuthSlice'
import expenseReducer from './ExpenseSlice'

const store = configureStore({
    reducer: {
        auth : AuthReducer,
        expenses : expenseReducer

    }

})

export default store;