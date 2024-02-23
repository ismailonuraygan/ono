import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import classes from "./FilterBar.module.scss";

export interface IProps {
  label: string;
  options: string[];
  onChange: React.Dispatch<React.SetStateAction<any>>;
  value: string;
}

const CustomSelect = ({ label, options, onChange, value }: IProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    console.log("on Change");
    onChange(event.target.value as string);
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
        <MenuItem value={""}>Temizle</MenuItem>
        {options.map((option) => {
          return <MenuItem value={option}>{option}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
