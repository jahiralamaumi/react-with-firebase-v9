import { Button } from '@mui/material';
import React, { Component, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
    useEffect( ()=>{
        const authToken = sessionStorage.getItem('auth-token');
        if(authToken){
            navigate('/');
        }
        else{
            navigate('/login');
        }
    }, [])
    const handleLogout = () => {
        sessionStorage.removeItem('auth-token');
        navigate('/login');
    }
     return (  
        <div>
            <h1>This is Home</h1>
            <Button onClick={handleLogout} variant='outlined'>Log Out</Button>
        </div>
    );
}
 
export default Home;