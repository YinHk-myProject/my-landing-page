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
        minHeight: 850,
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

const ContentSection = props => {
    const { result } = props;
    const classes = useStyles();

    return (
      <div className={classes.wrapper}>
        <Card className={classes.cardWrapper}>
          {result? <Typography>Hello, result here!</Typography>:<Typography gutterBottom variant="h2" component="p">No result</Typography>}
        </Card>
      </div>
    );
};

export default ContentSection;