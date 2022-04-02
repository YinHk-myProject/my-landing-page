import * as React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import { Card, 
    CardHeader, 
    CardContent,
    CardMedia, 
    CardActions,
    Grid, 
    Typography,
    Button,
    Box } from "@mui/material";

const styles = theme => ({
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        paddingTop: 200,
        paddingBottom: 200
    },
    title: {
        paddingBottom: 100,
        fontSize: theme.title.titleFontSize,
        fontWeight: theme.title.titleFontWeight, 
        fontFamily: theme.title.titleFontFamily,
        color: theme.title.titleColor
    },
    buttonText: {
        color: 'rgba(36, 62, 99, 1)',
        fontWeight: 'bold',
        textTransform: 'none'
    },
    typography: {
        fontWeight: 'bold',
        fontSize: 15
    },
    cardContainer: {
        display: 'flex',
        '@media (max-width:  960px)': {
            flexDirection: 'column',
            width: '100%',
            alignItems:'center'
        },
        '@media (min-width:  961px)': {
            flexDirection: 'row',
        } 
    },
    cardWrapper: {
        display: 'flex',
        flexDirection: 'column',
        '@media (max-width:  960px)': {
            marginTop: 50, 
            width: '70%',
            height: 300
        },
        '@media (min-width:  961px)': {
            marginLeft: 15, 
            marginRight: 15, 
            width: 250,
            height: 280
        } 
    },
});

const toolList = [
    {
        title: 'Currency converter',
        image: 'coin2.jpg'
    },
    {
        title: 'Past currency converter',
        image: 'coins2.jpg'
    },
    {
        title: 'Rates',
        image: 'money.jpg'
    },
    {
        title: 'Historical rates',
        image: 'rate.jpg'
    }
];


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

        <div className={classes.cardContainer}>
       
        {toolList.map(item => 

          <Card className={classes.cardWrapper} 
                sx={{ 
                    //marginLeft: 2, 
                    //marginRight: 2, 
                    //width: 250,

                }}>
            <CardMedia component="img" image={require(`../images/${item.image}`)} alt="jpg" height="140"/>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.typography} gutterBottom variant="body"  component="p">
                    {item.title}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'start', alignItems:'start' }}>
                <Button size="small" className={classes.buttonText} size="large">Click here</Button>
            </CardActions>
          </Card>
        )}
        </div>

      </div>
    );
};

ToolSection.propTypes = {
    classes: PropTypes.object.isRequired  
};

export default withStyles(styles)(ToolSection);