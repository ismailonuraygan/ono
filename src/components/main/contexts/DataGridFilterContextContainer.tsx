import React, { PropsWithChildren, useState } from "react";
import { DataGridFilterContext } from "../hooks/useDataGridFilterContext";

interface IProps {}

const DataGridFilterContextContainer: React.FC<PropsWithChildren<IProps>> = (
  props
) => {
  const [audienceName, setAudienceName] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const contextValues = {
    audienceName,
    setAudienceName,
    status,
    setStatus,
    tag,
    setTag,
  };

  return (
    <DataGridFilterContext.Provider value={contextValues}>
      {props.children}
    </DataGridFilterContext.Provider>
  );
};

export default DataGridFilterContextContainer;
