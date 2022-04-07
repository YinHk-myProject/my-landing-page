import React, {useState, useEffect} from 'react';
import { Grid, Typography, Card } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    wrapper: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardWrapper: {
        width: '80%',
        minHeight: 600,
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start'
    },
    textWrapper: {
      marginTop: 10,
      marginBottom: 20,
      width: '70%',
      display: 'flex',
      flexDirection: 'row',
    }
}));

const ContentSection = props => {
    const { data } = props;
    const classes = useStyles();

    return (
      <div className={classes.wrapper}>
        {data? ( data.status="success"?
          <Card className={classes.cardWrapper}>
            <div className={classes.textWrapper}>
              <Typography gutterBottom variant="h3" component="p" sx={{marginRight: 3, color: '#1f1d6b'}}>{Math.round(data.amount * 100) / 100}</Typography>
              <Typography gutterBottom variant="h3" component="p" sx={{color: '#00192e'}}> {data.base_currency_name} =</Typography>
            </div>

            <div className={classes.textWrapper} style={{marginLeft: 50}}>
              <Typography gutterBottom variant="h4" component="p" sx={{marginRight: 3, color: '#990c6c'}}>{data.rates.rateInfo[0].rate_for_amount}</Typography>
              <Typography gutterBottom variant="h4" component="p">{data.rates.rateInfo[0].currency_name}</Typography>
            </div>

            <div className={classes.textWrapper} style={{marginLeft: 50}}>
              <Typography gutterBottom variant="body" component="p" sx={{marginRight: 1}}>1 {data.base_currency_name} =</Typography>
              <Typography gutterBottom variant="body" component="p" sx={{marginRight: 1}}>{data.rates.rateInfo[0].rate}</Typography>
              <Typography gutterBottom variant="body" component="p">{data.rates.rateInfo[0].currency_name}</Typography>
            </div>

            <div className={classes.textWrapper} style={{marginLeft: 50}}>
              <Typography gutterBottom variant="body" component="p" sx={{marginRight: 1}}>Updated date:</Typography>
              <Typography gutterBottom variant="body">{data.updated_date}</Typography>
            </div>

          </Card>:data.status)
          : <Card className={classes.cardWrapper}></Card>}
      </div>
    );
};

export default ContentSection;