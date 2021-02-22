import {useState,useEffect} from "react"
export default function Button2(){
    const [count,setCount]=useState(0)
    function handleCount(){
        setCount (count+1)
    }
    useEffect(()=>{
        if (count==5){
            alert('hello')
        }        
    },[count])

    return (
        <div >
        <button className="button2" onClick={handleCount}>
            {count}
        </button>
        </div>
    )
}