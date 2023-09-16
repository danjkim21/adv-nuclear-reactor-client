import { useState } from 'react';
import './LoginForm.scss';

export default function LoginForm() {
  const [formData, setFormData] = useState<any>({
    username: '',
    password: '',
    redirectTo: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit: ', formData);
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
          disabled
        />
      </div>
    </form>
  );
}
