import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles"; 
import image from '../image/loadingBackgroundImage.jpg';

const useStyles = makeStyles(() => ({
    loaderContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        //backgroundSize: '100% 100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        'background-repeat': 'no-repeat'
    },
    loaderWrap: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    loaderBar: {
        position: 'absolute',
        height: 10,
        width: '100%',
        backgroundColor: 'rgba(0, 97, 227, .8)',
        top: '55%'
    },
    counter: {
        position: 'absolute',
        top: '56%'
    },
    h2: {
        fontSize: 20,
        fontWeight: 200,
        color: '#FFFFFF'
    },
    p: {
        fontSize: 25,
        fontWeight: 500,
        color: '#FFFFFF'
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 50
    }

}));



const LoaderVariant = {
  initial: { left: "-100vw" },
  animate: {
    left: "0",
    transition: { duration: 3, type: "tween", ease: "linear" },
  },
};

const Loader = () => {
  const [count, setCount] = useState(0);
  const [increase, setIncrease] = useState(true);
  const [stop, setStop] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    let counter = setInterval(() => {
      (stop===false) && setCount(count + 1);
      if (count === 100) {
        setCount(0);
        setIncrease(false);
        setStop(true);
      }
    }, 30);
    return () => clearInterval(counter);
  });


  return (
      <div className={classes.loaderContainer} style={{backgroundImage: `url(${image})`}}>
        <div className={classes.loaderWrap}>
          <p className={classes.p}>{stop===true? 'Completed!':'Loading my website...'}</p>
          <div className={classes.textContainer}>
            <h2 className={classes.h2}>{increase? count:(stop===true? 100:0)}%</h2>
          </div>
          <motion.div
            className={classes.loaderBar}
            variants={LoaderVariant}
            initial="initial"
            animate="animate"
          ></motion.div>
        </div>
      </div>
  );
};

export default Loader;
