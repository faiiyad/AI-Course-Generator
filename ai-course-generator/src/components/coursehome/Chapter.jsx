import '../../css/coursehome/Chapter.css'


let quizProgress = 0; // need to change this to be dynamic


function Chapter({chapter}){


    return <>
        <div className="chapter">
            <div className="chapter-name">{chapter.chapterTitle}</div>
            <div className="chapter-content">
                <div className="subtopics">
                    {chapter.subtopics.map((subtopic, id)=>(
                        <div  key={id} className="subtopic">
                            {subtopic.subtopicTitle}
                        </div>
                    ))}
                </div>
                <div className="progress">
                    <h2>{quizProgress}/10</h2>
                    <p>Quizes Completed</p>
                </div>
            </div>
        </div>
    </>
}


export default Chapter;