import React, { useState } from 'react';
import { Logo } from './Logo';
import { Notif } from './Notif';
import axios from 'axios';
import getCustomerDetails, { getEmployeeDetails } from '../requests/getRequests';

export const LoginPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const onSubmitHandler = async (event) => {
      event.preventDefault();
      try {
        const requestBody = {
          name: username,
          password: password,
        };
        const response = await axios.post('http://localhost:5000/user/login', requestBody);
        localStorage.setItem('Access Token',response.data.access_token)      
        getEmployeeDetails()
      } catch (error) {
        console.error(error);
      }
      props.loginHandler(username,password)
    };
    
  

    const onChangeUsername = (event) => {
      setUsername(event.target.value);
    }
  
    const onChangePassword = (event) => {
      setPassword(event.target.value);
    }
  
    return (
      <div id="login-page">
        <div id="login">
          <Logo />
          <Notif message={props.notif.message} style={props.notif.style} />
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" autoComplete="off" onChange={onChangeUsername}  value={username} type="text" />
            <label htmlFor="password">Password</label>
            <input id="password" autoComplete="off" onChange={onChangePassword} value={password} type="password" />
            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      </div>
    )
}
