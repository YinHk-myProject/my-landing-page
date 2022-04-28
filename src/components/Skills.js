import React, { useEffect } from 'react'
import { Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
    wrapper: {
      width: '100%',
      minHeight: 600,
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
      'justify-self': 'center'
    }

}));


const skillList = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "React Native",
  "Redux",
  "TypeScript",
  "Java spring boot",
  "Node.js",
  "Express.js",
  "Unity",
  "git"
]


const Skills = () => {
    const classes = useStyles();

    return (
      <div className={classes.wrapper} id="skills">
        <motion.div className={classes.title}>
          <Typography className={classes.text}  gutterBottom variant="h3" component="h3">
            Skills
          </Typography>
        </motion.div>
        <Grid container space={2} sx={{ maxWidth: '50%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}>
          {skillList.map(item => <Card variant="outlined" className={classes.cardWrapper} ><CardContent>{item}</CardContent></Card>)}
        </Grid>
      </div>
    );
};

export default Skills;