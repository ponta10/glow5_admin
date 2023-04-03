import { Button } from '@mui/material'
import React from 'react'

export const CustomButton = ({ title, bgColor, color, width, type, disabled, clickEvent }) => {
  return (
    <Button  
      type={type}
      disabled={disabled}
      onClick={clickEvent}
      sx={{ 
        backgroundColor: bgColor, 
        color: color,
        with: width,
      }}>
        {title}
    </Button>
  )
}
