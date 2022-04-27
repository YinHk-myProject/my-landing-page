import React, { useEffect } from 'react'
import { Typography, Grid, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
import image from "../image/me.jpg";

const useStyles = makeStyles(() => ({
    wrapper: {
      width: '100%',
      minHeight: 500,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 50
    },
    text: {
       fontFamily: "'Permanent Marker', cursive"
    },
    messageContainer: {
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center'
    }

}));

const About = () => {
    const classes = useStyles();

    return (
      <div className={classes.wrapper} id='about'>
        <motion.div className={classes.title}>
          <Typography className={classes.text}  gutterBottom variant="h3" component="h3">
             About me
          </Typography>
        </motion.div>
        <Grid container space={2} direction="column">
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center'}}>
           <motion.div className={classes.messageContainer}>
            <Typography className={classes.message}  gutterBottom variant="body" component="p">
               I am a developer and love building software application including web apps, 
               mobile apps and unity games. Becaise design and building digital products are
               interesting for me.
            </Typography>
            <Typography className={classes.message}  gutterBottom variant="body" component="p">
               I have completed my bachelor degree from the City University of Hong Kong with major 
               in computing mathematics. I learned programming from the university, and started my 
               strong interest in programming and writing code.
               major 
            </Typography>
            <Typography className={classes.message}  gutterBottom variant="body" component="p">
               My previous job is a programmer, mainly for web development. I learned frontend and 
               also backend technology. Fuled by boundless enthusiasm, I'm easily inspired and learn
               to create new application, my brain is full of inspiration. I pursure a career in software engineer. 
            </Typography>
           </motion.div>
           <Grid item xs={12} sm={12} md={6}>
             <Avatar alt="ken" src={image} variant="square" sx={{ width: 200, height: 200, borderRadius: 8 }}/>
           </Grid>
          </Grid>
        </Grid>
      </div>
    );
};


export default About;