import Pie from "./Pie"
import '../../css/users/TotalStats.css'

function TotalStats({success, attempts}){
    const rate = Number((success/attempts)*100).toPrecision(2)
    const fails = (attempts-success)
    const pieData =  [
                    {
                        "id": "Correct",
                        "label": "Correct",
                        "value": success
                    },
                    {
                        "id": "Wrong",
                        "label": "Wrong",
                        "value": fails
                        
                    }]

    return <>
        
        <div className="stat-content">
            <div className="pie">
                <Pie className="pie-chart" data={pieData}></Pie>
            </div>
        
            <div className="stat-text">
                <h3>Rate: {rate}%</h3>
                <p>Correct: {success}</p>
                <p>Total attempts: {attempts}</p>
            </div>
        </div>
        
        
    </>
}

export default TotalStats;