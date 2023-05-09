import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import SortIcon from "@mui/icons-material/Sort";

export const SelectField = ({
  name,
  label,
  items,
  disabled,
  onChange,
  defaultValue,
  size,
  control,
  error,
  helperText,
  sort,
}) => {
  const selectStyle = {
    backgroundColor: "gray.0",
    ...(sort && {
      backgroundColor: "gray.100",
      textAlign: "right",
    }),
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "base",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "base",
    },
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl sx={{ mt: 2, mb: 1 }} fullWidth error={!!error}>
          <InputLabel
            id={name}
            shrink
            sx={{
              "&.Mui-focused": {
                color: "base",
              },
            }}
          >
            {label}
          </InputLabel>
          <Select
            name={name}
            label={label}
            disabled={disabled}
            defaultValue={defaultValue}
            size={size}
            {...(sort && {
              IconComponent: SortIcon,
            })}
            onChange={(e) => {
              field.onChange(e.target.value);

              if (onChange) {
                onChange(e.target.value);
              }
            }}
            value={field.value}
            sx={selectStyle}
          >
            <MenuItem value="noneSelected" selected disabled>選択してください</MenuItem>
            {items.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
        </FormControl>
      )}
    />
  );
};


