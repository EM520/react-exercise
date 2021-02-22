import {createContext, useReducer} from 'react'
const initialState={colors:[]}
export const store = createContext (initialState)
const {Provider} =store
const id = () => Math.random().toString() + "-" + Math.random().toString() 
function TodoReducer(state, action){
    console.log(state,action)
    switch(action.type){
        case 'ADD_COLOR':
            //console.log(state,action)
            const addColor=[...state.colors,{id:id(),colorCode:action.payload}]
        return {
            ...state, colors:addColor
        }
        default:
            throw new Error()
    }
}

const StateProvider = ({children}) =>{
    const [state,dispatch] = useReducer(TodoReducer,initialState)
    return <Provider value={{state,dispatch}}>{children}</Provider>
}
export default StateProvider