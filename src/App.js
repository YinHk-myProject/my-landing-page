import React from "react";
import { ThemeProvider,  CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import theme from './theme';
import MainLandingPage from './mainLandingPage/MainLandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
       <Router>
        <Routes>
         <Route path="/" caseSensitive={false} element={ <MainLandingPage /> }/>
       </Routes>
       </Router>
    </ThemeProvider>
  );
}

export default App;
