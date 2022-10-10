import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {
    const navigate = useNavigate();
    const [btnDisable,setBtnDisable]=useState(false)
    const LogoutHandler=()=>{
      setBtnDisable(true)
      localStorage.removeItem('token')
      toast.error('logout SuccessFully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:'colored'
        });
        setTimeout(() => {
            navigate('login')
        }, 2000);
    }
  return (
    <div>
      <button disabled={btnDisable} onClick={LogoutHandler}>logout</button>
      <ToastContainer />
    </div>
  )
}

export default Home;
