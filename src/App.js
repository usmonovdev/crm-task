import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SimpleMain } from './simple';
import { AdminMain } from './admin';
import { SuperMain } from "./super-admin";
import Aos from 'aos';
import './App.css';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 500,
      easing: 'ease-out-sine',
    });
  }, [])

  return (
    <>
      <Routes>
        <Route path='/*' element={<SimpleMain />} />
        <Route path='/admin-dashboard/*' element={<AdminMain />} />
        <Route path='/super-admin/*' element={<SuperMain />} />
      </Routes>
    </>
  );
}

export default App;
