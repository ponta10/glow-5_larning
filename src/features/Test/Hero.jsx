import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Image from '../../assets/rose3.jpg'

export const Hero = () => {
  return (
<Box
      sx={{
        width: "100vw",
        height: "360px", 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Image}) center / cover no-repeat`,
      }}
    >
      <Container>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" sx={{ color: "#fff" }}>
          Welcome to PeerPerk
        </Typography>
        <Typography variant="h6" component="p" gutterBottom sx={{ color: "#fff" }}>
          This is a hero section with a background image
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 2, backgroundColor: "#4EABBA" }}>
          Get Started
        </Button>
      </Container>
    </Box>
  )
}
