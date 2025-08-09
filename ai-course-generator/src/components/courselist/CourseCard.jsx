import '../../css/courses/CourseCard.css'

function CourseCard({name, difficulty}){

    return <>
    <div className="course-card">
        <div className="media">
            <img src='/assets/background.jpg' alt="image" className='card-image'/>
        </div>
        <div className="text">
            <p>{name}</p>
            <div className={`${difficulty}`}>{difficulty}</div>
        </div>
        
    </div>
        
    </>

}

export default CourseCard;