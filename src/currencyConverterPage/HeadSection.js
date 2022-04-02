import React from "react";
import PropTypes from "prop-types";
import { Grid, 
    Typography,
    Card,
    CardContent, 
    Button } from "@mui/material";
import { withStyles } from "@mui/styles";
import Select from 'react-select';

import Data from '../Data';
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
    typography: {
      color: '#FFFFFF',
      fontWeight: theme.title.titleFontWeight, 
      fontFamily: theme.title.titleFontFamily
    }
    
});


const HeadSection = props => {
  const { classes, theme } = props;
  const [stateObj, setStateObj] = useState({ selectedOption: '', selectedList: null })
  let optionsList = []; 
  

  useEffect(() => {
    Data.map(item => {
      optionsList.push({ value: item.countryAbbrev, label: item.currencyCode, img: item.flagURL });
    })
  })
  
  return (
    <div className={classes.wrapper}>
      <Grid container space={2} direction="row" justifyContent="center" sx={{minHeight:500}}>
        <Typography className={classes.typography} gutterBottom variant="h2" component="p">
            Currency converter
        </Typography>
        <Grid item xs={12} sx={{padding: 3}}>
           <Card>
              <Grid container space={2}>
                <Select 
                    option={optionsList}
                    value={stateObj.selectedList}
                />
              </Grid>
           </Card>
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