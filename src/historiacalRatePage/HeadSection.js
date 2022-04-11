import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import { Grid, Typography, Card, Button, Box } from "@mui/material";
import { withStyles } from "@mui/styles"; 
import axios from "axios";

import Data from '../Data';
import WaveBorder from "../components/WaveBorder";
import DropDown from '../components/DropDown';
import DateInputBox from '../components/DateInputBox';


const styles = theme => ({
    waveBorder: {
      paddingTop: theme.spacing(9)
    },
    wrapper: {
      width: '100%',
      minHeight: 650,
      marginTop: 50,
      display: 'flex', 
      flexDirection: 'column',
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
      fontFamily: theme.title.titleFontFamily,
      marginTop: 15
    },
    dropDown: {
      width: '100%',
      marginBottom: 25
    },
    image: {
      width: 60
    },
    inputbox: {
      width: '100%',
      display: 'flex',
      'justify-content': 'center',
      marginBottom: 15
    },
    button: {
      width: '60%'
    },
    dateInput: {
      display: 'flex',
      'justify-content': 'center',
      marginBottom: 15
    }
});


const HeadSection = props => {
  const { classes } = props;
  const [stateObj, setStateObj] = useState({ base: null, date: null });
  const [optionsList, setOptionList] = useState([]); 
  const [responseObj, setResponseObj] = useState(null); 


  const updateValueObj = (type, val) => {
    if(type=="historical_rate_base_currency") 
      setStateObj({...stateObj, base: val});
    else if(type=="historical_rate_date_picker") {
      setStateObj({...stateObj, date: val});
    }
  };

  useEffect(() => {
    let list = [];
    Data.map(item => list.push({ 
      value: item.currencyCode, 
      label: <div style={{display: 'flex', 'justify-content': 'space-around'}}><img src={item.flagURL} alt="flag.png" style={{marginRight: 50}}/>{item.currencyCode}</div> }) );  
    setOptionList(list);
  }, []);


  const url = `/historical_rates/${stateObj.date}?base=${stateObj.base}`;

  async function apiCall() { 
    let res = await axios.get(url);
    let { data } = res;
    console.log(data);
    setResponseObj(data);
  };

  useEffect(() => {
    let { updataData } = props;
    updataData(responseObj);
  }, [responseObj]);


  const handleClick = async () => {
    if(stateObj.base!=null && stateObj.date!=null) {
          apiCall();
    } else if(stateObj.base==null || stateObj.date==null) {
       window.alert("invalid input");
    };
  }

  
  return (
    <div className={classes.wrapper}>
       
        <Grid container space={2} direction="row" justifyContent="center" sx={{minHeight:600}}>
          <Typography className={classes.typography} gutterBottom variant="h2" component="p">
            Historical exchange rates
          </Typography>
          <Grid item xs={12} sx={{margin: 5}}>
             <Card sx={{minHeight:200, display: 'flex', alignItems: 'center'}}>
                <Grid container space={2}>
                  <Grid item xs={12} sm={12} md={6}>
                    <label className={classes.label}>
                      <Typography className={classes.labelText} gutterBottom variant="h6" component="p">
                        Base Currency {stateObj.base!=null? stateObj.base:''}
                      </Typography>
                    </label>
                    <DropDown 
                      className={classes.dropDown}
                      id="historical_rate_base_currency"
                      options={optionsList}
                      updateValueObj={updateValueObj}
                    />
                    
                  </Grid> 
                  <Grid item xs={12} sm={12} md={5}>
                    <label className={classes.label}>
                      <Typography className={classes.labelText} gutterBottom variant="h6" component="p">
                        Date
                      </Typography>
                    </label>
                    <DateInputBox 
                      className={classes.dateInput}
                      id="historical_rate_date_picker"
                      format="YYYY-MM-DD"
                      maxLength={10}
                      updateValueObj={updateValueObj}
                    />
                    <Box style={{display: 'flex', 'justify-content': 'center', marginBottom: 25}}>
                      <Button variant="contained" className={classes.button} onClick={handleClick}>GET</Button>
                    </Box>
                  </Grid>
                </Grid>
             </Card>
          </Grid>
        </Grid>
       <WaveBorder 
          upperColor= 'rgba(36, 62, 99, 1)'
          waveColor1= 'rgba(213, 242, 48, .9)'npm start
          waveColor2= 'rgba(98, 230, 245, .8)'
          waveColor3= 'rgba(255, 145, 237, .9)'
          waveColor4= '#FFFFFF'
          className={classes.waveBorder}
       />
     
    </div>
  );
}

HeadSection.propTypes = {
    classes: PropTypes.object
}; 

export default withStyles(styles, { withTheme: true })(HeadSection);