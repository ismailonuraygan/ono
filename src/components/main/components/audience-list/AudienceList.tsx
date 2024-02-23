import { Box, LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./config";
import useFetch from "./useFetch";
import EmptyResults from "./components/EmptyResults";

const AudienceList = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://onox.cloud/backend/simple_audience.php"
  );

  return (
    <Box sx={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={data}
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
