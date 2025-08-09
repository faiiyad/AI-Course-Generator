import { useState } from "react";
import generateCourse from "../scripts/generateCourse";

function Home() {
    const [prompt, setPrompt] = useState("");


    return <>
        
            <input type="text" name="" id="main-input" placeholder="Enter prompt..."
                value={prompt}
                onChange={(e)=>setPrompt(e.target.value)}
            
            />
            <div className="button" onClick={() => {if(!prompt){

                window.alert("Please enter a prompt");

            }else{generateCourse(prompt)}}}>Submit!</div>
    </>
}

export default Home;