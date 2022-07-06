import React, { useEffect } from 'react'
import { Typography, Grid, Card, CardHeader, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
    wrapper: {
      width: '100%',
      minHeight: 700,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      color: '#FFFFFF',
      marginTop: 100,
      marginBottom: 20
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
        alignItems: 'start',
        color: '#FFFFFF'
    }

}));


const Experience = () => {
    const classes = useStyles();

    return (
      <div className={classes.wrapper} id="experience">
        <motion.div className={classes.title}>
          <Typography className={classes.text}  gutterBottom variant="h3" component="h3">
            Work Experience
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
                    Programmer
                 </Typography>
                </div>
            }
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h6" component="h6">
                ManPower service limited               
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
                2021 - 2022
            </Typography>
            <ul>
             <li>
              <Typography gutterBottom variant="body" component="p">
                Help development for a Clinical Management System application for Hospital use in the IT
                development team.
              </Typography>
             </li>
             <li>
              <Typography gutterBottom variant="body" component="p">
               Help deployment for web application,
               frontend(react & redux) and backend (java spring boot).
              </Typography>
             </li>
             <li>
              <Typography gutterBottom variant="body" component="p">
                Creating and maintaining code repositories that can be easily reused or referenced.
              </Typography>
             </li>
             <li>
              <Typography gutterBottom variant="body" component="p">
                Work with key partners to deliver punctual, tested and reusable code in a rapidly changing environment.
              </Typography>
             </li>
            </ul>
          </CardContent>
         </Card>
         </Grid>
        </Grid>
      </div>
    );
};

export default Experience;