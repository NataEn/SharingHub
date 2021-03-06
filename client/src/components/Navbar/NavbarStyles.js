import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: { position: "fixed", top: "0", display: "block", zIndex: "100" },
  grow: {
    flexGrow: 1,
  },
  container: { backgroundColor: theme.palette.primary1Color },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
    color: "white",
  },
  a: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: `0.5px solid ${theme.palette.primary2Color}`,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  shareButton: {
    color: "white",
  },
}));
