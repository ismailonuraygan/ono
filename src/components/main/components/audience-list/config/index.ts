import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Audience Name",
    width: 350,
  },
  {
    field: "tags",
    headerName: "Tags",
    width: 350,
  },
  {
    field: "status",
    headerName: "Status",
    type: "string",
    width: 150,
  },
];
