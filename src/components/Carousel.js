import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectCube, Pagination } from 'swiper';
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import { Card, 
         CardContent,  
         Typography, 
         Avatar,
         List, 
         ListItem,
         ListItemText,
         ListItemAvatar } from "@mui/material";

// import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
//import { EffectCube, Pagination } from "swiper";


const styles = () => ({
  wrapper: {
    //borderStyle: 'solid',
    maxWidth: 1000,
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  cardWrapper: {
    width: '100%',
    backgroundColor: '#fcfcfc',
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  cardContent: {
    width: '100%',
    minHeight: 200
  },

});


const Carousel = props => {
  const { classes, slide } =props;

  SwiperCore.use([Autoplay]);
  return (
    <div className={classes.wrapper}>
      <Swiper 
        loop={true}
        autoplay={{
              delay: 3000,
              disableOnInteraction: false
        }}
        spaceBetween={40}
        slidesPerView={3}
        effect={"cube"}
        //grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        className="mySwiper"
      >
        {slide.map(item => 
          <SwiperSlide>
            <Card className={classes.cardWrapper} sx={{ width: '100%' }}>
              <CardContent className={classes.cardContent}>
                {item.map(element => 
                    <List sx={{ width: '100%', bgcolor: '#fcfcfc' }}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <img src={element.flagURL} alt='flag'/>
                        </ListItemAvatar>
                        <ListItemText 
                            primary={element.currencyCode} 
                            secondary={
                              <Typography
                                  component="p"
                                  variant="body2"
                                  color="text.primary"
                              >
                                {element.currencyName}
                              </Typography>} />
                      </ListItem>  
                    </List>)}     
              </CardContent>
            </Card>
          </SwiperSlide>)}
      </Swiper>
    </div>
  )
};

Carousel.propTypes = {
  classes: PropTypes.object.isRequired  
};

export default withStyles(styles)(Carousel);