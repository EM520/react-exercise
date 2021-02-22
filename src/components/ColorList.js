import {useState,useContext} from 'react'
import {store} from './Provider'

export default function ColorList(props){
    // const globalState = useContext (store)
    // const {dispatch} = globalState
    return (
        <ul className='colorList'>
            {props.colors.map((item)=>{
                console.log(item)
                return(
                    <div  style={{backgroundColor:item.colorCode}}>
                    <li className='colorBox' key={item.id} >
                        {/* {item.colorCode} */}
                    </li>
                    </div>
                )})}
        </ul>      
    )
}