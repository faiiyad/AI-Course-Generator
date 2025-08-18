import { ResponsiveBar } from '@nivo/bar'
import "../../css/users/Bar.css";

const Bar = ({ data  }) => (
    <div className="bar">
        <ResponsiveBar
            data={data}
            keys={['correct']}
            indexBy="chapter"
            colors={['rgb(255, 20, 149)']}
            tooltip={({value}) => (
                        <div>Correct {value}</div>
                    )}
            enableGridY={false}
            enableLabel={false}
            axisBottom={{ legend: 'Chapters', legendOffset: 32 }}
            axisLeft={null}
            margin={{ top: 20, right: 20, bottom: 50, left: 20 }}
            valueScale={{ type: 'linear', min: 0, max: 10 }}
        />
    </div>
)

export default Bar;

