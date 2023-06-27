import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import { Box, Container} from '@mui/material'
import AppBreadcrumbs from '../Components/AppBreadcrumbs'

const Rootlayout = () => {
  return (
    <>
    <Navbar/>
    <Box>   
     <AppBreadcrumbs/>
     </Box>
    <Box >   
     <Outlet/>
     </Box>
    </>
  )
}

export default Rootlayout