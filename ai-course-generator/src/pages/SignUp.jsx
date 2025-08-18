import { useState } from "react";
import sendCreds from '../scripts/auth/sendCreds'
import { useToken } from "../context/TokenContext";
import { Link } from "react-router-dom";
import '../css/auth/Login.css'

function SignUp(){
    const {token, setToken} = useToken();
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [login, showLogin] = useState(true);
    const [singup, showSingup] = useState(false);






    return <>
        <div className="content">
            <h1>Sign Up!</h1>
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
                    const token = await sendCreds({username, pass});
                    console.log(token)
                    setToken(token);
                    
                    
                }

            }
            className="login-button"
            >Submit</button>
            <button className="login-button">
                <Link to='/login'>Already have an account? <br /> Login!</Link>
            </button>
        </div>
    
    </>
}


export default SignUp;