import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Card, Button, IconButton, TextField, Box } from "@mui/material";
import { BsArrowLeftRight } from 'react-icons/bs';
import { withStyles } from "@mui/styles";
import axios from "axios";

import Data from '../Data';
import WaveBorder from "../components/WaveBorder";
import DropDown from '../components/DropDown';
import InputBox from '../components/InputBox';
import DateInputBox from '../components/DateInputBox';

const styles = theme => ({
    waveBorder: {
      paddingTop: theme.spacing(9)
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
      flexDirection: 'column',
      'justify-content': 'center',
      alignItems: 'center',
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
  const { classes, theme } = props;
  const [stateObj, setStateObj] = useState({from: null, to: null, amount: null, date: null});
  const [optionsList, setOptionList] = useState([]);
  const [responseObj, setResponseObj] = useState(null); 
  
  useEffect(() => {
    let list = [];
    Data.map(item => list.push({ 
      value: item.currencyCode, 
      label: <div style={{display: 'flex', 'justify-content': 'space-around'}}><img src={item.flagURL} alt="flag.png" style={{marginRight: 50}}/>{item.currencyCode}</div> }) );  
    setOptionList(list);
  }, []);

  const updateValueObj = (type, val) => {
    if(type=="historical_conrrency_converter_base") 
      setStateObj({...stateObj, from: val});
    else if(type=="historical_conrrency_converter_target")
      setStateObj({...stateObj, to: val});
    else if(type=="historical_conrrency_converter_amount") 
      setStateObj({...stateObj, amount: val});
    else if(type=="historical_rate_date_picker")
      setStateObj({...stateObj, date: val});
  };

  const url = `/past_converter/${stateObj.date}?from=${stateObj.from}&to=${stateObj.to}&amount=${stateObj.amount}`;
  
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

    if(stateObj.from!=null && stateObj.to!=null && stateObj.amount!='' && stateObj.amount!=null && stateObj.date!=null ) {
      if(stateObj.from!=stateObj.to) {
        apiCall();
      } else window.alert("Please choose different currency");
    } else if(stateObj.from==null || stateObj.to==null || stateObj.amount=='' || stateObj.date==null) {
       window.alert("invalid input");
    };
  }


  return (
    <div className={classes.wrapper}>
     <Grid container space={2} direction="row" justifyContent="center" sx={{minHeight:600}}>
        <Typography className={classes.typography} gutterBottom variant="h2" component="p">
          Historical currency converter
        </Typography>
        <Grid item xs={12} sx={{margin: 5}}>
           <Card sx={{minHeight:200, display: 'flex', alignItems: 'center'}}>
              <Grid container space={2}>
                <Grid item xs={12} sm={12} md={5}>
                  <label className={classes.label}>
                    <Typography className={classes.labelText} gutterBottom variant="h6" component="p">
                      From {stateObj.from!=null? stateObj.from:''}
                    </Typography>
                  </label>
                  <DropDown 
                    className={classes.dropDown}
                    id="historical_conrrency_converter_base"
                    options={optionsList}
                    updateValueObj={updateValueObj}
                  />
                  <InputBox 
                    className={classes.inputbox}  
                    id="historical_conrrency_converter_amount" 
                    type="number" 
                    label="Amount" 
                    editMode={true} 
                    maxLength={10} 
                    updateValueObj={updateValueObj}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={2} sx={{display: 'flex', 'justify-content': 'center', alignItems: 'center'}}>
                    <BsArrowLeftRight size='50' color='#183C48' stroke-width='1'/>
                </Grid> 
                <Grid item xs={12} sm={12} md={5}>
                  <label className={classes.label}>
                    <Typography className={classes.labelText} gutterBottom variant="h6" component="p">
                      To {stateObj.to!=null? stateObj.to:''}
                    </Typography>
                  </label>
                  <DropDown 
                    className={classes.dropDown}
                    id="historical_conrrency_converter_target"
                    options={optionsList}
                    updateValueObj={updateValueObj}
                  />
                  <DateInputBox 
                      className={classes.dateInput}
                      id="historical_rate_date_picker"
                      format="YYYY-MM-DD"
                      maxLength={10}
                      updateValueObj={updateValueObj}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                  <Box style={{display: 'flex', 'justify-content': 'center', marginBottom: 25, width: '100%'}}>
                    <Button 
                      variant="contained" 
                      className={classes.button}
                      onClick={handleClick}
                    >
                      Convert
                    </Button>
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
    </div>
  );
}


HeadSection.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object
}; 

export default withStyles(styles, { withTheme: true })(HeadSection);