import { Container,Box, Typography,  Fade } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import React, { useState, useEffect } from 'react';
import Hero from "../Images/hero.jpg"


const Home = () => {
  const [opacity, setOpacity] = useState(0.5);
  const [position,setPosition] = useState()
  useEffect(() => {
    // This code will execute once the component renders.
    const timeout = setTimeout(() => {
      setOpacity(1);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
    <Fade in={opacity !== 0} timeout={1000}>
    <Box className='hero' style={{backgroundImage:`url(${Hero})`,opacity: `${opacity}`, height:'100vh', backgroundRepeat: 'no-repeat',  width:"auto", backgroundPosition:'center center', backgroundSize:"250vh 160vh", paddingTop:"10vh"}}>
    </Box>
    </Fade>
    <Container sx={{paddingTop:"20vh", height: "100vh"}}>
    <Typography variant="h3" align= "center">Let's Build Future Together</Typography>
    <Typography variant="body1" align= "center">Everything starts with a small idea. At SkyScales, we turn your ideas into innovative products that builds a more fantastic future</Typography>
    </Container>
    </>
  )
}

export default Home