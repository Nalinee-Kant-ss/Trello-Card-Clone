import { makeStyles } from "@material-ui/core/styles";

export const TodoHeadingStyle = makeStyles({
    headingBaseLine: {
    background: "green",
  },

  heading: {
    width: "300px",
    background: "#EBECF0",
    marginLeft: "20px",
  },
  mainHeading: {
    marginLeft: "20px",
    fontWeight: "700",
    "&:hover": {
      background: "#EBECF0",
      width: "94%",
    },
    marginBottom: "2px",
  },
  styleOver: {
    overflowY: "scroll",
  },
  heading2: {
    background: "#EBECF0",
    width: "300px",
  },
});
export const TodoInputStyle = makeStyles({
  InputBoxStyle: {
    margin: "10px 10px 10px 10px",
    "&:hover": {
      background: "#ddd",
      width: "95%",
    },
  },
  moreHorizStyle: {
    marginLeft: "5px",
    display: "flex",
    justifyContent: "space-Between",
    alignItems: "center",
  },
});
export const CardStyle = makeStyles({
  CardStyle: {
    margin: "5px",
    padding: "5px",
  },
});
export const btnStyle = makeStyles({
  btn: {
    background: "green",
    width: "40%",
  },
  input: {
    paddingBottom: "50px",
  },
  addCard: {
    margin: "5px",
    padding: "5px",
    background: "#EBECF0",
    "&:hover": {
      background: "#ddd",
    },
  },
  addBtn: {
    background: "#5AAC44",
    "&:hover": {
      background: "#6fbf73",
    },
  },
});
export const ButtonFor2ndListStyle = makeStyles({
  button: {
    background: "#5AAC44",
    "&:hover": {
      background: "#6fbf73",
    },
  },
  input: {
    paddingBottom: "70px",
    margin: "10px",
  },
});
export const headingStylingFor2ndCard = makeStyles({
  heading: {
    background: "#EBECF0",
    width: "300px",
  },
});
