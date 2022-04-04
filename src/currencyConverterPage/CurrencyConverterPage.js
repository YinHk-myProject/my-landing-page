import React, { Fragment, useState, useEffect } from "react";
import { withStyles } from "@mui/styles";

import NavBar from '../components/NavBar';
import HeadSection from './HeadSection';
import ContentSection from './ContentSection';
import FooterSection from '../components/FooterSection'; 

const styles = () => ({
    wrapper: {
      width: 'inherit',
      height: 'inherit'
    }
});

const CurrencyConverterPage = props => {
    const { classes } = props;
    return (
      <Fragment>
        <NavBar />
        <HeadSection />
        <ContentSection />
        <FooterSection />
      </Fragment>
    );
};

export default withStyles(styles)(CurrencyConverterPage);

