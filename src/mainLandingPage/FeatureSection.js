import React from "react";
import { Card, CardHeader, CardContent, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";


const styles = theme => ({
    wrapper: {
        width: '100%'
    },
    cardWrapper: {
        height: '100%',
        borderStyle: 'solid',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
    },
    cardContent: {
        width: '90%',
        minHeight: 200,
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        //background: '#FFFFFF',
        borderRadius: 6
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
          <Card className={classes.cardWrapper}>
            <CardHeader title={item.title}/>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" color="textPrimary" component="p">
                    {item.heading}
                </Typography>
                <Typography gutterBottom variant="body" color="textPrimary" component="p">
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