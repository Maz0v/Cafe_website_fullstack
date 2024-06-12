import React from 'react'

import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser] = useAuth();
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            toast.success("Logout Successfully")
            setTimeout(()=>{
                localStorage.removeItem("Users");
                
                window.location.reload()
            },500)
            
        } catch (error) {
            toast.error("Error"+error.message);
            setTimeout(() => {});
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md curser-pointer'onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
