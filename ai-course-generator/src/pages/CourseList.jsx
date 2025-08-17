import getCourseNames from "../scripts/getCourseNames";
import { useState, useEffect } from "react"
import '../css/courses/CourseList.css'
import CourseCard from "../components/courselist/CourseCard";
import AddCourseCard from "../components/courselist/AddCourseCard";
import { Link } from "react-router-dom";

function CourseList(){
    const [data, setData] = useState([]);

    useEffect(()=> {
        

        const courseAPI = async () => {
            try{
                const apiData = await getCourseNames();
                
                setData(apiData);
            }
            catch(err){console.log(err);
            }
        }

        courseAPI();
    }, [])




    return <>
        <div className="content">
            <h1 className="title">Courses</h1>
            <div className="course-list">
                <div className="courses">
                {data.map((value, id) => (
                    <div key={id} className="course">                    
                        <Link to={`/courses/${value.difficulty}/${value.id}`}><CourseCard key={value.id} name={value.courseTitle} difficulty={value.difficulty}/></Link>
                    </div>
                    
                    ))}
                    <Link to='/'><AddCourseCard/></Link>
                </div>
                
            </div>
        </div>
        
    </>
}

export default CourseList;