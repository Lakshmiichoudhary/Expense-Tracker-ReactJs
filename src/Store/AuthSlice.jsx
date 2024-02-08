import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "Auth",
    initialState: null,
    reducers: {
        addAuth:(state,action)=>{
            return action.payload
        },
        removeAuth:() => {
            return null
        }
    }
})

export const {addAuth,removeAuth} = AuthSlice.actions

export default AuthSlice.reducer