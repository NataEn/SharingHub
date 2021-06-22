import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  carousel__arrow: {
    position: "absolute",
    top: "50%",
    display: "block",
    color: "#111",
    cursor: "pointer",
    opacity: ".75",
    transform: " translateY(-50%)",
    transition: "opacity .15s cubic-bezier(.4, 0, 1, 1)",

    "&:focus": {
      outline: 0,
    },

    "&:hover": {
      opacity: ".5",
    },
  },

  left: {
    left: "32px",
  },

  right: {
    right: "32px",
  },
}));
