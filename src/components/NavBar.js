import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import { useNavigate } from 'react-router-dom';

const styles = theme => ({
    wrapper: {
      width: '100%',
      //backgroundColor: 'rgba(0, 0, 0, 1)'
    },
    appBar: {
      //backgroundColor: 'transparent', 
      boxShadow: 'none'
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      //backgroundColor: 'rgba(0, 0, 0, 0.5)'
      backgroundColor: 'transparent'
    },
    menuButtonText: {
      color: 'rgba(255, 255, 255, 1)',
      fontWeight: 'bold',
      textTransform: 'none'
    },
    brandText: {
      fontFamily: theme.title.titleFontFamily,
      marginLeft: 5
    }
});


const TypographyList = classes => 
  <div>
    <Typography
      className={classes.brandText}
      variant="h4"
      display="inline"
      color='rgba(255, 255, 255, 1)'
      fontWeight="fontWeightBold"
    >
      Ken
    </Typography>
  </div>;


const NavBar = props => {
    const { classes } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    const scrollToView = name => {
      const anchor =  document.getElementById(name);
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
      <div className={classes.wrapper}>
        <AppBar position="fixed" className={classes.appBar} style={{ backgroundColor: scrollPosition===0?'transparent':'rgba(0, 0, 0, .5)'}}>
            <Toolbar className={classes.toolbar}>
              {TypographyList(classes)}
              <div>
                <Button
                  id='menuButton'
                  className={classes.menuButtonText}
                  size="large"
                  onClick={()=>scrollToView('head')}
                >
                  Home
                </Button>
                <Button
                  className={classes.menuButtonText}
                  size="large"
                  onClick={()=>scrollToView('about')}
                >
                  About
                </Button>
                <Button
                  className={classes.menuButtonText}
                  size="large"
                  onClick={()=>scrollToView('skills')}
                >
                  Skills
                </Button>
                <Button
                  className={classes.menuButtonText}
                  size="large"
                  onClick={()=>scrollToView('experience')}
                >
                  Experience
                </Button>
                <Button
                  className={classes.menuButtonText}
                  size="large"
                  onClick={()=>scrollToView('projects')}
                >
                  Projects
                </Button>
                <Button
                  className={classes.menuButtonText}
                  size="large"
                  onClick={()=>scrollToView('footer')}
                >
                  Contact
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