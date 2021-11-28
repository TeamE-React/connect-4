import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0075c0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#0055b0",
      contrastText: "#ffffff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: ["Varela Round", "sans-serif"],
    fontSize: 12,
    h6: {
      ["@media screen and (min-width: 415px)"]: {
        display: "block",
      },
      ["@media screen and (max-width: 414px)"]: {
        display: "none",
      },
      cursor: "pointer",
    },
  },
});

export default theme;
