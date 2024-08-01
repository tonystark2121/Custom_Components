import "./App.css";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { QueryClient } from "react-query";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material";
import SlideDialog from "./pages/SlideDialog";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#0C2F49",
    },
    secondary: {
      main: "rgba(39, 137, 253, 1)",
    },
    text: {
      primary: "#0C2F49",
    },
  },
});

function App() {
  return (
    <>
      <MaterialThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <SlideDialog />
        </ThemeProvider>
      </MaterialThemeProvider>
    </>
  );
}

export default App;
