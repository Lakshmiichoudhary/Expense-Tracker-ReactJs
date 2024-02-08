import React, { useEffect } from 'react'
import Login from './Auth/Login'
import Expense from './Expense'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Utils/Firebase'
import { useDispatch } from 'react-redux'
import { addAuth, removeAuth } from '../Store/AuthSlice'

const Body = () => {
  const dispatch = useDispatch()

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/expense",
      element: <Expense/>
    }

    ])

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,password} = user;
          dispatch(addAuth({uid:uid,email:email,password:password}))
        } else {
          dispatch(removeAuth())
        }
      });

    },[])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
