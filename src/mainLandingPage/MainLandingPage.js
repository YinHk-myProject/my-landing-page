import React, { Fragment, useState, useEffect } from "react";
import { withStyles } from "@mui/styles";

import HeadSection from './HeadSection';

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
        <p>Hello</p>
        <HeadSection />
      </Fragment>
  
    );
};

export default withStyles(styles)(MainLandingPage);

