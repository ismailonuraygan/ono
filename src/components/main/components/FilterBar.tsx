import React from "react";
import classes from "./FilterBar.module.scss";
import SearchIcon from "../../../icons/SearchIcon";
import CustomSelect from "./CustomSelect";

const optionsTags = ["Design", "Marketing", "Development"];
const optionsStatus = ["Active", "Passive"];

function FilterBar() {
  return (
    <div className={classes.container}>
      <h2>Audience List</h2>

      <div className={classes.filterInputWrapper}>
        <div className={classes.audienceSearch}>
          <SearchIcon />
          <input placeholder="Search.." />
        </div>
        <div className={classes.select}>
          <CustomSelect label="Select Tags" options={optionsTags} />
          <CustomSelect label="Select Status" options={optionsStatus} />
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
