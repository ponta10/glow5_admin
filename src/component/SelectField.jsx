import { MenuItem, Select } from '@mui/material'
import React from 'react'

export const SelectField = ({ name, label, items, disabled, onChange, defaultValue, size}) => {
  return (
    <>
      <Select
        name={name}
        label={label}
        disabled={disabled}
        onChange={onChange}
        defaultValue={defaultValue}
        size={size}
      >
        {items.map((item, index) => (
            <MenuItem key={index} value={item}>{item}</MenuItem>
        ))}
      </Select>
    </>
  )
}
