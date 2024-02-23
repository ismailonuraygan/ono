import React, { useContext } from "react";

export interface IFilterContext {
  audienceName: string;
  setAudienceName: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  tag: string;
  setTag: React.Dispatch<React.SetStateAction<string>>;
}

export const DataGridFilterContext = React.createContext<
  IFilterContext | undefined
>(undefined);

function useDataGridFilter() {
  const context = useContext(DataGridFilterContext);

  if (!context) {
    throw new Error(
      "Please add DataGridFilterContext into Data Grid before using it"
    );
  }
  return context;
}

export default useDataGridFilter;
