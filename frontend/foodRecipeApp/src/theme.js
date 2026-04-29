import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#121212",
      paper: "#1e1e1e"
    },

    text: {
      primary: "#e0e0e0",   // light gray
      secondary: "#a0a0a0"  // darker gray
    },

    primary: {
      main: "#90caf9"
    }
  }
});

export default darkTheme;