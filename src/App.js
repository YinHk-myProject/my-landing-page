import React, { Fragment } from "react";
import { ThemeProvider,  StyledEngineProvider, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import theme from './theme';
import MainLandingPage from './mainLandingPage/MainLandingPage';
import CurrencyConverterPage from './currencyConverterPage/CurrencyConverterPage';
import HistoricalConverterPage from './historicalConverterPage/HistoricalConverterPage';
import LatestRatePage from './latestRatePage/LatestRatePage';
import HistoriacalRatePage from './historiacalRatePage/HistoriacalRatePage';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
      
       <Router>
        <Routes>
         <Route path="/" caseSensitive={false} element={ <MainLandingPage /> }/>
         <Route path="/currency_converter" caseSensitive={false} element={ <CurrencyConverterPage /> }/>
         <Route path="/historical_currency_converter" caseSensitive={false} element={ <HistoricalConverterPage /> }/>
         <Route path="/rates" caseSensitive={false} element={ <LatestRatePage /> }/>
         <Route path="/historical_rates" caseSensitive={false} element={ <HistoriacalRatePage /> }/>
        </Routes>
       </Router>
      
      </ThemeProvider>
    </StyledEngineProvider>
    
  );
}

export default App;
