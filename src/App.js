import React from "react";
import { ThemeProvider,  CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import theme from './theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Switch>
            <Route path="/">
              
            </Route>
          </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
