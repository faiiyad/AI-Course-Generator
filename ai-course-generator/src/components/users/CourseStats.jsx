import Bar from "./Bar";
import '../../css/users/CourseStats.css'


function CourseStats({course}){

    
    return <>
        <div className="stat-container">
            <h2 className="course-title">{course.courseTitle}</h2>
            <Bar data={course?.data ?? []}></Bar>
        </div>
        

    </>
}

export default CourseStats;





