import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import Greet from './components/Greet'
import Button1 from './components/Button1'
import Button2 from './components/Button2'
import Card from './components/Card'
import ColorList from './components/ColorList'
import {createContext,useContext,useReducer,useState} from 'react'
import StateProvider,{store} from './components/Provider'
import FormColors from './components/FormColors'
function App() {
const user1 = {
    name: {
      first: 'John',
      last: 'Smith',
    },
    phone: '123-4567'
  }
const user2 = {
    name: {
      first: 'Sarah',
      last: 'Haras',
    },
  }
  return (
    <div>
      <HelloWorld/>
      <Greet user1={user1.name.first+' '+user1.name.last}
             user2={user2.name.first+' '+user2.name.last} />
      <Button1 />
      <Button2/>
      <Card  phone1={user1.phone}
             phone2={user2.phone}      
      />
     
      <StateProvider>
        <FormColors/>
      </StateProvider>
    </div>
  );
}

export default App;
