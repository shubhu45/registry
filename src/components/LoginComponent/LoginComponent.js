import { CircularProgress } from '@material-ui/core';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './LoginComponent.scss'

export default function LoginComponent(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isApiFetching, setApiFetching] = useState(false);
    const [showLogginErrorMssg, setLoginErrorMssg] = useState(false)

    let history = useHistory()
    let handleLogin = () => {
        setApiFetching(true);
        if(userName && password && userName === "foo" && password === "bar"){
            setTimeout(()=>{
              setApiFetching(false)
              localStorage.setItem('isLoggedIn', true);
              history.push('/home')
          },3000)
        }else{
            setLoginErrorMssg(true)
            setApiFetching(false)
        }
    }

   if(isApiFetching){
    return(
        <div style={{display: 'flex',justifyContent:'center',alignItems: 'center',height:500}}><CircularProgress/></div>
    )
   }
   if(!isApiFetching){
    return(
        <div className='login-container'>
            {showLogginErrorMssg && <p>Please enter valid credentials</p>}
            <div>
                <p>Username:</p>
                <input onChange={(e)=>setUserName(e.target.value)} type='text' placeholder="Enter username..."></input>
                <p>Password:</p>
                <input type='password' placeholder="Enter password..." onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <span><button onClick={()=>{handleLogin()}}>Login</button></span>
        </div>
    )
   }
}
