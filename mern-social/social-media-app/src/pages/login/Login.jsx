import "./login.css"
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

export default function Login(){
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch} = useContext(AuthContext)

    const handleClick = (e)=>{
        e.preventDefault()
        loginCall({email: email.current.value, password: password.current.value}, dispatch)
    }
    console.log(user)
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SocialAPP</h3>
                    <span className="loginDesc">
                        Share and connect with friends
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
                        <input placeholder="Password" type="password" required minLength="6" className="loginInput"ref={password}/>
                        <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress size="30px"/> : "Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton"> Create New Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}