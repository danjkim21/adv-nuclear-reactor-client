import { useState } from 'react';

export default function useLogin() {
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');

  const login = async (username, password) => {
    setIsError(false);
    setError('');

    try {
      const response = await fetch(`https://ardb.cyclic.app/auth/login`, {
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
    } catch (error) {
      if (error instanceof Error) {
        setIsError(true);
        setError(error.message);
      }
    }
  };

  return { error, isError, login };
}
