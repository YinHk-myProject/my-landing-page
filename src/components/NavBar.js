import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, Button, Hidden, IconButton } from "@mui/material";
import withStyles from '@mui/styles/withStyles';

const styles = theme => ({
    wrapper: {
      width: '100%',
      //backgroundColor: 'rgba(23, 28, 36, 1)'
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      //backgroundColor: 'rgba(36, 62, 99, 1)'
    },
    menuButtonText: {
      color: 'rgba(36, 62, 99, 1)',
      fontWeight: 'bold',
      textTransform: 'none'
    },
    brandText: {
      fontFamily: theme.title.titleFontFamily,
      //fontWeight: "fontWeightBold" //float: 'right'
    }
});


const TypographyList = classes => 
  <div>
    <Typography
      className={classes.brandText}
      variant="h4"
      display="inline"
      color='rgba(36, 62, 99, 1)'
      fontWeight="fontWeightBold"
    >
      Cu 
    </Typography>
    <Typography
      variant="h4"
      className={classes.brandText}
      fontWeight="fontWeightBold"
      display="inline"
      color="rgba(1, 130, 68, 1)"
    >
      rr
    </Typography>
    <Typography
      variant="h4"
      className={classes.brandText}
      fontWeight="fontWeightBold"
      display="inline"
      color="rgba(171, 0, 137, 1)"
    >
      en
    </Typography>
    <Typography
      variant="h4"
      className={classes.brandText}
      fontWeight="fontWeightBold"
      display="inline"
      color="rgba(235, 94, 0, 1)"
    >
      cy
    </Typography>
    <Typography
      variant="h4"
      className={classes.brandText}
      style={{marginLeft: 10}}
      fontWeight="fontWeightBold"
      display="inline"
      color="orange"
    >
      Rate
    </Typography>
  </div>;


const NavBar = props => {
    const { classes } = props;

    return (
      <div className={classes.wrapper}>
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
              {TypographyList(classes)}
              <div>
                <Button
                  className={classes.menuButtonText}
                  size="large"
                >
                  Menu
                </Button>
                <Button
                  className={classes.menuButtonText}
                  size="large"
                >
                  Github
                </Button>
                <Button
                  className={classes.menuButtonText}
                  size="large"
                >
                  About
                </Button>
              </div>
            </Toolbar>
        </AppBar>
      </div>  
    );
};


NavBar.propTypes = {
    classes: PropTypes.object.isRequired  
};
  
export default withStyles(styles)(NavBar);