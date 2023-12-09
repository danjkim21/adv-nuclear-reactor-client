import { useState } from 'react';

export default function useLogout() {
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');

  const logout = async () =>
    // Update params when backend is fixed
    // username,
    // password
    {
      setIsError(false);
      setError('');

      try {
        const response = await fetch(`https://ardb.cyclic.app/auth/logout`, {
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
      } catch (error) {
        if (error instanceof Error) {
          setIsError(true);
          setError(error.message);
        }
      }
    };

  return { error, isError, logout };
}
