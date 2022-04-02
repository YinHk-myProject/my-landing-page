import React from "react";
import PropTypes from "prop-types";
import { Grid, 
    Typography, 
    Button } from "@mui/material";
import { withStyles } from "@mui/styles";

import WaveBorder from "../components/WaveBorder";

const styles = theme => ({
    waveBorder: {
      paddingTop: theme.spacing(9)
    },
    wrapper: {
      //borderStyle: 'solid',
      width: '100%',
      minHeight: 650,
      marginTop: 50,
      display: 'flex', 
      flexDirection: 'column',
      //justifyContent: 'end',
      background: 'rgba(36, 62, 99, 1)',
      paddingTop: 50
    },
    cardWrapper: {
        height: '100%',
        //borderStyle: 'solid',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, rgba(60, 35, 173, 1) 0%, rgba(84, 58, 183, 1) 100%)'
    },
    cardContent: {
        //borderStyle: 'dotted',
        width: '90%',
        minHeight: 400,
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        background: '#FFFFFF',
        borderRadius: 6
    },
    button: { 
        width: '80%',
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(34, 93, 171, 1)'
    },
    image: {
        marginTop: 30,
        width: '100%',
        borderRadius: 50
    },
    freetext: {
      color: "#FFFFFF"
    },
    imageContainer: {
      '@media (max-width:  960px)': {
        marginTop: 20,
        width: '30%'
      },
      '@media (min-width:  961px)': {
        marginLeft: 10,
        width: '80%'
      },
    }
});


const HeadSection = props => {
  const { classes, theme } = props;
  
  return (
    <div className={classes.wrapper}>
      <Grid container space={2} direction="row" justifyContent="center">
         <Grid item xs={12} sm={12} md={6} lg={6} sx={{padding: 10}}>
                <Typography gutterBottom variant="h3" component="h2" color='rgba(34, 93, 191, 1)' fontWeight="bold">
                    Currency exchange rate
                </Typography>
                <Typography gutterBottom className={classes.freetext} variant="h5"  component="p" >
                  Looking for currency rate ? here is the right place!
                </Typography>
                <Typography gutterBottom className={classes.freetext} variant="body" component="p">
                  Currency converter and reliable exchange rate for different currency.
                  Looking for historical exchange rate? This website can provide you with past 
                  exchange rates from 2000. 
                </Typography>
                <Button variant="contained"  className={classes.button} style={{marginTop: 55}}>Get start</Button> 
         </Grid>
         <Grid item xs={12} sm={12} md={6} lg={6} sx={{padding: 3}}>
            {<img src={require('../images/coins.jpg')} alt='cash jpg' className={classes.image}/>}
         </Grid>
      </Grid>
     <WaveBorder 
        upperColor= 'rgba(36, 62, 99, 1)'
        waveColor1= 'rgba(213, 242, 48, .9)'
        waveColor2= 'rgba(98, 230, 245, .8)'
        waveColor3= 'rgba(255, 145, 237, .9)'
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
