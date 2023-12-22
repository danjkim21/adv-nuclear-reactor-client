import { Box } from '@mui/material';
import NavBar from '../../components/nav-bar';

export default function UserManagement() {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <NavBar />
      <h1>Users</h1>
    </Box>
  );
}
