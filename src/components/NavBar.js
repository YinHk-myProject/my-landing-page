import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Hidden, IconButton } from "@mui/material";
import withStyles from '@mui/styles/withStyles';


const styles = theme => ({
    wrapper: {
        width: '100%',
        height: 80,
        background: 'rgba(60, 35, 173, 1)'
    },
    appBar: {
        boxShadow: theme.shadows[6],
        backgroundColor: theme.palette.common.white
      },
      toolbar: {
        display: "flex",
        justifyContent: "space-between"
      },
      menuButtonText: {
        fontSize: 80,
        fontWeight: 300
      },
      brandText: {
        fontFamily: "'Baloo Bhaijaan', cursive",
        fontWeight: 300
      },
      noDecoration: {
        textDecoration: "none !important"
      }
})


const NavBar = props => {
    const { classes } = props;

    return (
      <div className={classes.wrapper}>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <div>
                    <Typography
                        variant="h4"
                        className={classes.brandText}
                        display="inline"
                        color="secondary"
                    >
                        Curr 
                    </Typography>
                    <Typography
                        variant="h4"
                        className={classes.brandText}
                        display="inline"
                        color="green"
                    >
                        ency
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
      </div>  
    );
}


NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    
};
  
export default withStyles(styles, { withTheme: true })(memo(NavBar));