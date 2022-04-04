import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import { Grid, Typography, Card, Button, IconButton } from "@mui/material";
import { BsArrowLeftRight } from 'react-icons/bs';
import { withStyles } from "@mui/styles"; 

import Data from '../Data';
import WaveBorder from "../components/WaveBorder";
import DropDown from '../components/DropDown';
//import TextInputBox from '../components/TextInputBox';


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
    },
    label: {
      display: 'flex',
      'justify-content': 'center'
    },
    labelText: {
      color: '#0260a8',
      fontWeight: theme.title.titleFontWeight,
      fontFamily: theme.title.titleFontFamily
    },
    dropDown: {
      width: '100%',
      marginBottom: 25
    },
    image: {
      width: 60
    }
});


const HeadSection = props => {
  const { classes, theme } = props;
  //const [stateObj, setStateObj] = useState({ selectedOption: '', selectedList: null });
  const [optionsList, setOptionList] = useState([]); 
  

  useEffect(() => {
    let list = [];
    Data.map(item => list.push({ 
      value: item.countryAbbrev, 
      label: <div style={{display: 'flex', 'justify-content': 'space-around'}}><img src={item.flagURL} alt="flag.png" style={{marginRight: 50}}/>{item.currencyCode}</div> }) );  
    setOptionList(list);
  }, []);
  
  return (
    <div className={classes.wrapper}>
      <Grid container space={2} direction="row" justifyContent="center" sx={{minHeight:600}}>
        <Typography className={classes.typography} gutterBottom variant="h2" component="p">
            Currency converter
        </Typography>
        <Grid item xs={12} sx={{margin: 5}}>
           <Card sx={{minHeight:200, display: 'flex', alignItems: 'center'}}>
              <Grid container space={2}>
                <Grid item xs={12} sm={12} md={5}>
                  <label className={classes.label}>
                    <Typography className={classes.labelText} gutterBottom variant="h6" component="p">
                      From
                    </Typography>
                  </label>
                  <DropDown 
                    className={classes.dropDown}
                    id="conrrency_converter_base"
                    options={optionsList}
                  />
                  {/*<TextInputBox 
                    id="currency_converter_amount"
                    type='input_number'
                    editMode={true}
                    maxLength={10}
                  />*/}
                </Grid>
                <Grid item xs={12} sm={12} md={2} sx={{  display: 'flex', 'justify-content': 'center'}}>
                  <IconButton size="large" >
                    {/*<img src={require('../images/arrow.png')} alt='arrow jpg' className={classes.image}/>*/}
                    <BsArrowLeftRight size='50' color='#183C48' stroke-width='1'/>
                  </IconButton>
                </Grid> 
                <Grid item xs={12} sm={12} md={5}>
                  <label className={classes.label}>
                    <Typography className={classes.labelText} gutterBottom variant="h6" component="p">
                      To
                    </Typography>
                  </label>
                  <DropDown 
                    className={classes.dropDown}
                    id="conrrency_converter_target"
                    options={optionsList}
                  />
                </Grid>
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