import { Button, InputBase,Typography, Paper, IconButton } from "@material-ui/core"
import { useState } from "react";
import { btnStyle } from "../Styles";
import ClearIcon from '@material-ui/icons/Clear';
import AddCard from "../AddCard/AddCard";
import Title from "../Title/Title";
function AddButton(props){
   const btn= btnStyle();
   const [open,setOpen]=useState(false);
   const [string,setString]=useState("");

   const handleInput=(evt)=>{
       setString(evt.target.value)
   }


    return(
     <>
     {open && (
     <div>
        <div style={{margin:"5px"}}>
            <Paper>
                <InputBase 
                placeholder="enter the Work" 
                multiline 
                style={{paddingBottom:"70px",margin:"5px"}} 
                onChange={(evt)=>handleInput(evt)}                
                >

                </InputBase>
            </Paper>
        </div>
    
        <div>
            <Paper style={{background:"#EBECF0"}}>
                <Button 
                className={btn.addBtn} 

                onClick={()=>{setOpen(!open);
                
                    props.todo.push({title:string})
                    props.setTodo([...props.todo])

                }}

                // onClick={()=>{setOpen(!open);
                // props.todo.push({title:string})
                // props.setTodo([...props.todo])

                // }}

                // onClick={()=>{setOpen(!open);
                //   props.todo.push({title:string})
                //   props.setTodo([...props.todo]);
                // }} 
                >
                + Add Todo
                </Button>
                    <IconButton>
                        <ClearIcon onClick={()=>setOpen(!open)}/>
                    </IconButton>
            </Paper>
        </div>
        </div>
     )
     }
     <Paper onClick={()=>setOpen(!open)} className={btn.addCard}>
         + Add Card
        </Paper>
            
    </>
    )
}
export default AddButton;