import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box, Container, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'


const StyledNavLink = styled(NavLink)({
  textDecoration:'none', 
  color:'#fff',
  fontSize: 20,
  "&.active":{ background:"white",
              color:"#4287f5",
              padding:10,
              borderRadius:5}
})


const Navbar = () => {
  return (
    <>
    <AppBar position="static" color="primary">
     <Container>
      <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
        <Typography variant="h5">Router 6.5
          </Typography>
        <Box sx={{display:'flex', alignItems:'center', gap:'50px'}}>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="aboutus">Aboutus</StyledNavLink>
            <StyledNavLink to="contactus">Contactus</StyledNavLink>
            <StyledNavLink to="careers">Careers</StyledNavLink>
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
    </>
  )
}

export default Navbar