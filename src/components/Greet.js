
export default function Greet(props){
    console.log(props)
    return(
        <div className="helloName">
            <p>"Hello" {props.user1} </p>
            <p>"Hello" {props.user2} </p>
        </div>
        
        
    )
}