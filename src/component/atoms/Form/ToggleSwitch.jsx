import React from 'react';
import { Controller } from 'react-hook-form';
import { Switch, FormControlLabel } from '@mui/material';

export const ToggleSwitch = ({ disabled, name, label, control }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControlLabel
        sx={{
            "& .Mui-checked .MuiSwitch-track": {
              backgroundColor: "#4EABBA",
            },
            "& .Mui-checked .MuiSwitch-thumb": {
              backgroundColor: "#4EABBA",
            },
          }}
          control={
            <Switch
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              disabled={disabled}
            />
          }
          label={label}
        />
      )}
    />
  );
};
