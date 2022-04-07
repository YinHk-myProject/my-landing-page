import React, { useState } from 'react';
import { TextField, Tooltip, FormHelperText } from "@mui/material";
import { makeStyles } from "@mui/styles"; 

const useStyles = makeStyles(() => ({
    textField: {
      width: "60%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500
    },
    input: {
      color: "white"
    },
    helperTextError: {
      marginTop: 0,
      fontSize: '12px !important',
      padding: '0 !important'
 
    },
}));

const InputBox = props => {
    const { className, id, label, type, maxLength, editMode, ...rest } = props;
    const [ stateObj, setStateObj ] = useState({inputValue: '', errorFlag: false});
    const classes = useStyles();
    
    
    const handleChange = e => {
      setStateObj({ ...stateObj, inputValue: e.target.value });
    };

    const handleBlur = e => {
      let { updateValueObj } = props;
      //error checking here
      let reg = new RegExp('^[0-9]');

      if(stateObj.inputValue!='') {
        if(reg.test(stateObj.inputValue)) {
          (id=="conrrency_converter_amount") && updateValueObj('conrrency_converter_amount',stateObj.inputValue);
          setStateObj({ ...stateObj, errorFlag: false });
        }else 
          setStateObj({ ...stateObj, errorFlag: true });
      }else setStateObj({ ...stateObj, errorFlag: false });
      
    };

    const displayError = () =>
     (stateObj.errorFlag?
      <FormHelperText error className={classes.helperTextError}>Invalid Entry</FormHelperText> : null);
    
    return (
        <div className={className} {...rest}>
          <Tooltip title={stateObj.inputValue}>
            <TextField 
                id={id} 
                label={label} 
                variant="outlined" 
                autoCapitalize="off"
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                disable={!editMode}
                error={stateObj.errorFlag}
                inputProps={{ maxLength: maxLength }}
            /> 
          </Tooltip>
          {displayError()}
        </div>
    );
};

export default InputBox;