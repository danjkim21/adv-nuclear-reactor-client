import { Dispatch, useState } from 'react';
import './LoginForm.scss';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useNavigate } from 'react-router-dom';
import { UserInterface } from '../../types/user';
import useLogin from '../../hooks/useLogin';

export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [userData, setUserData]: [UserInterface, Dispatch<UserInterface>] =
    useLocalStorage<any>('userData', null);

  const { error, isError, login } = useLogin();

  const handleChange = (e) => {
    // Add form validation
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    login(formData.username, formData.password);

    if (isError) {
      setErrorMessage(error);
      return; // Exit function early if error occurs
    }

    setUserData({ username: formData.username, authenticated: true });
    navigate('/dashboard');
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
