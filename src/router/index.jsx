import { Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Landing from '../pages/landing';
import About from '../pages/about';
import Login from '../pages/login';
import Reactors from '../pages/reactors';

export default function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/reactors' element={<Reactors />} />
        <Route path='/about' element={<About />} />
        <Route path='/dev' element={<Login />} />
      </Routes>
    </>
  );
}
