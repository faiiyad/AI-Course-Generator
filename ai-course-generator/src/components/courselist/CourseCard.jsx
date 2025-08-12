import '../../css/courses/CourseCard.css'

function CourseCard({name, difficulty}){

    return <>
    <div className={`course-card ${difficulty}`}>
        <div className="media">
            <img src='/assets/wallpaper_anime.jpeg' alt="" className='card-image'/>
        </div>
        <div className="text">
            <p>{name}</p>
            <div className={`${difficulty}`}>{difficulty}</div>
        </div>
        
    </div>
        
    </>

}

export default CourseCard;