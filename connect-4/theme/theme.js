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
      textTransform: "none",
    },
    fontSize: 12,
  },
});

export default theme;
