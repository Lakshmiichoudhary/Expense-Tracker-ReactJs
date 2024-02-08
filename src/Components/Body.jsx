import React, { useEffect, useState } from 'react'
import Login from './Auth/Login'
import Expense from './Expense'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Utils/Firebase'
import { useDispatch } from 'react-redux'
import { addAuth, removeAuth } from '../Store/AuthSlice'
import Profile from './Profile/Profile'

const Body = () => {
  const dispatch = useDispatch()
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState('');


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/expense",
      element: <Expense isProfileComplete={isProfileComplete} userDisplayName={userDisplayName}/>
    },
    {
      path: "/profile",
      element: <Profile setIsProfileComplete={setIsProfileComplete} setUserDisplayName={setUserDisplayName}/>
    }

    ])

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(addAuth(user));
          setIsProfileComplete(isProfileComplete(user));
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
