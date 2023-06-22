import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
    <Typography variant="h5"> Page Not Found </Typography>
    <Typography variant="body1"> Go to <Link to="/"> Home Page</Link></Typography>
    </>
  )
}

export default PageNotFound