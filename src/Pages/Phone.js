import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';

const Phone = () => {
  const [value,setValue]=useState(1)
  if(!value){
    return <Navigate to="/contactus" replace={true}/>
  }
  return (
    <>
    <Typography variant="h5"> Phone :</Typography>
    <Typography variant="body1"> Please call us at 9140469137</Typography>
    <Button variant='contained' onClick={()=> setValue(0)}>Back</Button>
    </>
  )
}

export default Phone