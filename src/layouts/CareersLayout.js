import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import {  Outlet } from 'react-router-dom';



const CareersLayout = () => {
  return (
    <>
    <Typography variant="body1">At Skyscales, we believe in fostering a collaborative and innovative work environment where talented individuals can thrive and make a difference. We are constantly looking for passionate and driven professionals to join our team and contribute to our mission of transforming industries through AI and technology.</Typography>
    <Box paddingLeft={15} paddingTop={5}>
        <Outlet/>
    </Box>
    </>
  )
}

export default CareersLayout