import { Paper } from "@material-ui/core";
import { CardStyle } from "../Styles";

//...................... End import.............................................//

function CardTrello({ todo }) {
  
  const cardT = CardStyle();

  return (
    <>
      <Paper className={cardT.CardStyle}>{todo.title}</Paper>
    </>
  );
}
export default CardTrello;
