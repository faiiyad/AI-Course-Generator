import { ResponsivePie } from '@nivo/pie'


const Pie = ({ data /* see data tab */ }) => (
    <ResponsivePie /* or Pie for fixed dimensions */
        height={150}
        width={150}
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        colors={[`rgb(245, 137, 15)`,`rgb(255, 83, 212)`]}
        borderWidth={5}
        borderColor="black"
        enableArcLabels={false}
        enableArcLinkLabels={false}
    />
)

export default Pie;