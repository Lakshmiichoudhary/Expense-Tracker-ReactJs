import { useRef, useState } from 'react'
import Validation from './Validation'
import { auth } from '../../Utils/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const[isLogin,setIsLogin] = useState(true)
    const[errormessage,setErrorMessage] = useState()
    const email = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)
    const navigate = useNavigate()

    const handleButtonClick = () => {
        const emailValue = email.current ? email.current.value : '';
        const passwordValue = password.current ? password.current.value : '';
        const confirmPasswordValue = confirmPassword.current ? confirmPassword.current.value : '';
            const message = Validation(
                emailValue,
                passwordValue,
                confirmPasswordValue)
            setErrorMessage(message)
        if (message) return
    
        if (!isLogin) {
            createUserWithEmailAndPassword(auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {              
                    const user = userCredential.user;
                    navigate("/expense") 

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "/" + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/expense")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "/" + errorMessage);
                });
        } 
    }
    
    const toggle = () => {
        setIsLogin(!isLogin)
        setErrorMessage("")
    }

  return (
    <div>
        <h1 className='p-6 text-white text-center text-2xl font-bold bg-gray-950'>Expense Tracker</h1>
      <form 
        onSubmit={(e)=>e.preventDefault()}
        className='p-4 mt-12 w-3/12 mx-auto left-0 right-0 bg-slate-950 text-center rounded-lg'>
        <h1 className='p-2 font-bold text-white'>
            {!isLogin ? "Sign Up" :"Sign In"}</h1>
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
        {!isLogin && <div>
            <input className='p-3 m-3 rounded-md'
            ref={confirmPassword}
            type='password'
            placeholder='Confirm Password' />
        </div>}
        <p className='p-2 text-red-600'>{errormessage}</p>
        <button className='p-3 m-3 px-7 rounded-full bg-green-700 hover:bg-green-900 text-white'
            onClick={handleButtonClick}>
             {!isLogin ? "Sign Up" :"Sign In"}
        </button>
        <p className='p-2 text-white cursor-pointer'
        onClick={toggle}>
           {!isLogin ? "Have an account? Sign In" : "Dont have an account? signUp"}
        </p>
      </form>
    </div>
  )
}

export default Login
