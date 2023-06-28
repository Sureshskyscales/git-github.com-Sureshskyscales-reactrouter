import { Container, Grid, Typography, Fade, ThemeProvider, Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Hero from "../Images/hero.jpg";
import { createTheme } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const Home = () => {
  const txtRef = useRef(null);
  const boxRef = useRef(null);

  const [txtInViewRef, txtInView] = useInView({
    triggerOnce: true,
  });
  const [boxInViewRef, boxInView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const txtElement = txtRef.current;
    const boxElement = boxRef.current;

    if (txtElement && txtInView) {
      txtElement.style.opacity = '1';
      txtElement.style.transform = 'translateX(0)';
    }

    if (boxElement && boxInView) {
      boxElement.style.opacity = '1';
      boxElement.style.transform = 'translateY(0)';
    }
  }, [txtInView, boxInView]);

  return (
    <ThemeProvider theme={theme}>
      <Fade in={true} timeout={2000}>
        <Container sx={{ height: '100vh' }}>
          <Grid
            container
            spacing={0}
            alignItems="center"
            justifyContent="center"
            sx={{
              backgroundImage: `url(${Hero})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              minHeight: '100vh',
              marginLeft: '-10vw', // Adjust marginLeft to offset the space on the left side
              width: '110vw',
            }}
            ref={boxInViewRef}
          >
            <Grid item xs={12} md={6}>
              <Box
                ref={txtInViewRef}
                sx={{
                  opacity: 0,
                  transform: 'translateX(-100px)',
                  transition: 'opacity 1s, transform 2s',
                  '&.fade-in': {
                    opacity: 1,
                    transform: 'translateX(0)',
                  },
                  fontFamily: 'Roboto, Arial, sans-serif',
                }}
                className={txtInView ? 'fade-in' : ''}
              >
                <Typography variant='h1' justifySelf="center"> Hi </Typography>
                <Typography variant='h4' justifySelf="center"> Welcome to Sky scales </Typography>
              </Box>
            </Grid>
          </Grid>

          <Container sx={{ paddingTop: '20vh', height: '100vh' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h3" align="center">
                  Let's Build Future Together
                </Typography>
                <Typography variant="body1" align="center">
                  Everything starts with a small idea. At SkyScales, we turn your ideas into innovative products that build a more fantastic future.
                </Typography>
              </Grid>
            </Grid>

            <div ref={boxRef}>
              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: '40px',
                  opacity: 0,
                  transform: 'translateY(100px)',
                  transition: 'opacity 1s, transform 1s',
                  '&.slide-in': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                }}
                className={boxInView ? 'slide-in' : ''}
              >
                <Grid item xs={12} md={6}>
                  <Box sx={{ height: '200px', backgroundColor: '#e8e8e8' }}>
                    <Typography> Box1</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ height: '200px', backgroundColor: '#f4f4f4' }}>
                  <Typography> Box2</Typography>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Container>
      </Fade>
    </ThemeProvider>
  );
};

export default Home;
