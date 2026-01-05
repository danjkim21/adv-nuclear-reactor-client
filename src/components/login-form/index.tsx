import { Dispatch, useState } from 'react';
import './LoginForm.scss';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useNavigate } from 'react-router-dom';
import { UserInterface } from '../../types/user';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../api/authApi';

export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Record<string, string>>({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [userData, setUserData]: [UserInterface, Dispatch<UserInterface>] =
    useLocalStorage<any>('userData', null);

  const { mutateAsync: loginMutate } = useMutation({
    mutationFn: login,
  });

  const handleChange = (e) => {
    // TODO: Add form validation
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const result = await loginMutate({
        username: formData.username,
        password: formData.password,
      });

      setUserData({
        username: result.username,
        role: result.role,
        verified: result.verified,
        authenticated: true,
      });
      navigate('/dashboard');
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : typeof err === 'string'
            ? err
            : 'Login failed';
      setErrorMessage(msg);
    }
  };

  return (
    <>
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="username">
            Email Address
          </label>
          <input
            className="form-input"
            id="username"
            type="text"
            name="username"
            placeholder="Enter Email Address"
            required
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-input"
            id="password"
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input className="form-submit" type="submit" value="Login" />
        </div>
      </form>
      {errorMessage && <span className="alert-error">{errorMessage}</span>}
    </>
  );
}
