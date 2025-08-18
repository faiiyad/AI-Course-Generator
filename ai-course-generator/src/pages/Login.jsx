import { useState } from "react";
import { useToken } from "../context/TokenContext";
import lookupCreds from "../scripts/auth/lookupCreds";
import { Link, Navigate, useNavigate } from "react-router-dom";
import '../css/auth/Login.css'

function Login(){
    const {setToken} = useToken();
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();


    return <>
        <div className="content">
            <h1>Login!</h1>
            <input className="login-input" type="text" name="username" placeholder="Enter your username"
                value={username}
                onChange={(e) => (setUsername(e.target.value))}
            ></input>

            <input className="login-input" type="text" name="password" id="" placeholder="Enter your password" 
                value={pass}
                onChange={(e)=>(setPass(e.target.value))}
            
            />

            <button onClick={
                async ()=>{
                    const token = await lookupCreds(username, pass);
                    console.log(token)
                    setToken(token);
                    if (token){
                        navigate("/")
                    }
                    
                }

            }
            className="login-button"
            >Submit</button>
            <button className="login-button">
                <Link to='/signup'>Don't have an account? <br /> Sign up!</Link>
            </button>
        </div>
    
    
    </>
}


export default Login;