import { Typography } from '@mui/material'
import React from 'react'

export const Caption = (props) => {
  const { title, variant } = props
  return (
    <Typography 
        sx={{
            borderLeft: 5, 
            borderColor: "rgb(78 172 207)", 
            px: 2, 
            py: 1, 
            // width: "100%",
            backgroundColor: "#fff",
        }} 
        variant={variant}
    >
        {title}
    </Typography>
  )
}

