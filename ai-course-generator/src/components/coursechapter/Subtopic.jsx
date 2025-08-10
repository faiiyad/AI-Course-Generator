import '../../css/coursechapter/Subtopic.css'

function Subtopic(props){

    const subtopic = props.subtopic;
     
    return <>
        <div className="subtopic">
            <h3 className="subtopic-title">{subtopic.subtopicTitle}</h3>
            <div className="subtopic-content">
                <div className="subtopic-text">
                    <p>{subtopic.explanation}</p>
                </div>
                <div className="examples">
                        
                        {subtopic.examples.map((ex, id)=>(
                            <p key={id}>{ex}</p>
                        ))}
                    
                </div>
            </div>
        </div>
    </>
}


export default Subtopic;