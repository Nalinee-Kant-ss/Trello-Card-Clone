import { useState } from "react";
import { TodoInputStyle } from "../Styles";
import { InputBase, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

//...................... End import.............................................//

function Title() {
  const [open, setOpen] = useState(false);
  const root = TodoInputStyle();
  const [statetitle, setstateTitle] = useState("Todo");

  const handleTitle = (evt) => {
    setstateTitle(evt.target.value);
  };

  return (
    <>
      {open ? (
        <div>
          <InputBase
            value={statetitle}
            className={root.InputBoxStyle}
            onBlur={() => setOpen(false)}
            autoFocus
            onChange={(evt) => handleTitle(evt)}
          ></InputBase>
        </div>
      ) : (
        <div>
          <Typography
            className={root.moreHorizStyle}
            onClick={() => setOpen(true)}
          >
            {statetitle}
            <MoreHorizIcon />
          </Typography>
        </div>
      )}
    </>
  );
}
export default Title;
