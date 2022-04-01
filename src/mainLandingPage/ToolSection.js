import * as React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import { Card, 
    CardHeader, 
    CardContent, 
    Grid, 
    Typography,
    Tabs,
    Tab,
    Box } from "@mui/material";

const styles = theme => ({
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        paddingTop: 250,
        paddingBottom: 50
    },
    title: {
        paddingBottom: 100,
        fontSize: theme.title.titleFontSize,
        fontWeight: theme.title.titleFontWeight, 
        fontFamily: theme.title.titleFontFamily,
        color: theme.title.titleColor
    },
    tabs: {
       "& .Mui-selected": {
      color: "red",
      fontSize: "20px"
     }
    }
    
});

const ToolSection = props => {
    const { classes } = props;
    const [value, setValue] = React.useState('Currency converter');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
      <div className={classes.wrapper}>
        <Typography className={classes.title} gutterBottom >
           Tool
        </Typography>
        <Box sx={{ width: '80%' }}>
            <Box sx={{ borderBottom: 2.5, borderColor: 'divider' }}>
                <Tabs 
                    className={classes.tabs}
                    variant="fullWidth" 
                    aria-label="basic tabs example"
                    indicatorColor="secondary"
                    onChange={handleChange}
                >
                    <Tab label="Currency converter" value="Currency converter" />
                    <Tab label="Past currency converter" value="Past currency converter" />
                    <Tab label="Rates" value="Rates" />
                    <Tab label="Historical rates" value="Historical rates"/>
                </Tabs>
            </Box>
        </Box>
      </div>
    );
};

ToolSection.propTypes = {
    classes: PropTypes.object.isRequired  
};

export default withStyles(styles)(ToolSection);