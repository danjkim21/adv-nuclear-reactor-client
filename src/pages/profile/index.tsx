import {
  Avatar,
  Chip,
  Box,
  Divider,
  Stack,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import NavBar from '../../components/nav-bar';
import { useLocalStorage } from '@uidotdev/usehooks';
import { UserInterface } from '../../types/user';
import { Dispatch } from 'react';

export default function Profile() {
  const [userData, setUserData]: [UserInterface, Dispatch<UserInterface>] =
    useLocalStorage<any>('userData', null);

  console.log(userData);

  return (
    <Box component="main" sx={{ p: 3 }}>
      <NavBar />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={{ xs: 1, sm: 2 }}
        mb={2}
      >
        <Avatar alt={userData?.username} sx={{ width: 64, height: 64 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          {userData?.username}
        </Typography>
        <Chip
          label={userData?.verified ? 'Verified' : 'Not Verified'}
          color={userData?.verified ? 'success' : 'default'}
          variant="outlined"
        />
      </Stack>
      <Divider />

      <Card variant="outlined" sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom>
            User Information
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText
                primary="Username"
                secondary={userData?.username ?? 'N/A'}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Role"
                secondary={userData?.role ?? 'N/A'}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Authenticated"
                secondary={String(userData?.authenticated ?? false)}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Verified"
                secondary={userData?.verified ? 'Yes' : 'No'}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
