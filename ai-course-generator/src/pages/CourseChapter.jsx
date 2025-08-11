import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Subtopic from "../components/coursechapter/Subtopic";
import loadCourse from "../scripts/coursehome/loadCourse";
import '../css/coursechapter/CourseChapter.css'
import OneLine from "../components/coursechapter/OneLine";
import Mcq from "../components/coursechapter/Mcq";

function CourseChapter() {
    const {difficulty, id, index} = useParams();
    console.log(difficulty, id, index);

    const [chapter, setChapter] = useState({"chapters": []})
    
    useEffect(()=>{
        const loadingCourse = async () => {
            try{
                console.log('fetching course');
                const courseData = await loadCourse({id, difficulty});
                setChapter(courseData);
            }
            catch(err){
                console.log(err);
                
            }
            finally{
                console.log('done loading');
                
            }
        }

        loadingCourse();

    }, [])
   
    const courseData = chapter?.chapters?.[index] ?? {subtopics: [], quiz: []};

    return <>

        <div className="chapter-content">
            <div className="chapter-header">
                {index != 0 ? <Link to={`/courses/${difficulty}/${id}/${Number(index)-1}`} className="chapter-button">⬅</Link>: <Link to={`/courses/${difficulty}/${id}`} className="chapter-button">🏠</Link>}
                <p className="chapter-number">{courseData.chapterNumber}<span className="five">/5</span></p>
                {index != 4 ? <Link to={`/courses/${difficulty}/${id}/${Number(index)+1}`} className="chapter-button">➡</Link>: <Link to={`/courses/${difficulty}/${id}`} className="chapter-button">🏠</Link>}
            </div>
            <p className="chapter-title">{courseData.chapterTitle}</p>
            {courseData.subtopics.map((subtopic, id)=>(
                <Subtopic key={id} subtopic={subtopic}></Subtopic>
            ))}
            <div className="chapter-summary">
                <div className="summary">{courseData.chapterSummary}</div>
            </div>
            <div className="quiz-content">
                <p>Quiz</p>
                <div className="quiz-list">
                    
                    {courseData.quiz.map((quiz, idx) => (
                        quiz.type === "one-word" ? (
                            <OneLine key={quiz.answer} question={quiz.question} answer={quiz.answer} />
                        ) : (
                            <Mcq
                            key={quiz.answer}
                            question={quiz.question}
                            answer={quiz.answer}
                            options={quiz.options}
                            />
                        )
                        ))}
                </div>
            </div>
        </div>
    </>
}


export default CourseChapter;