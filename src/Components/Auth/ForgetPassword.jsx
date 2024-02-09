import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../Utils/Firebase';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate() 

    const handleForgetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset link sent successfully.");
                navigate("/")
            })
            .catch((error) => {
                alert("This Email Id is not Registred" + error.message);
            });
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value); 
    };

    return (
        <div>
            <div className='p-6 font-bold bg-slate-950 text-white'>
                Reset Password!!
            </div>
            <div className='p-6 mx-auto rounded-md left-0 right-0 text-center mt-32 bg-slate-950 text-white w-3/12'>
                <label className='p-2 m-4'>Enter the registered Email Id</label>
                <input
                    className='m-6 p-3 w-64 text-black rounded-md'
                    type='text'
                    value={email} 
                    onChange={handleEmailChange} 
                />
                <button className='p-2 mt-4 bg-red-800 rounded-lg' onClick={handleForgetPassword}>
                    Reset Password
                </button>
            </div>
        </div>
    );
};

export default ForgetPassword;
