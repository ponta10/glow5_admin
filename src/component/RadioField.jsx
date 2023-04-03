import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

export const RadioField = ({ name, label, items, disabled, onChange }) => {
  return (
    <RadioGroup
      name={name}
      label={label}
      disabled={disabled}
      onChange={onChange}
    >
      {items.map((item) => (
        <FormControlLabel
          value={item}
          control={<Radio label={label} disabled={disabled} />}
          label={item}
        />
      ))}
    </RadioGroup>
  );
};
