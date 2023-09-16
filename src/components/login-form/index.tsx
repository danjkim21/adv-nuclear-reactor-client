import { useState } from 'react';

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
    <form className='' onSubmit={handleSubmit}>
      <div className='form-group'>
        <div className='col-1 col-ml-auto'>
          <label className='form-label' htmlFor='username'>
            Username
          </label>
        </div>
        <div className=''>
          <input
            className='form-input'
            type='text'
            id='username'
            name='username'
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='form-group'>
        <div className=''>
          <label className='form-label' htmlFor='password'>
            Password:{' '}
          </label>
        </div>
        <div className=''>
          <input
            className='form-input'
            placeholder='password'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='form-group'>
        <div className=''></div>
        {/* <button className='' onSubmit={handleSubmit} type='submit'>
          Login
        </button> */}
        <input type='submit' value='Login' />
      </div>
    </form>
  );
}
