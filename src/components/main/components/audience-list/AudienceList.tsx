import { Box, LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./config";
import useFetch, { IData } from "./useFetch";
import EmptyResults from "./components/EmptyResults";
import { useEffect, useState } from "react";
import useDataGridFilter from "../../hooks/useDataGridFilterContext";

const AudienceList = () => {
  const [filteredData, setFilteredData] = useState<IData[]>([]);

  const { data, isLoading, hasError } = useFetch(
    "https://onox.cloud/backend/simple_audience.php"
  );

  const { audienceName, status, tag } = useDataGridFilter();

  useEffect(() => {
    let filtered: IData[] = data;

    if (audienceName) {
      console.log("audienceName", audienceName);
      filtered = data.filter((item) => {
        return item.name.toLowerCase().includes(audienceName.toLowerCase());
      });
    }
    if (status) {
      console.log("status", status);
      filtered = data.filter((item) => {
        return item.status.toLowerCase().includes(status.toLowerCase());
      });
    }
    setFilteredData(filtered);
  }, [audienceName, tag, status, data]);

  return (
    <Box sx={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={filteredData.length !== 0 ? filteredData : data}
        columns={columns}
        loading={isLoading}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 15, 20]}
        paginationMode="client"
        checkboxSelection
        disableSelectionOnClick
        components={{
          LoadingOverlay: LinearProgress,
          NoResultsOverlay: EmptyResults,
        }}
      />
    </Box>
  );
};

export default AudienceList;
