import { createTheme } from "@mui/material";
import { blue, deepPurple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: blue,
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
