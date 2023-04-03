import { TextField } from '@mui/material'
import React from 'react'

export const InputField = ({ type, label, name, multiline, size, rows, placeholder, variant, registration, error, helperText}) => {
  return (
    <>
      <TextField
        type={type}
        label={label}
        name={name}
        multiline={multiline}
        rows={rows}
        placeholder={placeholder}
        variant={variant}
        size={size}
        {...registration}
        error={error}
        helperText={helperText}
      />
    </>
  )
}
