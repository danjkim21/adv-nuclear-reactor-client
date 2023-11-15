import { useState } from 'react';
import './LoginForm.scss';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>({
    username: '',
    password: '',
  });
  const [userData, setUserData] = useLocalStorage<any>('userData', null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://ardb.cyclic.app/auth/login`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      if (!response.ok || response.status !== 200) {
        // throw new Error(response.statusText);
        throw new Error('Invalid username or password');
      }

      const json = await response.json();

      // Valid login > save user data to local storage and navigate to dashboard
      setUserData({ username: json.username, authenticated: true });
      navigate('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <>
      <form className='form-login' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='form-label' htmlFor='username'>
            Email Address
          </label>
          <input
            className='form-input'
            id='username'
            type='text'
            name='username'
            placeholder='Enter Email Address'
            required
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='password'>
            Password
          </label>
          <input
            className='form-input'
            id='password'
            type='password'
            name='password'
            placeholder='Enter Password'
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <input className='form-submit' type='submit' value='Login' />
        </div>
      </form>
      {errorMessage && <span className='alert-error'>{errorMessage}</span>}
    </>
  );
}
