import React, { useState, useEffect } from "react";
import { ThemeProvider,  StyledEngineProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import theme from './theme';
import MainLandingPage from './mainLandingPage/MainLandingPage';
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
       <Router>
        <Routes>
         <Route path="/" caseSensitive={false} element={ loading ? <Loader /> : <MainLandingPage /> }/>
        </Routes>
       </Router>
       </AnimatePresence>
      </ThemeProvider>
    </StyledEngineProvider>
    
  );
}

export default App;
