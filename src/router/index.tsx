import { Outlet, Route, Routes } from 'react-router-dom';

import Header from '../components/header';
import Landing from '../pages/landing';
import About from '../pages/about';
import Login from '../pages/login';
import Reactors from '../pages/reactors';
import Dashboard from '../pages/dashboard';
import ProtectedRoute from '../utils/ProtectedRoute';

export default function AppRoutes() {
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
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
