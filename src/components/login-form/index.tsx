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
      const json = await response.json();

      if (!response.ok) {
        // throw new Error(response.statusText);
        throw new Error('Invalid username or password');
      }

      if (response.ok) {
        // Valid login > save user data to local storage and navigate to dashboard
        setUserData({ username: json.username, authenticated: true });
        navigate('/dashboard');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
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
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <input
          className='form-submit'
          type='submit'
          value='Login'
          // Remove disabled once backed is ready
          // disabled
        />
      </div>
    </form>
  );
}
