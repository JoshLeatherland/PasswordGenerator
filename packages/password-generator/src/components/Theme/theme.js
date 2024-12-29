import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2A6478",
    },
    background: {
      default: "#f5f5f5",
      paper: "#f0f4ff",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#141F2F",
      paper: "#1E2A3A",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export { lightTheme, darkTheme };
