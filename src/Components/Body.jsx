import React, { useEffect, useState } from 'react'
import Login from './Auth/Login'
import Expense from './Expense'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Utils/Firebase'
import { useDispatch } from 'react-redux'
import { addAuth, removeAuth } from '../Store/AuthSlice'
import Profile from './Profile/Profile'
import ForgetPassword from './Auth/ForgetPassword'

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
      element: <Profile setUserDisplayName={setUserDisplayName}/>
    },
    {
      path: "/resetPassword",
      element: <ForgetPassword />
    }

    ])

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addAuth({uid:uid , email: email , displayName: displayName,photoURL:photoURL}));
            setIsProfileComplete(!!displayName);
            setUserDisplayName(displayName);
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
