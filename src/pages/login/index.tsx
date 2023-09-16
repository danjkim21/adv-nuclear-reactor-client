import Footer from '../../components/footer';
import LoginForm from '../../components/login-form';

function Login() {
  return (
    <div className='section__login'>
      <div className='container container__login'>
        <h1 className='page__header'>Developer Login</h1>
        <p className='page__contentDescrip'>Sign in with Email</p>

        <LoginForm />
      </div>

      <Footer />
    </div>
  );
}

export default Login;
