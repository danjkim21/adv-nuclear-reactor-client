import './assets/App.css';
import Header from './components/Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Login from './pages/Login';

import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Reactors from './pages/Reactors';

function App() {
  let [data, setData] = useState([]);

  // Fetch all reactor data from api
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://ardb.cyclic.app/api`);
      const json = await response.json();
      setData(json);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Landing data={data} />
            </>
          }
        />

        <Route
          path='/reactors'
          element={
            <>
              <Reactors data={data} />
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
