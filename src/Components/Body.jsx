import React from 'react'
import Login from './Auth/Login'
import Expense from './Expense'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

const Body = () => {

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
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
