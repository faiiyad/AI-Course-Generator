import { useState } from "react";
import generateCourse from "../scripts/generateCourse";
import '../css/home/Home.css'
import Loader from "../components/Loader";
import {useNavigate} from 'react-router-dom';
import { useToken } from "../context/TokenContext";

function Home() {
    const {token} = useToken();
    const navigate = useNavigate()
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [warning, setWarning] = useState(false)



    if (loading){
        return <>
            <Loader></Loader>
        </>
    }
    else { return <>
            <div className="home">
                <div className="home-wrapper">
                    {warning && <div className="home-warning">You must enter a prompt!</div>}
                    <div className="brutalist-container">
                        <input type="text" name="" id="main-input" placeholder="TYPE HERE"
                            value={prompt}
                            onChange={(e)=>setPrompt(e.target.value)}
                            className="brutalist-input smooth-type"
                        />
                        <label class="brutalist-label">Generate any course!</label>
                    </div>
                    <button className="brutalist-button" onClick={async() => {
                        
                        if (!token){
                            navigate("/landing")
                        }
                        else if(!prompt){

                            setWarning(true);
                            setTimeout(() => (setWarning(false)), 2000)

                        }else{
                            setLoading(true);
                            const {diff, id} = await generateCourse(prompt);
                            if (diff){
                                navigate(`/courses/${diff}/${id}`)
                            }

                            }}}>
                            <div className="button-text">
                                <span>Let's Go!</span>
                            </div>
                    </button>
                </div>
            </div>
    </>}
}

export default Home;