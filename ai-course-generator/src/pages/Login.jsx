import { useState } from "react";
import { useToken } from "../context/TokenContext";
import lookupCreds from "../scripts/auth/lookupCreds";

function Login(){
    const { setToken} = useToken();
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");


    return <>
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
                const token = await lookupCreds(username, pass);
                console.log(token)
                setToken(token);
                
                
            }

        }>Submit</button>
        <button>Don't have an account? <br /> Sign up!</button>
    
    
    </>
}


export default Login;