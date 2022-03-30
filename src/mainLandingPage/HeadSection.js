import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid, 
    Typography, 
    Card, 
    Button, 
    Hidden,
    Divider, 
    CardHeader,
    CardContent } from "@mui/material";
import { withStyles } from "@mui/styles";

import WaveBorder from "../components/WaveBorder";

const styles = (theme) => ({
    waveBorder: {
      paddingTop: theme.spacing(9)
    },
    wrapper: {
        height: 600,
    },
    cardWrapper: {
        height: '100%',
        borderStyle: 'solid',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, rgba(60, 35, 173, 1) 0%, rgba(84, 58, 183, 1) 100%)'
    },
    cardContent: {
        //borderStyle: 'dotted',
        width: '90%',
        minHeight: 380,
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        background: '#FFFFFF',
        borderRadius: 6
    },
    button: { 
        width: '50%',
        height: 50
    },
    image: {
        width: '100%',
        borderRadius: 50
    }
    
});


const HeadSection = props => {
  const { classes, theme } = props;
  
  return (
    <div className={classes.wrapper}>
     <Card className={classes.cardWrapper}>
      <CardContent className={classes.cardContent}>
        <Grid container direction="row" justifyContent="center">
         <Grid item xs={6}>
            <Card> 
             <CardHeader title={
                <Typography gutterBottom variant="h3" component="h2" color="red">
                    Currency exchange rate
                </Typography>} />
             <CardContent>
                <Typography gutterBottom variant="h5" color="textPrimary" component="p" >
                  Looking for currency rate ? here is the right place!
                </Typography>
                <Typography gutterBottom variant="body" color="textPrimary" component="p">
                  Currency converter and reliable exchange rate for different currency.
                  Looking for historical exchange rate? This website can provide you with past 
                  exchange rates from 2000. 
                </Typography>
                <Button variant="contained" color="secondary" className={classes.button} style={{marginTop: 55}}>Explore</Button>
             </CardContent>
            </Card>
         </Grid>
         <Grid item xs={6}>
            <img src={require('../images/cash.jpg')} alt='cash jpg' className={classes.image}/>
         </Grid>
        </Grid>
      </CardContent>
     </Card>
     <WaveBorder 
        upperColor={theme.palette.blueTheme.electric}
        waveColor1={theme.palette.blueTheme.light}
        waveColor2={theme.palette.blueTheme.royal}
        waveColor3={theme.palette.blueTheme.maya}
        waveColor4= '#FFFFFF'
        className={classes.waveBorder}
     />
    </div>
  );
}


HeadSection.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
}; 

export default withStyles(styles, { withTheme: true })(HeadSection);
