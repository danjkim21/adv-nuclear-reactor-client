import { Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Landing from '../pages/landing';
import About from '../pages/about';
import Login from '../pages/login';
import Reactors from '../pages/reactors';
import useGetAllReactors from '../hooks/useGetAllReactors';

export default function AppRoutes() {
  const { data, isLoading } = useGetAllReactors();

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Landing data={data} isLoading={isLoading} />
            </>
          }
        />

        <Route
          path='/reactors'
          element={
            <>
              <Reactors data={data} isLoading={isLoading} />
            </>
          }
        />
        <Route
          path='/about'
          element={
            <>
              <About data={data} />
            </>
          }
        />
        <Route
          path='/dev'
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </div>
  );
}
