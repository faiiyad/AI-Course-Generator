import { useState } from "react"
import '../../css/coursechapter/Quiz.css'

function Mcq({question, answer, options}){     
    const [showCorrect, setShowCorrect] = useState(false);
    const [showWrong, setShowWrong] = useState(false);

    return <>
       <div className="quiz-single">
            {showCorrect && <div className="overlay c">Correct!
                <button className="retry button" onClick={()=>{setShowCorrect(false)}}>Go again?</button>
                </div>}
            {showWrong && <div className="overlay w">Incorrect.</div>}




            <div className="mcq-question">
                <p className="question">{question}</p>
                {options.map((value, idx)=>(
                    <button key={idx} className="submit-mcq button" onClick ={(e)=> {
                        // setUser(e.target.textContent);
                        // console.log(user);
                        
                        if (e.target.textContent.toLowerCase() === answer.toLowerCase()){
                            setShowCorrect(true);
                        }else{
                            setShowWrong(true);
                            setTimeout(()=>{setShowWrong(false)}, 1000);
                        }
                    }}>{value}</button>




                ))}
                

            </div>     
        </div>    
    </>
}

export default Mcq;