import { CheckBox } from "@mui/icons-material";
import { FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

export const CheckBoxField = ({ name, label, items, disabled }) => {
  return (
    <FormGroup name={name} label={label} disabled={disabled}>
      {items.map((item) => (
        <FormControlLabel control={<CheckBox name={item} />} label={item} />
      ))}
    </FormGroup>
  );
};
