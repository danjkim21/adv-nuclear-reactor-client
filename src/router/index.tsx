import { Outlet, Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Landing from '../pages/landing';
import About from '../pages/about';
import Login from '../pages/login';
import Reactors from '../pages/reactors';
import { useLocalStorage } from '@uidotdev/usehooks';

export default function AppRoutes() {
  const [userData, setUserData] = useLocalStorage<any>('userData', null);

  return (
    <>
      <Routes>
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
      </Routes>
    </>
  );
}
