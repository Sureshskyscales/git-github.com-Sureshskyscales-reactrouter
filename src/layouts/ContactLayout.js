import React from 'react'
import { Box, Typography, styled } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';

const StyledNavLink = styled(NavLink)({
    textDecoration:'none', 
    color:'white',
    fontSize: 20,
    background:"#4287f5",
    padding:3,
    borderRadius:5,
    "&.active":{
                color:"white",
                padding:5,
                borderRadius:5}
  })
  
const ContactLayout = () => {
  return (
    <>
    <Typography variant="h5" align="center">Contactus</Typography>
    <Typography variant="body1" align="center"> We're excited to connect with you at Skyscales! If you have any questions, inquiries, or feedback, our dedicated team is here to assist you.We value your time and strive to provide prompt responses. Feel free to reach out to us using your preferred method of contact, and we'll get back to you as soon as possible.</Typography>
    <Box sx={{display:"flex", alignItems: "center", justifyContent:"center",my:5, gap:10}}>
        <StyledNavLink to="mail" > Mail us </StyledNavLink>
        <StyledNavLink to="phone" > call us </StyledNavLink>
    </Box>  
        <Outlet/>
    </> 

  )
}

export default ContactLayout