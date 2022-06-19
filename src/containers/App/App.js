import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Provider as ReduxProvider } from "react-redux";

import Routes from "../Routes";
import store from "../../store";

const theme = createTheme();

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
