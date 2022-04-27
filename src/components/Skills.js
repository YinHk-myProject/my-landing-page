import React, { useEffect } from 'react'
import { Typography, Grid, Avatar, Card } from "@mui/material";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
    wrapper: {
      width: '100%',
      minHeight: 500,
      //background: 'rgba(0,10,35,1)'
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 50
    },
    text: {
       fontFamily: "'Permanent Marker', cursive"
    },

}));


const skillList = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Redux",
  "TypeScript",
  "Java spring boot",
  "Node.js",
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
        <Grid container space={2} direction="row">
          {skillList.map(item => <Card>{item}</Card>)}
        </Grid>
      </div>
    );
};

export default Skills;