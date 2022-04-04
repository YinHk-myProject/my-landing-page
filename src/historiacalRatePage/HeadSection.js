import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import { Grid, Typography, Card, Button, Box, TextField } from "@mui/material";
import { withStyles } from "@mui/styles"; 
//import DatePicker from "react-datepicker";
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
//import "react-datepicker/dist/react-datepicker.css";

import Data from '../Data';
import WaveBorder from "../components/WaveBorder";
import DropDown from '../components/DropDown';



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
    }
});


const HeadSection = props => {
  const { classes } = props;
  const [stateObj, setStateObj] = useState({ date: null });
  //const [selectedDate, setSelectedDate] = useState(new Date()); //.toISOString().split('T')[0]
  const [optionsList, setOptionList] = useState([]); 
  

  useEffect(() => {
    let list = [];
    Data.map(item => list.push({ 
      value: item.countryAbbrev, 
      label: <div style={{display: 'flex', 'justify-content': 'space-around'}}><img src={item.flagURL} alt="flag.png" style={{marginRight: 50}}/>{item.currencyCode}</div> }) );  
    setOptionList(list);
  }, []);

  const handleDateChange = val => {
    setStateObj({ ...stateObj, date: val });
  };
  
  return (
    <div className={classes.wrapper}>
       <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                        Base Currency
                      </Typography>
                    </label>
                    <DropDown 
                      className={classes.dropDown}
                      id="conrrency_converter_base"
                      options={optionsList}
                    />
                    
                  </Grid> 
                  <Grid item xs={12} sm={12} md={5}>
                    <label className={classes.label}>
                      <Typography className={classes.labelText} gutterBottom variant="h6" component="p">
                        Date
                      </Typography>
                    </label>
                    <MobileDatePicker
                      label="Date mobile"
                      inputFormat='yyyy/mm/dd'
                      value={stateObj.date}
                      onChange={handleDateChange}
                      renderInput={ (params) => <TextField {...params} /> }
                    />
                    <Box style={{display: 'flex', 'justify-content': 'center', marginBottom: 25}}>
                      <Button variant="contained" className={classes.button}>GET</Button>
                    </Box>
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
      </LocalizationProvider>
    </div>
  );
}

HeadSection.propTypes = {
    classes: PropTypes.object
}; 

export default withStyles(styles, { withTheme: true })(HeadSection);