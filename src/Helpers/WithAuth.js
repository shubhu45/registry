import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function WithAuth(props){
    let history = useHistory()
    let isLoggedin = localStorage.getItem('isLoggedIn')
    console.log("isLogged in===", isLoggedin,typeof(isLoggedin))


    if(isLoggedin === 'true'){
        return <>{props.children}</>
    }else{
        history.push('/');
        return<></>
    }
}