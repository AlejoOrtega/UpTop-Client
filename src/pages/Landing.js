import React, { useState } from 'react';

import logoBlack from '../resources/images/logo-black.png'
import LogIn from '../components/LogIn';
import SignIn from '../components/SignIn';

import { Button } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate()
    const [isLogInSelected, setLogInSelection] = useState(false)
    const [isSignInSelected, setSignInSelection] = useState(false)
    const changeLogInSelectedState = () => {
        setLogInSelection((prev)=> !prev)
        setSignInSelection(false)
    }
    const changeSignInSelectedState = () => {
        setSignInSelection((prev)=> !prev)
        setLogInSelection(false)
    }
    return ( 
    <div>
        <div className='header'>
            <h1>Up Top Trading</h1>
            <img className='logo-header' src={logoBlack} alt='up-top-logo' onClick={()=>navigate('/')}/>
            <div className='log-in-section'>
                <Button variant="contained" sx={{marginRight: '10px'}} onClick={changeLogInSelectedState}>
                    Log In
                </Button>
                <Button variant="contained" onClick={changeSignInSelectedState}>Sign In</Button>
                { isLogInSelected? <LogIn/> : null }
                { isSignInSelected? <SignIn/> : null}
            </div>
            
        </div>
       
        <Outlet/>
        
        <div className='footer'>
            <img className='logo-footer' src={logoBlack} alt='Logo black'/>
            <div>
                <p>Home</p>
                <p>Up Top Trading</p>
                <p>Market Snapshot</p>
                <p>Market News</p>
                <p>Free Guide</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div>
                <p>Discord</p>
                <p>Instagram</p>
            </div>
            <div>
                <p>1111 6th ave</p>
                <p>San Diego CA 92101</p>
                <p>Lucky@investcipher.com</p>
                <p>Drew@investcipher.com</p>
                <p>www.Investcipher.com</p>
            </div>
        </div>
    </div> 
    );
}
 
export default Landing;