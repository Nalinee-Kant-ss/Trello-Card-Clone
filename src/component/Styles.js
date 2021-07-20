import { makeStyles } from "@material-ui/core/styles";

export const TodoHeadingStyle=makeStyles({

    heading:{
        width:"300px",
        background:"#EBECF0",
        marginLeft:"20px"

    },
    mainHeading:{
        marginLeft:"50px",
        fontWeight:"600"

    }
    
})
export const TodoInputStyle=makeStyles({
    InputBoxStyle:{
        margin:"10px 10px 10px 10px",
        "&:hover":{
            background:"#ddd",
            width:"95%"
        },

    
    },
    moreHorizStyle:{
        display:"flex",
        justifyContent:"space-Between",
        alignItems:"center",
        
    }
})
export const CardStyle=makeStyles({
    CardStyle:{
    margin:"5px",
    padding:"5px"
    }
})
export const btnStyle=makeStyles({
    btn:{
        background:"green",
        width:"40%"
    },
    input:{
        paddingBottom:"50px"
    },
    addCard:{
        margin:"5px",
        padding:"5px",
        background:"#EBECF0",
        "&:hover":{
            background:"#ddd"
        }
    }

})