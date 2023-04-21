import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

export const SelectField = ({ name, label, items, disabled, onChange, defaultValue, size, control, error, helperText }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl sx={{ mt: 2, mb: 1 }} fullWidth error={!!error}>
        <InputLabel id={name} shrink>{label}</InputLabel>
      <Select
        name={name}
        label={label}
        disabled={disabled}
        defaultValue={defaultValue}
        size={size}
        onChange={(e) => {
          field.onChange(e.target.value);

          if (onChange) {
            onChange(e.target.value);
          }
        }}
        value={field.value}
      >
        {items.map((item, index) => (
            <MenuItem key={index} value={item}>{item}</MenuItem>
        ))}
      </Select>
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
        </FormControl>
      )}
    />
  )
}
