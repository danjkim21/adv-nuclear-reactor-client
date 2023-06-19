import './styles/App.css';
import Header from './components/Header';
import Landing from './pages/landing';
import About from './pages/about';
import Login from './pages/login';

import { Route, Routes } from 'react-router-dom';
import Reactors from './pages/reactors';
import useGetAllReactors from './hooks/useGetAllReactors';

function App() {
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

export default App;
