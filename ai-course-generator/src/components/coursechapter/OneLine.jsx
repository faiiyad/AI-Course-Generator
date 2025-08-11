import { useState } from "react"
import '../../css/coursechapter/Quiz.css'

function OneLine({question, answer}){
    console.log("rendering");
    
    const [user, setUser] = useState("");       
    const [showCorrect, setShowCorrect] = useState(false);
    const [showWrong, setShowWrong] = useState(false);

    return <>
       <div className="quiz-single">
            {showCorrect && <div className="overlay c">Correct!
                <button className="retry button" onClick={()=>{setShowCorrect(false)}}>Go again?</button>
                </div>}
            {showWrong && <div className="overlay w">Incorrect.</div>}
            <div className="one-line-question">
                <p className="question">{question}</p>
                <input className="answer" type="text" value={user}
                    onChange={(e)=> setUser(e.target.value)}
                ></input>
                <button className="submit-one-line button" onClick ={()=> {
                    if (user.toLowerCase() === answer.toLowerCase()){
                        setShowCorrect(true);
                        setUser("");
                    }else{
                        setShowWrong(true);
                        setUser("");
                        setTimeout(()=>{setShowWrong(false)}, 1000);
                        
                    }
                }}>Submit!</button>

            </div>     
        </div>    
    </>
}

export default OneLine;