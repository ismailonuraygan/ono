import React from "react";
import OnoLogo from "./OnoLogo";
import classes from "./Sidebar.module.scss";
import { contentItems } from "./config";
import SearchIcon from "../../icons/SearchIcon";

function Sidebar() {
  return (
    <div className={classes.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <OnoLogo />
        <div
          style={{
            border: "1px solid #EAEAEA",
            display: "flex",
            alignItems: "center",
            gap: 15,
            height: 52,
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 8,
            flexGrow: 1,
          }}
        >
          <SearchIcon />
          <input placeholder="Search.." style={{ border: "none" }}></input>
        </div>
      </div>
      <div className={classes.contentWrapper}>
        <p style={{ textAlign: "left", fontSize: "14px", color: "#b2b2b2" }}>
          Menu
        </p>
        {contentItems.map((item) => {
          return (
            <div className={classes.contentItem}>
              {item.icon} {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
