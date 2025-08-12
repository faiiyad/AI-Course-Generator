import { useParams, Link } from "react-router-dom";
import Chapter from "../components/coursehome/Chapter";
import '../css/coursehome/CourseHome.css'
import { useEffect, useState } from "react";
import loadCourse from "../scripts/coursehome/loadCourse";



function CourseHome() {
    const {difficulty, id} = useParams();
    console.log(difficulty, id);

    const [course, setCourse] = useState({courseTitle: "", chapters: [], description: "", difficulty: ""})
    
    useEffect(()=>{
        const loadingCourse = async () => {
            try{
                console.log('fetching course');
                const courseData = await loadCourse({id, difficulty});
                setCourse(courseData);
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
    
    return <>
        <div className="course-content">
            <h1 className="title">Welcome to {course.courseTitle}!!</h1>
            <p className="description"> {course.description}</p>
            
            <h1>Chapters:</h1>
            <div className="chapter-list">
                
                {course.chapters.map((chapter, idx)=>(
                    <Link to={`/courses/${difficulty}/${id}/${idx}`}><Chapter key={idx} chapter={chapter}></Chapter></Link>
                ))}
            </div>
        </div>
    </>
}

export default CourseHome;