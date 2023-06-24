import { Divider, Typography, Box} from '@mui/material'
import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const CareerDetail = () => {
  const {id}=useParams()
  console.log(id)
    const jobData=useLoaderData()
    console.log(jobData)
    return (
    <>
    <Divider sx={{mx:5, my:5}}/>
    <Box>
        <Typography variant='h4'> {jobData.title}</Typography>
        <Typography variant='h4'>{jobData.salary}</Typography>
        <Typography variant='h4'>{jobData.location}</Typography>
    </Box>
    </>
  )
}
//job Detail
export const jobLoader = async({params}) => {
    const {id}= params
    const response = await fetch("http://localhost:8000/careers/" + id)
    if(!response.ok){
      throw new Error("job not found")
    }
    const jsonResponse = await response.json()
    return jsonResponse
}

export default CareerDetail