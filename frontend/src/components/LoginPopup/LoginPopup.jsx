import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({ setShowLogin }) => {

  const {url,setToken} = useContext(StoreContext)

  const [currentState, setCurrentState] = useState("Login")
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })
  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async (event) =>{
    event.preventDefault()
    let reqUrl = `${url}api/user/`;
    if (currentState === "Login"){
      reqUrl += "login"
    }
    else{
      reqUrl += "register" 
    }
    const response = await axios.post(reqUrl,data)

    if (response.data.success) {
      let tkn = response.data.token
      setToken(tkn);
      localStorage.setItem("token", tkn);
      setShowLogin(false)
    }else{
      alert(response.data.message)
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='login-popup-inputs'>
          {currentState === "Login" ? <></> : <input type='text' name='name' onChange={onChangeHandler}
          value={data.name} placeholder='Name' required />}

          <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email' required />
          <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Password' required />
        </div>
        <button type='submit'>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className='login-popup-condition'>
        {currentState === "Sign Up"
        ?
        <><input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p> 
          </>
          : <></>}
        </div>
        {currentState === "Login"
        ?<p>Don't have an account? <span onClick={()=>setCurrentState("Sign Up")}>Create one here!</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>} 
      </form>
    </div>
  )
}

export default LoginPopup
