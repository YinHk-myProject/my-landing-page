import React, { Fragment } from 'react';
import { Typography, Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper } from "@mui/material";
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tableCell: {
      fontSize: 18,
      
    },
    head: {
      fontSize: 30
    }
}));

const ContentSection = props => {
  const { data } = props;
  const classes = useStyles();

  const currencyRate = rate => {
    let list = [];
    for(const [key, value] of Object.entries(rate)) {
      list.push(
        <TableRow>
          <TableCell 
            component="th" 
            scope="row" 
            className={classes.tableCell}
          >{key}</TableCell>
          <TableCell className={classes.tableCell}>{value}</TableCell>
        </TableRow>
      );
    };
    return list;
  };

  return (
      <div className={classes.wrapper}>
         <Paper className={classes.paperWrapper}>
          {data? (data.success==true?
           <Fragment>
            <Typography gutterBottom variant="h5" component="p" sx={{marginButton: 10}}>Date:  {data.date}</Typography>
            <Typography gutterBottom variant="h3" component="p" sx={{marginButton: 10}}> 1 {data.base} =</Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 150 }} aria-label="rates table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.head}>Currency</TableCell>
                    <TableCell className={classes.head}>Rate</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currencyRate(data.rates.currencyRate)}
                </TableBody>
              </Table>
            </TableContainer></Fragment>:<Typography gutterBottom variant="h3" component="p" sx={{marginRight: 3}}>Oops, Something Went Wrong!</Typography>)
            :null
          } 
        </Paper>
      </div>
  );
};

export default ContentSection;