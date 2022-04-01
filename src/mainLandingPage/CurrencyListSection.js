import React from "react";
import { Card, CardHeader, CardContent, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";

import Carsousel from "../components/Carousel";
import carouselList from "../carouselList";

const styles = theme => ({
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        paddingTop: 350,
        paddingBottom: 50
    },
    title: {
        paddingBottom: 100,
        fontSize: theme.title.titleFontSize,
        fontWeight: theme.title.titleFontWeight, 
        fontFamily: theme.title.titleFontFamily,
        color: theme.title.titleColor
    },
    
});

const CurrencyListSection = props => {
    const { classes } = props;

    return (
      <div className={classes.wrapper}>
        <Typography className={classes.title} gutterBottom >
           Currency List
        </Typography>
        <Carsousel slide={carouselList} />
      </div>
    );
};

CurrencyListSection.propTypes = {
    classes: PropTypes.object.isRequired  
};

export default withStyles(styles)(CurrencyListSection);