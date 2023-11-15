import { Outlet, Route, Routes } from 'react-router-dom';
import { useLocalStorage } from '@uidotdev/usehooks';

import Header from '../components/header';
import Landing from '../pages/landing';
import About from '../pages/about';
import Login from '../pages/login';
import Reactors from '../pages/reactors';
import Dashboard from '../pages/dashboard';

export default function AppRoutes() {
  const [userData, setUserData] = useLocalStorage<any>('userData', null);

  return (
    <>
      <Routes>
        {/* Client Site */}
        <Route
          element={
            <>
              <Header />
              <Outlet />
            </>
          }
        >
          <Route path='/' element={<Landing />} />
          <Route path='/reactors' element={<Reactors />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
        </Route>

        {/* Authenticated Users Site */}
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}
