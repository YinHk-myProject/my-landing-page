import React from "react";
import PropTypes from "prop-types";
import { Grid, 
    Typography, 
    Button } from "@mui/material";
import { withStyles } from "@mui/styles";

import WaveBorder from "../components/WaveBorder";

const styles = theme => ({
    waveBorder: {
      //borderStyle: 'solid'
    },
    wrapper: {
      //borderStyle: 'solid',
      width: '100%',
      minHeight: 750,
      marginTop: 50,
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'end',
      background: 'rgba(36, 62, 99, 1)',
      paddingTop: 50
    },
    
});


const HeadSection = props => {
  const { classes, theme } = props;
  
  return (
    <div className={classes.wrapper}>
      
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