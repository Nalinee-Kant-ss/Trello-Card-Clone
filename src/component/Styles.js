import { makeStyles } from "@material-ui/core/styles";

export const TodoHeadingStyle=makeStyles({

    heading:{
        width:"300px",
        background:"#EBECF0",
        margin:"10px"

    },
    
})
export const TodoInputStyle=makeStyles({
    InputBoxStyle:{
        margin:"10px 10px 10px 10px",
        "&:hover":{
            background:"#ddd",
            width:"95%"
        }
        
    },
    moreHorizStyle:{
        display:"flex",
        justifyContent:"space-Between",
        alignItems:"center"
    }
})