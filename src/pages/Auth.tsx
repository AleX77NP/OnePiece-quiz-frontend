import React, { useState } from 'react'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

const Auth = () => {

    const [isLogin, setIsLogin] = useState(true)

    const toggleLogin = () => {
        setIsLogin(!isLogin)
    }

    return (
        <>
        {isLogin ? <Login toggleLogin={toggleLogin} /> : <Register toggleLogin={toggleLogin} />}
        </>
    )
}

export default Auth
