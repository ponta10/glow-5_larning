import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

export const RadioField = ({
  name,
  label,
  items,
  disabled,
  onChange,
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "選択してください。" }}
      render={({ field }) => (
        <RadioGroup
          name={name}
          label={label}
          disabled={disabled}
          onChange={(e) => {
            field.onChange(e.target.value);
            onChange(e.target.value);
          }}
          value={field.value}
          row
        >
          {items.map((item) => (
            <FormControlLabel
              value={item}
              control={
                <Radio
                  label={label}
                  disabled={disabled}
                  sx={{
                    "&.Mui-checked": {
                      color: "#4EABBA",
                    },
                  }}
                />
              }
              label={item}
              key={item}
            />
          ))}
        </RadioGroup>
      )}
    />
  );
};
