import { Input, Button } from '@mui/material';
import React from 'react';


const LogIn = () => {
    return ( 
    <div className='auth'>
        <form className='auth-form'>
            <input type='text' placeholder='username'/>
            <input type='password' placeholder='password'/>
            <button>Log In</button>
        </form>
    </div>
    );
}
 
export default LogIn;