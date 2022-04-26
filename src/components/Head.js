import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectCube, Pagination } from 'swiper';
import { Card, 
         CardContent,  
         Typography, 
         Grid,
         Button,
         Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles"; 
import image from '../image/bgImage.jpg';

const useStyles = makeStyles(() => ({
    wrapper: {
        width: '100%',
        minHeight: 650,
        display: 'flex', 
        flexDirection: 'column',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        'background-repeat': 'no-repeat',
        paddingTop: 50,
        justifyContent: 'center',
        //alignItems: 'center'
    },
    text: {
        color: 'rgb(255,255,255)'
    },
    textContainer1: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 100
    },
    button: {
        width: 150
    }
}));

const Head = () => {
    const classes = useStyles();

    const scrollToFooter = () => {
        const anchor =  document.getElementById('footer');
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
      <div className={classes.wrapper}>
       <Grid container space={2} direction="column" >
       <Grid item xs={12} sm={12} md={6} sx={{display: 'flex', justifyContent: "center"}}>
        <motion.div>
            <Typography className={classes.text} gutterBottom variant="h2" component="h2"  fontWeight="bold">
                My name is Ken
            </Typography>
        </motion.div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{display: 'flex', justifyContent: "center"}}>
        <motion.div>
            <Typography className={classes.text}  gutterBottom variant="h4" component="h4" fontWeight="bold">
                welcome to my page
            </Typography>
        </motion.div>
        </Grid>

        <Grid item sx={{display: 'flex', justifyContent: "center"}}>
            <Button 
                className={classes.button}
                variant="contained"   
                onClick={() => scrollToFooter()}
            >
                Contact Me
            </Button> 
        </Grid>
      </Grid>
      </div>
    );
};

export default Head;