import axios from "axios"

const updateScore = async (token, correct, course, chapter, quiz) => {
    if (correct){
        const sendScores = await axios.post("http://127.0.0.1:8080/user/score",
            {correct: correct, course: course, chapter: chapter, quiz: quiz},
        {headers: {
            Authorization: `Bearer ${token}`
        }});
        console.log(sendScores.data);
        
    } else{
        const sendScores = await axios.post("http://127.0.0.1:8080/user/score",
            {correct: correct},
        {headers: {
            Authorization: `Bearer ${token}`
        }});
        console.log(sendScores.data);
    }
    
}


export default updateScore;