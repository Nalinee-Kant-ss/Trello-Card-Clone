import { Paper, Typography } from "@material-ui/core";
import { CardStyle } from "../Styles";

function CardTrello(){
const card=CardStyle();
    return(
      
    <Paper className={card.CardStyle} >
          Meeting
    </Paper>
   
    )
}
export default CardTrello;