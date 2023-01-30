import React from 'react'
import { Navbar } from '../Navbar'
import { Container, Button, makeStyles, Typography, Snackbar,  } from '@material-ui/core';


const useStyles = makeStyles({
  
  typographyStyle: {
      fontFamily: 'Roboto, arial, sans-serif;',
      textAlign: 'center',
      fontSize: '2em'
  }
});


export const About = () => {


  const classes = useStyles();



  return (
    <div>
        <Navbar />
        <Typography className={classes.typographyStyle}>About Us Information Coming Soon</Typography>
    </div>
  )
}




