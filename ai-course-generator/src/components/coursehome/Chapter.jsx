import '../../css/coursehome/Chapter.css'


let quizProgress = 0; // need to change this to be dynamic


function Chapter({chapter}){


    return <>
        <div className="chapter">
            <div className="chapter-name">{chapter.chapterTitle}</div>
            <div className="chapter-content">
                <div className="progress">
                </div>
            </div>
        </div>
    </>
}


export default Chapter;