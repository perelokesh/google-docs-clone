import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Container, Grid, Typography } from '@material-ui/core';
import MyButton from './DocumentSection';
import googlecolors from '../Images/docs-blank-googlecolors.png'

const useStyles = makeStyles((theme) => ({
  
  container: {
    backgroundColor: '#F8F9FA',
    margin: 'auto',
    paddingBottom: '2.5rem',
    paddingLeft: '2.5rem',
    paddingRight: '2.5rem',
    justifyContent: 'space-between',
  },
  gridContainer: {
  //  maxWidth: '48rem',
   justifyContent: 'space-between',
   alignItems:'center',
   display:"flex",

  },
  itemContainer:{
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
  },
  imageContainer:{
    position: 'relative',
    height: '190px', 
    width: '150px', 
    border: '1px solid',
    borderColor: theme.palette.grey[500], // Adjust the border color to match your desired color
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#89CFF0',
    },
  },

}));

export default function Blank() {
  const classes = useStyles();

  return (
      <Container className={classes.container}>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h6" color="none" className={classes.text}>
              Start a new document
            </Typography>
          </Grid>
          <Grid item sx={{    paddingTop: '1.5rem',}}>
            <MyButton/>
          </Grid>
        </Grid >
          <Grid item sx={{justifyContent:'space-between'}}>
            <img src={googlecolors} alt='' className={classes.imageContainer} />
            <Typography variant="body1" >Blank</Typography>
          </Grid>
      </Container>
  );
}


