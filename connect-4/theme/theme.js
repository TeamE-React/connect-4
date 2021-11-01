import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0075c0",
      contrastText: "#ffffff",
    },
  },
  typography: {
    button: {
      fontFamily: ["Varela Round", "sans-serif"],
      textTransform: "none",
    },
    h5: {
      fontFamily: ["Varela Round", "sans-serif"],
    },
    h6: {
      fontFamily: ["Varela Round", "sans-serif"],
    },
    fontSize: 12,
  },
});

export default theme;
