import { Paper, Typography } from "@material-ui/core";
import { CardStyle } from "../Styles";

function CardTrello({todo}){
const cardT=CardStyle();
// console.log(card)
    return(
      <>
     <Paper className={cardT.CardStyle} >
        
           {/* {card.content} */}
        {todo.title}
     </Paper>
   </>
    )
}
export default CardTrello;