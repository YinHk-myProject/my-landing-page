import React, { useState, useEffect } from 'react';
import { withStyles, TextField, Tooltip } from "@mui/material";
import PropTypes from "prop-types";


const styles = () => ({
    wrapper: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    label: {
        color: 'rgba(36, 62, 99, 1)',
        padding: '0 8px'
    },
    inputField: {
        width: '100%'
    }

});


const TextInputBox = props => {
    const { classes, id=1, type='number', label='hi', editMode='true', maxLength=10 } = props; 
    const [ stateObj, setStateObj ] = useState({inputValue: '', errorFlag: false});  
    

    const handleChange = () => {};

    const handleBlur = () => {};

    return (
        <div className={classes.wrapper}>
            <Tooltip title={stateObj.inputValue}
                disableHoverListener={stateObj.inputValue? false:true}
                disableFocusListener={stateObj.inputValue? false:true} arrow
            >
            <TextField
                id={id}
                className={classes.inputField}
                autoCapitalize="off"
                variant="outlined"
                type={type}
                value={stateObj.inputValue}
                onChange={handleChange}
                onBlur={handleBlur}
                disable={!editMode}
                error={stateObj.errorFlag}
                inputProps={{ maxLength: maxLength }}
            />
            {label !=='' && <label className={classes.label}>{label}</label>}
            </Tooltip>
        </div>
    );
};

TextInputBox.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(TextInputBox);