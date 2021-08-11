import React from 'react';
import logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom'


const Login = () => {
    return(
        <div className='loginContainer'>
            <form className='loginForm'>
                <img src={logo} alt='' width='200px' height='190px'/>
                <h1>Login</h1>
                <input className='inputField' type='text' id='username' name='username' placeholder='User Name'/>
                <input className='inputField' type='password' id='password' name='password' placeholder='Password..'/>
               <Link to = "/Home"> <input className='loginButton' type='submit' name='login' value='Login'/></Link>
            </form>
        </div>
    );
};

export default Login;