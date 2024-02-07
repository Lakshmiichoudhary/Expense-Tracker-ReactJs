import { useRef, useState } from 'react'
import Validation from './Validation'

const Login = () => {
    const[isLogin,setIsLogin] = useState(true)
    const[errormessage,setErrorMessage] = useState()
    const email = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)

    const handleButtonClick = () => {
        console.log(email.current.value)
        console.log(password.current.value)
        console.log(confirmPassword.current.value)
        const message = Validation(
            email.current.value,
            password.current.value,
            confirmPassword.current.value)
        setErrorMessage(message)    
        console.log(message)    
    }

  return (
    <div>
        <h1 className='p-6 text-white text-center text-2xl font-bold bg-gray-950'>Expense Tracker</h1>
      <form 
        onSubmit={(e)=>e.preventDefault()}
        className='p-4 mt-12 w-3/12 mx-auto left-0 right-0 bg-slate-950 text-center rounded-lg'>
        <h1 className='p-2 font-bold text-white'>Sign Up</h1>
        <div>
            <input className='p-3 m-3 rounded-md'
            ref={email}
            type='text'
            placeholder='Email' /> 
        </div>
        <div>
            <input className='p-3 m-3 rounded-md'
            ref={password}
            type='password'
            placeholder='Password' />
        </div>
        <div>
            <input className='p-3 m-3 rounded-md'
            ref={confirmPassword}
            type='password'
            placeholder='Confirm Password' />
        </div>
        <p className='p-2 text-red-600'>{errormessage}</p>
        <button className='p-3 m-3 px-7 rounded-full bg-green-700 hover:bg-green-900 text-white'
            onClick={handleButtonClick}>
            Sign Up
        </button>
        <p className='p-2 text-white cursor-pointer'>
            Have an account? Sign In
        </p>
      </form>
    </div>
  )
}

export default Login
