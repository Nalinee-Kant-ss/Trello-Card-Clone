import { InputBase, Typography } from "@material-ui/core";
import { useState } from "react";
import  { TodoInputStyle } from '../Styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function Title(){
    const [open,setOpen]=useState(false);
    const root=TodoInputStyle();
    return(
        <>
        {open ?
        <div>
            <InputBase value="Todo" className={root.InputBoxStyle}  onBlur={()=>setOpen(false)} ></InputBase>
            </div>
            :
            <div>
            <Typography 
            className={root.moreHorizStyle}
            onClick={()=>setOpen(true) }
            ><p>Todo</p>
            <MoreHorizIcon />
            </Typography>
            </div>
            }
        </>
    )
}
export default Title;