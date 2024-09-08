import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div>
      <h1 className='text-center text-5xl'>Login Page</h1>
      <button className={classes.loginBtn}>Login</button>
      <button className='btn'>Login Please</button>
    </div>
  )
}

export default Login;