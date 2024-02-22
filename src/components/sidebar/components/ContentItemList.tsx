import React from "react";
import { renderContentItems } from "../helper/renderContentItem";
import { contentItems } from "../config";

const ContentItemList = () => {
  return <>{renderContentItems(contentItems)}</>;
};

export default ContentItemList;
