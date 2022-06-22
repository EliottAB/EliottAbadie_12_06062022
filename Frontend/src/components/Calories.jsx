import "../css/components/calories.css"

export function Calories(props){

    return (
        <li>
            <img src={props.icon} alt={props.type}/>
            <p>
                {props.count}<br/>
                <span>{props.type}</span>
            </p>
        </li>
    )

}