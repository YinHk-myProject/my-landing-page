import React, {useState, useEffect} from 'react';
import { Grid, Typography, Card, Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    wrapper: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paperWrapper: {
        width: '80%',
        minHeight: 850,
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

const ContentSection = props => {
    const { data } = props;
    const classes = useStyles();

    const currencyRate = rate => {
      for(const key in rate) {
        return (
          <TableRow
            key={key}
          >
            <TableCell component="th" scope="row">{key}</TableCell>
            <TableCell align="right">{rate[key]}</TableCell>
          </TableRow>
        );
      }
    }

    return (
      <div className={classes.wrapper}>
        <Paper className={classes.paperWrapper}>
          {data? (data.success==true?
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 150 }} aria-label="rates table">
                <TableHead>
                  <TableRow>
                    <TableCell>Currency</TableCell>
                    <TableCell align="right">Rate</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currencyRate(data.rates.urrencyRate)}
                </TableBody>
              </Table>
            </TableContainer>:<Typography gutterBottom variant="h3" component="p" sx={{marginRight: 3}}>Oops, Something Went Wrong!</Typography>)
            :<Typography gutterBottom variant="h3" component="p" sx={{marginRight: 3}}>Oops, Something Went Wrong!</Typography>
          } 
        </Paper>
      </div>
    );
};

export default ContentSection;