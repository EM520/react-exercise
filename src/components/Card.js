

export default function Card(props){
    console.log(props)
    return (
        <div>
            <p className="card"> {props.phone1}</p>
            <p className="card"> {props.phone2==null?'N/A':props.phone2}</p>
        </div>
        
    )
}