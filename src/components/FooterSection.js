import * as React from 'react';
import PropTypes from "prop-types";
import { Box, Typography, Grid, TextField, Button, IconButton } from "@mui/material";
import { withStyles } from "@mui/styles";
import WaveBorder from './WaveBorder';

const styles = theme => ({
    wrapper: {
        width: '100%',
        minHeight: 450,
        marginTop: 50,
    },
    container: {
        background: 'linear-gradient(180deg, rgba(13, 25, 33, 1) 0%, rgba(5, 8, 19, 1) 100%)',
        minHeight: 350,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center'
    },
    waveBorder: {
        paddingTop: theme.spacing(9)
    },
    typography: {
        color: "#FFFFFF"
    }   
});

const socialIcons = [
    {
      icon: (
        <svg
          role="img"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill='#FFFFFF'
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>GitHub</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      label: "Github",
      href: "https://github.com/YinHk",
    },
    {
      icon: (
        <svg
          role="img"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill='#FFFFFF'
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Facebook</title>
          <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
        </svg>
      ),
      label: "Facebook",
      href: "https://facebook.com",
    },
    {
      icon: (
        <svg
          role="img"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill='#FFFFFF'
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>LinkedIn</title>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/wing-yin-ng-b6976b229/",
    }
];

const FooterSection = props => {
    const { classes, theme } = props;
   
    return (
      <footer className={classes.wrapper} id="footer">
        <WaveBorder 
            upperColor= 'rgba(18,38,45,255)'
            waveColor1= 'rgba(189, 4, 68, .7)'
            waveColor2= 'rgba(237, 202, 24, .7)'
            waveColor3= 'rgba(38, 166, 201, .7)'
            waveColor4= 'rgba(13, 25, 33, 1)'
            className={classes.waveBorder}
        />
        <div className={classes.container}>
            <Grid container direction="row" justifyContent="center" spacing={6} >
                <Grid item xs={8} sm={8} md={4} lg={4} style={{marginTop: 20}}>
                 <form>
                    <Box display="flex" flexDirection="column">
                        <Box mb={1}>
                            <TextField
                                variant="outlined"
                                multiline
                                placeholder="Get in touch with me"
                                InputProps={{
                                    "aria-label": "Get in Touch",
                                }}
                                style={{ background: '#FFFFFF', borderRadius: 8 }}
                                rows={4}
                                fullWidth
                                required
                            />
                        </Box>
                        <Button
                            variant="outlined"
                            type="submit"
                            style={{ borderRadius: 8, marginTop: 20 }}
                        >
                            Send Message
                        </Button>
                    </Box>
                 </form>
                </Grid>
                    
                <Grid item xs={8} sm={8} md={4} lg={4}>
                    <Typography variant="h6" paragraph className={classes.typography}>
                        Contact Me
                    </Typography>
                    <Box display="flex">
                        {socialIcons.map((socialIcon, index) => (
                            <Box key={index} mr={index !== socialIcons.length - 1 ? 1 : 0}>
                                <IconButton
                                    aria-label={socialIcon.label}
                                    className={classes.socialIcon}
                                    href={socialIcon.href}
                                    size="large"
                                >
                                    {socialIcon.icon}
                                </IconButton>
                            </Box>
                        ))}
                    </Box>
                    <Typography className={classes.typography} paragraph>
                        This web application developed by YinHk.
                    </Typography> 
                    <Typography className={classes.typography} paragraph>
                        	
                        &copy; Copyright {new Date().getFullYear()} YinHk. All Rights Reserved. 
                    </Typography>   
                </Grid>
            </Grid>
        </div>
      </footer>
    );
};

FooterSection.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object .isRequired
};

export default withStyles(styles, { withTheme: true })(FooterSection);