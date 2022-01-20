import React, { useState } from 'react';
import '../App.css'
import logo from '../images/image2.png'


const Login = () => {
    const [formData,setformData]=useState({
        username:'',
        password:''
    })
    const [showPassword,setshowPassword]=useState(false)
    const handleClick =()=>{
        console.log(formData)
        alert(`Username : ${formData.username}  Password : ${formData.password}`)
    }
    const passwordVisibility = (e)=>{
        e.preventDefault();
        setshowPassword(!showPassword)
    }
  return<div className='login'>
      <div className="logo">
          <img src={logo} alt="" />
      </div>
          <h3>Welcome To Demo</h3>
      <div className="form">
          <input type="text" onChange={(e)=>{setformData({...formData,username:e.target.value})}} placeholder='Username' />
          <div className='password'>
          <input type={showPassword ? 'text' : 'password'} className='input-field' onChange={(e)=>{setformData({...formData,password:e.target.value})}} placeholder='Password'  />
          <span>
          <i onClick={passwordVisibility} class="fa fa-eye" aria-hidden='true' id='eye'></i>
          </span>
          </div>
      </div>
      
      <div className="buttons">
          <button className='loginBtn' onClick={handleClick}>Login</button>
          <button className='signupBtn'onClick={handleClick}>Sign Up</button>
      </div>
      <a href="/">Forgot Password</a>
  </div>;
};

export default Login;
