import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../css/components/activity.css"

export function Activity(props){

  const data = props.data
  const getcenter = (props.maxkg - props.minkg)%2 === 0 ? 1 : 2
  console.log(getcenter)

    return (
        <article className="activity">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart margin={0} data={data}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey={"day"} tickLine={false}/>
                  <YAxis hide="true" yAxisId={"left"} dataKey={"calories"} orientation="left"/>
                  <YAxis yAxisId={"right"} domain={[props.minkg - getcenter , props.maxkg + 1]} ticks={[props.minkg - getcenter, ((props.minkg - getcenter) + (props.maxkg +1))/2 ,props.maxkg + 1]} dataKey={"kilogram"} orientation="right" axisLine={false} tickLine={false}/>
                  <Tooltip />
                  <Bar barSize={14} yAxisId="right" dataKey="kilogram" fill="#282D30" radius={[20, 20, 0, 0]}/>
                  <Bar barSize={14} yAxisId="left" dataKey="calories" fill="#E60000" radius={[20, 20, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </article>
    );
}
