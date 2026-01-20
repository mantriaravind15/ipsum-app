import { useState } from 'react';
import './index.css'

const LoginPage = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const[error,setErrorMsg]=useState("")

    const onChangeUsername=(event)=>{
        setUsername(event.target.value)
    }

    const onChangePassword=(event)=>{
        setPassword(event.target.value)
    }

    const onSubmitForm=(event)=>{
        event.preventDefault()
        const userInputUsername="aravind";
        const userInputPassword="aravind2001@"
        if (username!==userInputUsername || password!==userInputPassword){
            setErrorMsg("Invalid Credentials Please Try Again")
        }
    }

  return (
    <div className="login-container">
      <img src="logoipsum-329 1.png" alt="app-logo" className="logo" />

      <form onSubmit={onSubmitForm} className="form">
        {/* Username */}
        <div className="input-group">
          <img
            src="user_square_shoulders 1.png"
            alt="user-icon"
            className="input-icon"
          />
          <input value={username} onChange={onChangeUsername} className='input-boxes' type="text" placeholder="USERNAME" />
        </div>

        {/* Password */}
        <div className="input-group">
          <img
            src="lock-1 1.png"
            alt="lock-icon"
            className="input-icon"
          />
          <input value={password} onChange={onChangePassword}  className='input-boxes'  type="password" placeholder="PASSWORD" />
        </div>
        {error&& (        
          <div className='error-msg-container'>
            <img className='error-icon' src='error-circle 1.png' alt="error-icon"/>
            <p className='error-msg'>{error}</p>
        </div>)
        }

        <button className="signin-btn">SIGN IN</button>
        <button type="submit" className="forgot-btn">
          Forgot Password?
        </button>
      </form>
      <div>
     
      </div>
      <p>© Copyright Dyaz Innovate 2023. All rights reserved.</p>
    </div>
  );
};

export default LoginPage;
