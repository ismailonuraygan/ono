import React from "react";
import OnoLogo from "./OnoLogo";
import classes from "./Sidebar.module.scss";
import SearchIcon from "../../icons/SearchIcon";
import ContentItemList from "./components/ContentItemList";

function Sidebar() {
  return (
    <aside className={classes.container}>
      <div className={classes.logoWrapper}>
        <div>
          <OnoLogo />
        </div>
        <div className={classes.searchBar}>
          <SearchIcon />
          <input placeholder="Search.." />
        </div>
      </div>
      <div className={classes.contentWrapper}>
        <p className={classes.contentHeader}>Menu</p>
        <ContentItemList />
      </div>
    </aside>
  );
}

export default Sidebar;
