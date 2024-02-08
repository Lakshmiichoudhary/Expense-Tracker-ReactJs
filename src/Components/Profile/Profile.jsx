import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Utils/Firebase';
import { updateProfile } from 'firebase/auth';

const Profile = ({ setIsProfileComplete,setUserDisplayName }) => {
    const navigate = useNavigate();
    const name = useRef();
    const photoUrl = useRef();
   
    const handleCancel = () => {
        navigate("/");
    }

    const handleUpdate = () => {
        const user = auth.currentUser;
        if (user) {
            const displayName = name.current.value;
            const photoURL = photoUrl.current.value;

            updateProfile(user, { displayName, photoURL })
                .then(() => {
                    setIsProfileComplete(true);
                    setUserDisplayName(displayName);
                    navigate("/expense");
                })
                .catch((error) => {
                    console.log("Error updating profile: ", error);
                });
        }
    }

    return (
        <div>
            <h1 className='text-white p-6 bg-gray-950 font-bold'>
                Complete Your Profile...Now
            </h1>
            <div className='p-2 mt-12 rounded-lg bg-slate-950 m-2 w-3/12 mx-auto left-0 right-0 text-center text-white'>
                <form className='p-4'
                onSubmit={(e)=>e.preventDefault()}>
                    <h1 className='p-2 m-2 font-bold'>Contact Details</h1>
                    <div>
                        <label htmlFor='Fullname'>Full Name</label>
                        <input className='p-2 m-4 rounded-md text-black'
                            ref={name}
                            type='text'
                            required/>
                    </div> 
                    <div>   
                        <label htmlFor='Photo-URl'>Photo URL</label>
                        <input className='p-2 m-4 rounded-md text-black'
                            ref={photoUrl}
                            type='text'
                            required/>
                    </div>
                    <div className='flex mx-4'>
                        <button className='m-2 mt-6 bg-green-700 p-3 rounded-lg'
                            onClick={handleUpdate}>
                            Update
                        </button>
                        <button className='m-2 mt-6 p-3 border-2 border-red-800 text-red-800 rounded-lg'
                            onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>      
                </form>
            </div>
        </div>
    );
};

export default Profile;
