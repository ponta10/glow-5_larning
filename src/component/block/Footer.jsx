import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#4EABBA', py: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" color="white">
          &copy; {new Date().getFullYear()} Anti Pattern.Inc
        </Typography>
      </Container>
    </Box>
  )
}
