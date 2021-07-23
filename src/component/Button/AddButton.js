import { Button, InputBase,Typography, Paper, IconButton } from "@material-ui/core"
import { useState } from "react";
import { btnStyle } from "../Styles";
import ClearIcon from '@material-ui/icons/Clear';
import AddCard from "../AddCard/AddCard";
function AddButton(){
   const btn= btnStyle();
   const [open,setOpen]=useState(false);
    return(
     <>
     {open && (
     <div>
        <div style={{margin:"5px"}}>
            <Paper>
                <InputBase placeholder="enter the Work" multiline style={{paddingBottom:"70px",margin:"5px"}} ></InputBase>
            </Paper>
        </div>
    
        <div>
            <Paper style={{background:"#EBECF0"}}>
                <Button className={btn.addBtn} onClick={()=>setOpen(!open)} >+ Add Todo</Button>
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