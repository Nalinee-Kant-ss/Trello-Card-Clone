import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { TodoHeadingStyle } from '../Styles';
import Title from '../Title/Title';
import CardTrello from '../Card/CardTrello';
// import Button from '../Button/Button';
import AddButton from '../Button/AddButton';
import AddCard from '../AddCard/AddCard';
function List(){
    const style=TodoHeadingStyle();
    return(
        <>
        <div>
            <Typography className={style.mainHeading}>
                Trello Card
            </Typography>
        </div>
       <Paper className={style.heading}>
        
             <CssBaseline/>
             <Title/>            
            <CardTrello/>
            <CardTrello/>
            <CardTrello/>
            <AddButton />
           
        </Paper>
       
        </>
    )
}
export default List;