import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Subtopic from "../components/coursechapter/Subtopic";
import loadCourse from "../scripts/coursehome/loadCourse";
import '../css/coursechapter/CourseChapter.css'

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
   
    const courseData = chapter?.chapters?.[index] ?? {subtopics: []};

    return <>

        <div className="chapter-content">
            <p className="chapter-number">{courseData.chapterNumber}<span className="five">/5</span></p>
            <p className="chapter-title">{courseData.chapterTitle}</p>
            {courseData.subtopics.map((subtopic, id)=>(
                <Subtopic key={id} subtopic={subtopic}></Subtopic>
            ))}
        </div>
    </>
}


export default CourseChapter;