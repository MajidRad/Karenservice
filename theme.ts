import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: { main: "#092846", dark: "#061c32", light: "#173e66" },
    secondary: { main: "#ff941f", dark: "#e87800", light: "#ffb45a" },
    background: { default: "#ffffff", paper: "#ffffff" },
    text: { primary: "#0a2948", secondary: "#52657a" },
  },
  typography: {
    fontFamily: "Vazirmatn, Tahoma, Arial, sans-serif",
    h1: { fontWeight: 900 },
    h2: { fontWeight: 900 },
    h3: { fontWeight: 800 },
    button: { fontWeight: 800 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, textTransform: "none", paddingInline: 24, minHeight: 48 },
      },
    },
  },
});

export default theme;