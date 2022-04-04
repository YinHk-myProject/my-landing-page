import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import { useTheme } from "@mui/styles";

const DropDown = props => {
    const { className, id, options, ...rest } = props;
    const [stateObj, setStateObj] = useState({ selectedOption: '', selectedList: null });
    const theme = useTheme();

    const selectStyles = {
        control: (css, state) => ({
          ...css,
          width: '60%',
          //height: 20,
          //background: color.cimsBackgroundColor,
          '&:hover': {
            borderColor: state.isFocused ? '#1565c0':'#424242'
          },
          borderColor: state.isFocused ? '#1565c0': '#bdbdbd',
          display: 'flex',
          flexDirection: 'row',
        }),
        container: provided => ({
            ...provided,
            display: 'flex',
            'justify-content': 'center'
          
        }),
        input: base => ({
          ...base,
          //color: color.cimsTextColor,
          '& input': {
              font: 'inherit'
          },
          //display: 'flex',
          //padding: '0 0 8px 8px',
          //height: '100%',
          //fontSize: font.fontSize
        }),
        placeholder: provided => ({
          ...provided,
          fontSize: 10,
          width: '100%',
          float: 'left'
          //height: '100%'
          //fontFamily: font.fontFamily,
          //color: color.cimsPlaceholderColor,
          //backgroundColor: color.cimsBackgroundColor
        }),
        singleValue: provided => ({
          ...provided,
          paddingLeft: 8,
          //fontSize: font.fontSize,
          //fontFamily: font.fontFamily,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: 'calc(100% - 14px)'
        }),
        valueContainer: provided => ({
          ...provided,
          display: 'flex',
          flexWrap: 'wrap',
          flex: 1,
          alignItems: 'center',
          overflow: 'hidden',
          color:'black',
          height: '100%',
          //borderStyle: 'solid',
          //backgroundColor: color.cimsBackgroundColor
        }),
        menu: provided => ({
          ...provided,
          margin: theme.spacing(0.5, -0.5),
          height: 'auto',
          width: '100%'
        }),
        menuList: provided => ({
          ...provided,
          width: '100%',
          borderRadius: 25,
          //fontSize: font.fontSize,
          //fontFamily: font.fontFamily,
          //color: color.cimsTextColor,
          //backgroundColor: color.cimsBackgroundColor
        }),
        paper: provided => ({
          ...provided,
          //backgroundColor: 'rgba(59, 59, 59, .5)'
        }),
        option: (provided, state) => {
          return {
            ...provided,
            backgroundColor: state.isSelected ? '#ffccaa' : null,
            //color: color.cimsTextColor,
            '&:hover': {
              backgroundColor: state.isSelected ? '#28518f':'#e0e0e0'
            }
          };
        }
      };


    return (
      <div className={className} {...rest}>
        <Select 
            id={id}
            options={options}
            value={stateObj.selectedList}
            isClearable
            placeholder=""
            menuPosition="fixed"
            styles={selectStyles}  
            menuPlacement="auto"
            menuPortalTarget={document.querySelector('body')}
        />
      </div>
    );
};

export default DropDown;
