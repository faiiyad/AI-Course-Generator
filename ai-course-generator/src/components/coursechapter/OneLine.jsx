import { useState } from "react"
import {useParams} from "react-router-dom"
import '../../css/coursechapter/Quiz.css'
import updateScore from "../../scripts/scoring/updateScore";
import { useToken } from "../../context/TokenContext";

function OneLine({number, question, answer}){
    const {token} = useToken();
    const {difficulty, id, index} = useParams();    
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
                        updateScore(token, true, id, index, number);
                        
                        setUser("");
                    }else{
                        setShowWrong(true);
                        setUser("");
                        console.log(number, difficulty, id, index);
                        updateScore(token, false, "", "", "");
                        setTimeout(()=>{setShowWrong(false)}, 1000);
                        
                    }
                }}>Submit!</button>

            </div>     
        </div>    
    </>
}

export default OneLine;