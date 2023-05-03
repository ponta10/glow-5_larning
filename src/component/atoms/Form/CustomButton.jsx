import { Button } from '@mui/material'
import React from 'react'

export const CustomButton = ({ title, bgColor, color, width, type, disabled, clickEvent, variant }) => {
  return (
    <Button  
      type={type}
      disabled={disabled}
      onClick={clickEvent}
      variant={variant}
      sx={{ 
        backgroundColor: bgColor, 
        color: color,
        with: width,
      }}>
        {title}
    </Button>
  )
}
