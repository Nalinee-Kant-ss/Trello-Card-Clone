import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { TodoHeadingStyle } from '../Styles';
import Title from '../Title/Title';
function List(){
    const style=TodoHeadingStyle();
    return(
       <Paper className={style.heading}>
        <Typography>
             <CssBaseline>
             <Title/>
             </CssBaseline>
            
        </Typography>
        </Paper>
    )
}
export default List;