const AUTH_URL = 'https://ardb1.cyclic.app/auth/';

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const response = await fetch(`${AUTH_URL}login`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (!response.ok || response.status !== 200) {
    // Expand statusText's in backend
    // throw new Error(response.statusText);
    throw new Error('Invalid username or password');
  }

  return response.json();
};

export const logout = async () => {
  const response = await fetch(`${AUTH_URL}logout`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // TODO: Fix body parameters and fix backend logout function
    // body: JSON.stringify({
    //   username: userData.username,
    // }),
  });

  if (!response.ok || response.status !== 200) {
    // Expand statusText's in backend
    // throw new Error(response.statusText);
    throw new Error('Error: unable to log out');
  }
};
