import { TextField } from "@mui/material";
import React from "react";

export const InputField = ({
  type,
  label,
  name,
  multiline,
  size,
  rows,
  placeholder,
  variant,
  registration,
  error,
  helperText,
  InputProps,
}) => {
  return (
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
        InputProps={InputProps}
        sx={{
          backgroundColor: "#fff",
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#4EABBA", // フォーカス時のボーダー色
            },
            "&:hover fieldset": {
              borderColor: "#4EABBA", // フォーカス時のボーダー色
            },
          },
        }}
      />
  );
};
