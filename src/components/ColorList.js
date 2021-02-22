import {useState,useContext} from 'react'
import {store} from './Provider'

export default function ColorList(props){
    // const globalState = useContext (store)
    // const {dispatch} = globalState
    return (
        <ul>
            {props.colors.map((item)=>{
                console.log(item)
                return(
                    <li key={item.id} id='colorList'>
                        {item.colorCode}
                    </li>
                )})}
        </ul>      
    )
}