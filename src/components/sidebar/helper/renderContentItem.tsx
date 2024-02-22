import React from "react";
import { IContentItems } from "../config";
import classes from "../Sidebar.module.scss";
import classNames from "classnames";

export const renderContentItems = (
  contentItems: IContentItems[]
): React.ReactNode =>
  contentItems.map((item) => (
    <div
      className={classNames([
        classes.contentItem,
        { [classes.activeContentItem]: item.isActive },
      ])}
    >
      {item.icon} {item.text}
    </div>
  ));
