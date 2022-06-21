import { Input, Button } from '@mui/material';
import React from 'react';


const SignIn = () => {
    return ( 
    <div className='auth'>
        <form className='auth-form'>
            <input type='text' placeholder='username'/>
            <input type='password' placeholder='password'/>
            <input type='password' placeholder='repeat password'/>
            <button>Sign In</button>
        </form>
    </div>
    );
}
 
export default SignIn;