import React, { useEffect } from 'react'
import { Typography, Grid, Card, CardHeader, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
    wrapper: {
      width: '100%',
      minHeight: 800,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1a2740'
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
      backgroundColor: '#fafafa',
      marginTop: 10,
      marginBottom: 50,
      'justify-self': 'center',
      minWidth: '50%'
    },
    cardTitle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      alignItems: 'start'
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'start'
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
        <Grid container space={2} sx={{ maxWidth: '50%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}>
         <Grid item xs={12}>
         <Card variant="outlined" className={classes.cardWrapper}>
          <CardHeader 
            title={
                <div className={classes.cardTitle}>
                 <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#1152AD" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                 <Typography gutterBottom variant="h5" component="h5" sx={{marginTop: 2, marginLeft: 5}}>
                    Junior Programmer
                 </Typography>
                </div>
            }
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h6" component="h6">
                ManPower service limited
            </Typography>
            <Typography gutterBottom variant="body" component="p">
               Help development for a Clinical Management System application for Hospital use in the IT
               development team Help deployment for web application,
               frontend(react & redux) and backend (java spring boot).
            </Typography>
          </CardContent>
         </Card>
         </Grid>
        </Grid>
      </div>
    );
};

export default Projects;