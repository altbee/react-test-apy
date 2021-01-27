import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import routes, { renderRoutes } from "routes";
import { createTheme } from "theme";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{renderRoutes(routes as any)}</BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
