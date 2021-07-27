import { CssBaseline, Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Title from "../Title/Title";
import { TodoHeadingStyle } from "../Styles";
import CardTrello from "../Card/CardTrello";
import AddButton from "../Button/AddButton";
import { useEffect, useState } from "react";
import { InputBase } from "@material-ui/core";
import ButtonFor2ndList from "../Button/ButtonFor2ndList";
import axios from "axios";

//...................... End import.............................................//

function List() {

  const style = TodoHeadingStyle();
  
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("Trello Card");
  const [secondTitle, setSecondTitle] = useState("Review");
  const [todo, setTodo] = useState([]);

  const handleHeading = (evt) => {
    setHeading(evt.target.value);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ display: "flex", paddingBottom: "5px" }}>
      <div>
          
        {open ? (
          <InputBase
            autoFocus
            className={style.mainHeading}
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(!open)}
            value={heading}
            onChange={(evt) => handleHeading(evt)}
          ></InputBase>
        ) : (
          <Typography
            className={style.mainHeading}
            onClick={() => setOpen(!open)}
          >
            {heading}
          </Typography>
        )}

        <Paper className={style.heading}>
          <CssBaseline />
          <Title />
          {todo.map((todo) => (
            <CardTrello
              todo={todo}
              key={todo.id}
              style={{ overflowY: "scroll" }}
            />
          ))}
          <AddButton setTodo={(data) => setTodo(data)} todo={todo} />
        </Paper>
      </div>

      <div style={{ paddingTop: "25px", marginLeft: "10px" }}>
        <Paper className={style.heading2}>
          <Typography>
            <CssBaseline />
            {secondTitle}
          </Typography>
          <ButtonFor2ndList />
        </Paper>
      </div>
    </div>
  );
}
export default List;
