import { useState } from "react";
import { ButtonFor2ndListStyle } from "../Styles";
import { Button, InputBase, Paper, IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

//...................... End import.............................................//

const ButtonFor2ndList = () => {
    
  const buttonStyle = ButtonFor2ndListStyle();

  const [open, setOpen] = useState(false);
  const [writeReview, setWriteReview] = useState("");
  const [review, setReview] = useState([]);

  const handleInput = (evt) => {
    setWriteReview(evt.target.value);
  };

  return (
    <>
      {review.map((data) => (
        <Paper style={{ margin: "5px", paddingBottom: "7px" }}>{data}</Paper>
      ))}

      {open && (
        <>
          <div style={{ margin: "5px" }}>
            <Paper>
              <InputBase
                placeholder="Type the Work"
                className={buttonStyle.input}
                multiline
                onChange={(evt) => handleInput(evt)}
              ></InputBase>
            </Paper>
          </div>

          <div>
            <Button
              className={buttonStyle.button}
              onClick={() => {
                setOpen(!open);
                review.push(writeReview);
                setReview([...review]);
              }}
            >
              +Add Review
            </Button>
            <IconButton>
              <ClearIcon onClick={() => setOpen(!open)}></ClearIcon>
            </IconButton>
          </div>
        </>
      )}

      <div>
        <Paper style={{ background: "#EBECF0" }}>
          <Typography onClick={() => setOpen(!open)}>+Add a Card</Typography>
        </Paper>
      </div>
    </>
  );
};
export default ButtonFor2ndList;
