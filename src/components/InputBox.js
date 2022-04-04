import React, {useState, useEffect} from 'react';
import { TextField, Tooltip } from "@mui/material";
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
    }
}));

const InputBox = props => {
    const { className, id, label, type, maxLength, editMode, ...rest } = props;
    const [ stateObj, setStateObj ] = useState({inputValue: '', errorFlag: false});
    const classes = useStyles();
    
    
    const handleChange = e => {
      setStateObj({...stateObj, inputValue: e.target.value});
    };

    const handleBlur = e => {
      let { updateValueObj } = props;
      //error checking here
      (id=="conrrency_converter_amount") && updateValueObj('conrrency_converter_amount',stateObj.inputValue);
    };
    
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
        </div>
    );
};

export default InputBox;