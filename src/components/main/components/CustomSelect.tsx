import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import classes from "./FilterBar.module.scss";

export interface IProps {
  label: string;
  options: string[];
}

const CustomSelect = ({ label, options }: IProps) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl fullWidth className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        sx={{
          boxShadow: "none",
          height: 51,
          ".MuiOutlinedInput-notchedOutline": {
            border: "1px solid #eaeaea",
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => {
          return <MenuItem value={option}>{option}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
