import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Tooltip } from '@material-ui/core';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';import React from 'react'

const useStyles = makeStyles((theme) => ({
mainContainer:{
  maxWidth:'48rem',
  margin:'auto',
  paddingLeft: '2.5rem',
  paddingRight: '2.5rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  [theme.breakpoints.up('md')]: {
    paddingLeft: 0,
  },
  backgroundColor: "white",

},
itemContainer:{
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  paddingBottom:'1.5rem',
}
}));
const RecentDocuments = () => {
  const classes = useStyles();
  return ( 
    <Container className={classes.mainContainer}>
      <Grid container className={classes.itemContainer}>
        <Grid item >
          <Typography variant="h6">
           Recent Documents
          </Typography>
        </Grid>
        <Grid item sx={{flexGrow: 1, paddingLeft:'38.1rem'}}>
           <Typography variant="body">
            Date Created
           </Typography>
        </Grid>
        <Grid item>
          <Tooltip title="open file picker" placement='bottom'>
             <IconButton >
               <FolderOpenIcon />
             </IconButton>
          </Tooltip>
        </Grid>  
      </Grid>
    </Container>

  )
}

export default RecentDocuments;

