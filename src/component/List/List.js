import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { TodoHeadingStyle } from '../Styles';
import Title from '../Title/Title';
import CardTrello from '../Card/CardTrello';
import AddButton from '../Button/AddButton';
import { useEffect, useState } from 'react';
import { InputBase } from '@material-ui/core';
import axios from 'axios';
function List(){
    const style=TodoHeadingStyle();
    const [open,setOpen]=useState(false);
    const [heading,setHeading]=useState("Trello Card");
    const [todo,setTodo]=useState([]);

   const handleHeading=(evt)=>{
    setHeading(evt.target.value)
   }

   useEffect(()=>{
  axios
  .get("https://jsonplaceholder.typicode.com/todos")
   .then(res=>{
       console.log(res.data);
    setTodo(res.data)
   })
   .catch(err=>{
       console.log(err)
   })
   },[])
    
    return(
        <>
        <br/>
        <div>

        {open ? 
        <InputBase 
         autoFocus
          className={style.mainHeading} 
          onClick={()=>setOpen(!open)} 
          onBlur={()=>setOpen(!open)} 
          value={heading}
          onChange={(evt)=>handleHeading(evt)}
          >

          </InputBase>
        :
        

            <Typography  className={style.mainHeading} onClick={()=>setOpen(!open)}>
            {heading}
            </Typography>

}
        </div>
        
       <Paper className={style.heading}>
        
             <CssBaseline/>
             <Title />  
                   {/* {list.cards.map((card)=>(
                       
                     <CardTrello key={card.id} card={card} />
                  ))}        */}
                  {todo.map((todo)=>(
                      
                      <CardTrello todo={todo} key={todo.id}/>
                    
                  ))}
            <AddButton />
           
        </Paper>
       
        </>
    )
}
export default List;