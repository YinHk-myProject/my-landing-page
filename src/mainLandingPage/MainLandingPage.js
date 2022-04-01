import React, { Fragment, useState, useEffect } from "react";
import { withStyles } from "@mui/styles";

import NavBar from '../components/NavBar';
import HeadSection from './HeadSection';
import FeatureSection from './FeatureSection';
import CurrencyListSection from './CurrencyListSection';
import ToolSection from './ToolSection';

const styles = () => ({
    wrapper: {
      width: 'inherit',
      height: 'inherit'
    }
});

const MainLandingPage = props => {
    const { classes } = props;
    return (
      <Fragment>
        <NavBar />
        <HeadSection />
        <FeatureSection />
        <CurrencyListSection />
        <ToolSection />
      </Fragment>
    );
};

export default withStyles(styles)(MainLandingPage);

