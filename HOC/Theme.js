import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { red, green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: "#0093AB",
      main: "#F6CB18",
      dark: "#FDF0B9",
    },
    secondary: {
      light: "#fff5f8",
      main: "#F7CC15",
      dark: "#e62958",
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e",
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: [
      "Mulish",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed

    h6: {
      fontWeight: 500,
    },
  },
});

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
