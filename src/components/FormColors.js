import {useState,useContext} from 'react'
import {store} from './Provider'
import ColorList from './ColorList'


export default function FormColors(){
    const globalState = useContext(store)
    const [text,setText] = useState('')
    const colors = globalState.state.colors
    const {dispatch} = globalState
    function handleSubmit(e){
        e.preventDefault();
        const action = {type:"ADD_COLOR",payload:text}
        dispatch(action)
        setText('')
    }
    return(
        <div className='palette'>
            <header>Color Palette</header>
            <div className="colorBox">
                <form onSubmit={handleSubmit} action=''> 
                <input 
                value={text} type="text" className="inputCode"
                onChange={(e)=>setText(e.target.value)}
                placeholder="Input Color Code"
                />
                </form>

                <ColorList colors={colors}/>

            </div>
        </div>
    )
}

