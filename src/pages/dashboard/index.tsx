import { Box } from "@mui/material";
import NavBar from "../../components/nav-bar";

export default function Dashboard() {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <NavBar />
      <h1>Dashboard</h1>
    </Box>
  );
}
