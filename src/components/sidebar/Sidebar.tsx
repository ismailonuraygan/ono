import React from "react";
import OnoLogo from "./OnoLogo";
import classes from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={classes.container}>
      <OnoLogo />
    </div>
  );
}

export default Sidebar;
