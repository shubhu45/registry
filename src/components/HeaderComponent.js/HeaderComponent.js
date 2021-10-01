import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './HeaderComponent.scss' 

export default function HeaderComponent(){
    let history = useHistory();
    let loginStatus = localStorage.getItem('isLoggedIn') === 'true' ? true : false;
    let [isLoginPage,setIsLoginPage] = useState(loginStatus);
    
    useEffect(()=>{
        window.addEventListener('storage', () => {
            const status = localStorage.getItem('isLoggedIn') === "true" ? true : false;
            console.log("status is===", status);
            setIsLoginPage(status)
        })
    },[])

    useEffect(()=>{
        console.log("Login details===", loginStatus,isLoginPage,typeof(loginStatus),typeof(isLoginPage))
    },[loginStatus])
    console.log("Islogon===",isLoginPage,loginStatus,typeof(loginStatus))

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn',false)
        history.push('/')
    }
    
    return(
       <>
         <header className="header-component">
            <span className="app-title" onClick={()=>{history.push('/home')}}>Registry</span>
            {<span className="logout-button" style={{display: loginStatus ? 'initial':'none'}} onClick={()=>{handleLogout()}}>Logout</span>}
         </header>
       </>
    )
}