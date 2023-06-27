import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box, Container, styled, Drawer, IconButton } from '@mui/material'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import "../styles/Navigation.css";

const StyledNavLink = styled(NavLink)({
  textDecoration:'none', 
  color:{xs:"black", sm:'#fff'},
  fontSize: 20,
  "&.active":{ background:"white",
              color:"#4287f5",
              padding:5,
              borderRadius:5}
})


const Navbar = () => {
  const [mobileOpen,setMobileOpen]= useState(false)

  //handle Menu click
  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)

  }

  //menu drawer
  const drawer =(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography variant="h5" component="div" sx={{flexGrow:1, alignItems:"center"}}>Skyscales 
          </Typography>
          
          <ul className='mobile-navigation'>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="aboutus">Aboutus</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="contactus">Contactus</StyledNavLink>
            </li>
            <li>
             <StyledNavLink to="careers">Careers</StyledNavLink>
            </li>
            </ul>
    </Box>
 )
  return (
    <>
    <Box>
    <AppBar position="static" color="primary" component={"nav"} sx={{bgcolor:"#066fd1"}}>
      <Toolbar >
        <IconButton color="white" 
            aria-label='open drawer' 
            edge="start" 
            sx={{mr:2, display:{sm:"none"},}}
            onClick={handleDrawerToggle}>
           <MenuIcon/>
        </IconButton>
        <Typography variant="h5" component="div" sx={{flexGrow:1}}>Skyscales 
          </Typography>
          
        <Box sx={{display:{xs:"none", sm:"block"}}}>
          <ul className='navigation-menu'>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="aboutus">Aboutus</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="contactus">Contactus</StyledNavLink>
            </li>
            <li>
             <StyledNavLink to="careers">Careers</StyledNavLink>
            </li>
            </ul>
        </Box>
      </Toolbar>
    </AppBar>
    <Box component="nav">
        <Drawer 
              variant='temporary' 
              open={mobileOpen} 
              onClose={handleDrawerToggle} 
              sx={{display:{xs:'block', sm:'none'}, "& .MuiDrawer-paper":{
                boxSizing: "border-box",
                width:"240px",
              }}}
              >
          {drawer}
        </Drawer>
    </Box>
    </Box>
    </>
  )
}

export default Navbar