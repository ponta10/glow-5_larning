import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../block/Header'
import { Footer } from '../block/Footer'
import { BreadCrumbs } from '../modules/BreadCrumbs'

export const MainLayout = ({ children, links }) => {
  return (
    <Box marginTop={6}>
        <Header />
        <BreadCrumbs links={links} />
        {children}
        <Footer />
    </Box>
  )
}
