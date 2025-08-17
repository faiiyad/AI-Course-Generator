import { useState } from "react";
import sendCreds from '../scripts/auth/sendCreds'
import { useToken } from "../context/TokenContext";

function SignUp(){
    const {token, setToken} = useToken();
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [login, showLogin] = useState(true);
    const [singup, showSingup] = useState(false);






    return <>
        <h1>Sign Up!</h1>
        <input type="text" name="username" placeholder="Enter your username"
            value={username}
            onChange={(e) => (setUsername(e.target.value))}
        ></input>

        <input type="text" name="password" id="" placeholder="Enter your password" 
            value={pass}
            onChange={(e)=>(setPass(e.target.value))}
        
        />

        <button onClick={
            async ()=>{
                const token = await sendCreds({username, pass});
                console.log(token)
                setToken(token);
                
                
            }

        }>Submit</button>
    
    </>
}


export default SignUp;