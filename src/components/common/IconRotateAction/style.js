import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  rotate: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.short,
    }),
  },

  rotateActive: {
    transform: "rotate(180deg)",
  },

  iconStyle: {
    fontSize: "2.5rem",
  },
}));
