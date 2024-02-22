import React from "react";
import classes from "./Header.module.scss";
import NotificationIcon from "../../icons/NotificationIcon";
import GalleryIcon from "../../icons/GalleryIcon";
import { getTime } from "./helper/getTime";

const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.userName}>
        <h1 className={classes.welcome}>Welcome, Onur!</h1>
        <span className={classes.date}>{getTime()}</span>
      </div>
      <div className={classes.rightButtons}>
        <div className={classes.button}>
          <NotificationIcon />
        </div>
        <div className={classes.button}>
          <GalleryIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
