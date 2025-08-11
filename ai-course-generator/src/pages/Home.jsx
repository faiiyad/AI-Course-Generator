import { useState } from "react";
import generateCourse from "../scripts/generateCourse";
import '../css/home/Home.css'
import Loader from "../components/Loader";
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);



    if (loading){
        return <>
            <Loader></Loader>
        </>
    }
    else { return <>
            <div className="home">
                <div className="home-wrapper">
                    {/* <div className="home-header">
                        <h1 className="home-line">Generate a course about</h1>
                        <h1 className="home-hook">Anything!</h1>
                    </div>         */}
                    <div className="brutalist-container">
                        <input type="text" name="" id="main-input" placeholder="TYPE HERE"
                            value={prompt}
                            onChange={(e)=>setPrompt(e.target.value)}
                            className="brutalist-input smooth-type"
                        />
                        <label class="brutalist-label">Generate any course!</label>
                    </div>
                    <button className="brutalist-button" onClick={async() => {
                        
                        if(!prompt){

                            window.alert("Please enter a prompt");

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