import { Avatar, Box, Divider, Stack, Typography } from '@mui/material';
import NavBar from '../../components/nav-bar';
import { useLocalStorage } from '@uidotdev/usehooks';
import { UserDataInterface } from '../../types/user';
import { Dispatch } from 'react';

export default function Profile() {
  const [userData, setUserData]: [
    UserDataInterface,
    Dispatch<UserDataInterface>
  ] = useLocalStorage<any>('userData', null);

  return (
    <Box component='main' sx={{ p: 3 }}>
      <NavBar />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={{ xs: 1, sm: 2 }}
        mb={2}
      >
        <Avatar alt={userData?.username} sx={{ width: 64, height: 64 }} />
        <Typography variant='h4' component='h1' gutterBottom>
          {userData?.username}
        </Typography>
      </Stack>
      <Divider />
    </Box>
  );
}
