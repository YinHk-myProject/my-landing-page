import React from "react";
import { Card, CardHeader, CardContent, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";

const styles = theme => ({
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        paddingTop: 280,
        paddingBottom: 50
    },
    cardWrapper: {
        height: '100%',
        backgroundColor: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 55
    },
    CardHeader: {
        color: '#9e035e'
    },
    cardContent: {
        width: '90%',
        minHeight: 200,
        padding: 30,
        borderRadius: 6
        //display: 'flex',
        //alignItems:'center',
        //justifyContent: 'center',
        
    },
    typography1: {
        color: "#0056a1",
        fontFamily:  '"Boogaloo", cursive'
    },
    typography2: {
        color: "textPrimary",
        fontSize: 20
        //fontFamily:  '"Boogaloo", cursive'
    }
});

const featuresList = [
    {
        title: 'Feature 1',
        heading: 'Accurate and reliable rates', 
        description: 'All the exchange rates provided are accurate, reliable and fast response'
    },
    {
        title: 'Feature 2',
        heading: 'Support many currencies', 
        description: 'Convert 170+ major currencies used in 200 countries, and you can find the exchange rate of specific currency'
    },
    {
        title: 'Feature 3',
        heading: 'Historical exchange rates', 
        description: 'You can find out the past exchange rates from 2000 to current'
    },

]

const FeatureSection = props => {
    const { classes } = props;

    return (
      <div className={classes.wrapper}>
        {featuresList.map(item => 
          <Card className={classes.cardWrapper} sx={{ maxWidth: 345 }}>
            <CardHeader className={classes.CardHeader} title={item.title} titleTypographyProps={{fontWeight: 580, fontFamily: '"Secular One", sans-serif' }} />
            <CardContent className={classes.cardContent}>
                <Typography className={classes.typography1} gutterBottom variant="h5"  component="p">
                    {item.heading}
                </Typography>
                <Typography className={classes.typography2} gutterBottom variant="body"  component="p">
                    {item.description}
                </Typography>
            </CardContent>
          </Card> 
        )}
      </div>
    );
};


FeatureSection.propTypes = {
    classes: PropTypes.object.isRequired  
};

export default withStyles(styles)(FeatureSection);