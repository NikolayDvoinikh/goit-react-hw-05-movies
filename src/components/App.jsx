import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
export const App = () => {
  return (
    <BrowserRouter
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Navbar />
    </BrowserRouter>
  );
};
