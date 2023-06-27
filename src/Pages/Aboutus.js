import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { Navigate } from 'react-router-dom';

const Aboutus = () => {
  const[user,setUser] = useState(1)
  if(!user){
    return<Navigate to="/"/>
  }
  return (
    <>
    <Typography variant="h3" align="center">Our Mission</Typography>
    <Typography variant="body1" align="center" margin={3}>At Skyscales, we are proud to introduce our revolutionary AI service that is set to transform industries and redefine the way businesses operate. We have harnessed the power of artificial intelligence to deliver cutting-edge solutions that drive efficiency, improve decision-making, and unlock new opportunities for growth.</Typography>
    <Button variant="contained" onClick={()=> setUser(null)}>Home</Button>
    </>
  )
}

export default Aboutus