
import {useState} from 'react'
export default function Button1(){
    const [count,setCount]=useState(0)
    function handleCount(){
        setCount (count+1)
    }
    return (
        <div >
        <button className="button1" onClick={handleCount}>{count}</button>
        </div>
    )
}