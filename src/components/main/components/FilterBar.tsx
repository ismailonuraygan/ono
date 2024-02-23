import React from "react";
import classes from "./FilterBar.module.scss";
import SearchIcon from "../../../icons/SearchIcon";
import CustomSelect from "./CustomSelect";
import useDataGridFilter from "../hooks/useDataGridFilterContext";

const optionsTags = ["Design", "Marketing", "Development"];
const optionsStatus = ["Active", "Passive"];

function FilterBar() {
  const { audienceName, setAudienceName, tag, setTag, status, setStatus } =
    useDataGridFilter();
  return (
    <div className={classes.container}>
      <h2>Audience List</h2>

      <div className={classes.filterInputWrapper}>
        <div className={classes.audienceSearch}>
          <SearchIcon />
          <input
            placeholder="Search.."
            onChange={(e) => setAudienceName(e.target.value)}
            value={audienceName}
          />
        </div>
        <div className={classes.select}>
          <CustomSelect
            label="Select Tags"
            options={optionsTags}
            onChange={setTag}
            value={tag}
          />
          <CustomSelect
            label="Select Status"
            options={optionsStatus}
            onChange={setStatus}
            value={status}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
