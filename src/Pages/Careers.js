import React from 'react';
import { Box, Typography} from '@mui/material';
import { useLoaderData, Link} from 'react-router-dom';
import CareersList from '../Components/CareersList';
import styled from '@emotion/styled';

const StyledLink = styled(Link)({textDecoration:'none'})


const Careers = () => {
  const careerData = useLoaderData()
  const careerDataList= careerData && careerData.map((career)=>{
    return <StyledLink to={career.id.toString()}> <CareersList key= {career.id} title={career.title} location={career.location}/></StyledLink>
  })

    return (
    <>
    <Typography variant="h5">Careers</Typography>
    <Box padding={5}>
      {careerDataList}
    </Box>
    </>
  )
}
// career Loader
export const careerLoader = async() => {

    const response = await fetch("http://localhost:8000/careers")
    if(!response.ok){
      throw new Error("job not found")
    }
    const jsonResponse = await response.json()
    return jsonResponse
}



export default Careers