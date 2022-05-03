import React, { useEffect } from 'react'
import { Typography, Grid, Card, CardHeader, CardContent, CardMedia, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
import gif from "../image/currencyConverter.gif";

const useStyles = makeStyles(() => ({
    wrapper: {
      width: '100%',
      minHeight: 800,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: '#1a2740'
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      color: '#FFFFFF',
      marginTop: 100,
      marginBottom: 50
    },
    text: {
      fontFamily: "'Permanent Marker', cursive"
    },
    cardWrapper: {
      backgroundColor: 'rgb(38, 45, 48)',
      marginTop: 10,
      marginBottom: 50,
      'justify-self': 'center',
      minWidth: '50%',
      borderRadius: 10
    },
    cardTitle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      alignItems: 'start',
      color: '#FFFFFF'
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
      color: '#FFFFFF'
    }

}));


const Projects = () => {
    const classes = useStyles();

    return (
      <div className={classes.wrapper} id="projects">
        <motion.div className={classes.title}>
          <Typography className={classes.text}  gutterBottom variant="h3" component="h3">
            Projects
          </Typography>
        </motion.div>
        <Grid container space={2} sx={{ maxWidth: '60%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}>
         <Grid item xs={12}>
         <Card variant="outlined" className={classes.cardWrapper}>
          <CardHeader 
            title={
                <div className={classes.cardTitle}>
                 <Typography gutterBottom variant="h5" component="h5" sx={{marginTop: 2, marginLeft: 5}}>
                   Currency rate and converter app
                 </Typography>
                </div>
            }
          />
          <CardMedia
            component="img"
            height="auto"
            width="auto"
            image={gif}
            alt="currency app"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="body" component="p">
              An application of checking latest currency rate and 
              currency converter. Frontend use react and backend use Java Spring boot.
            </Typography>
            <IconButton
                aria-label="Github"
                className={classes.socialIcon}
                href="https://github.com/YinHk-myProject/currency-app"
                size="large"
            >
                {
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
                }
            </IconButton>
          </CardContent>
         </Card>
         </Grid>
        </Grid>
      </div>
    );
};

export default Projects;