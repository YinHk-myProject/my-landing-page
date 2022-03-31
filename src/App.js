import React, { Fragment } from "react";
import { ThemeProvider,  StyledEngineProvider, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import theme from './theme';
import MainLandingPage from './mainLandingPage/MainLandingPage';


function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
      
       <Router>
        <Routes>
         <Route path="/" caseSensitive={false} element={ <MainLandingPage /> }/>
        </Routes>
       </Router>
      
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
