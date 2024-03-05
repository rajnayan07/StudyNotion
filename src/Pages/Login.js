import React from 'react'
import {Link} from "react-router-dom";
import Templete from '../components/Templete'
import loginImg from "../Assests/login.png"

const Login = ({setIsLoggedIn}) => {
    return (
        <Templete 
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}

        />
    )
}

export default Login