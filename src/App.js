import logo from './logo.svg';
import './App.css';
import List from './component/List/List';
import Store from '../src/component/Store/Store';
import { useState } from 'react';
function App() {
  const [data,setData]=useState(Store);
  return (
    <div >
    {/* {data.listIds.map((listId)=>{
      const list=data.lists[listId];
      return <List list={list} key={listId}/>
})} */}
       
   <List/>   
      
     
    </div>
  );
}

export default App;
