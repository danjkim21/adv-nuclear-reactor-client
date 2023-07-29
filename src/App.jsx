import './styles/app.scss';
import './styles/mediaQueries.scss';
import AppRoutes from './router';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className='App'>
      <AppRoutes />
      <Analytics />
    </div>
  );
}

export default App;
