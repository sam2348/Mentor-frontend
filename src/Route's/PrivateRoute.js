import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = (props) => {
  const navigate =useNavigate();
  const {Component}=props
  useEffect(() => {
    let login = localStorage.getItem('token');
    if(!login){
      navigate('login')
    }
  })
  
  return (
        <>
        <Component />
        </>
  )
}

export default PrivateRoute;