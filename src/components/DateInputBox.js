import React, {useState, useEffect} from 'react';
import moment from 'moment';
import { makeStyles } from "@mui/styles"; 
import {  DatePicker } from '@material-ui/pickers';


const DateInputBox = props => {
    const { className, id, format, maxLength, ...rest } = props;
    const [ stateObj, setStateObj ] = useState({
        inputValue: null, 
        inputFormat: format, 
        val: null,
    });

    //get today in format: YYYY-MM-DD
    const getToday = moment => {
        const day = String(moment.getDate()).padStart(2, '0');
        const month = String(moment.getMonth() + 1).padStart(2, '0');
        const year = moment.getFullYear();
        return [year, month, day].join('-');
    };

    //get selected date in format: YYYY-MM-DD
    const getFormatDate = date => {
        const dd = String(date.toDate().getDate()).padStart(2, '0');
        const mm = String(date.toDate().getMonth() + 1).padStart(2, '0');
        const yyyy = date.toDate().getFullYear();
        return [yyyy, mm, dd].join('-');
    };
    
    const handleChange = date => { 
        let { updateValueObj } = props;
        if(date!=null) {
            setStateObj({ ...stateObj, inputValue: date&&date.toDate(), val: date&&getFormatDate(date) });
            (id=="historical_rate_date_picker") && updateValueObj('historical_rate_date_picker',date&&getFormatDate(date));
        }else {
            setStateObj({ ...stateObj, inputValue: null, val: null });
            (id=="historical_rate_date_picker") && updateValueObj('historical_rate_date_picker',null); 
        };
    };

    const handleFocus = () => setStateObj({ ...stateObj, inputFormat: 'YYYY-MM-DD' });

    return (
        <div className={className} {...rest}>
           <DatePicker
                id={id}
                value={stateObj.inputValue}
                allowKeyboardControl
                style={{ whiteSpace: 'pre' }}
                clearable
                onChange={handleChange}
                onFocus={handleFocus}
                inputVariant="outlined"
                autoOk
                maxLength={maxLength}
                format={stateObj.inputFormat==null? null:stateObj.inputFormat}
                error={stateObj.errorFlag}
                invalidDateMessage={null}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                    tabIndex: -1
                }}
                minDate={new Date('2000-01-01')}
                maxDate={getToday(moment()._d)}
                maxDateMessage='Date should not be after maximal date'
                minDateMessage='Date should not be before minimal date'
               
            /> 
        </div>
    );
}

export default DateInputBox;