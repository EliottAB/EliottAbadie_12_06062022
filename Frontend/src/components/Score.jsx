import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import "../css/components/score.css"



export function Score(props){

  let score
  if (props.scorecontainer.score) {
    score = props.scorecontainer.score
  }else{
    score = 0
  }

  if (props.scorecontainer.todayScore) {
    score = props.scorecontainer.todayScore
  }

  const data = [
    { name: 'progress', value: score*100 },
    { name: 'complete progress', value: 100-score*100 }
  ];

  return (
    <article className="score">
        <p className="percentage">{score*100}%<br/><span>de votre<br/>objectif</span></p>
          <ResponsiveContainer width="100%" height="100%">
          <PieChart className="scorecircle" width="100%" height="100%">
          <Pie
            data={data}
            dataKey={"value"}
            innerRadius={"45%"}
            outerRadius={"51%"}
            cornerRadius={"100%"}
            >
            <Cell fill={"#E60000"} stroke="#E60000"/>
            <Cell fill={"transparent"} stroke="transparent"/>
        </Pie>
          </PieChart>
          </ResponsiveContainer>
      </article>
  );
}
