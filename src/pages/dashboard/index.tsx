import { Box } from "@mui/material";
import NavBar from "../../components/nav-bar";
import ReactorTable from "./components/reactor-table";

export default function Dashboard() {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <NavBar />
      <h1>Dashboard</h1>
      <ReactorTable />
    </Box>
  );
}
