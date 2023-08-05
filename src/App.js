import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { SimpleMain } from './simple';
import { AdminMain } from './admin';
import { SuperMain } from "./super-admin";
import Aos from 'aos';
import './App.css';
import 'aos/dist/aos.css';

function App() {
  const navigate = useNavigate()
  const isUser = localStorage.getItem("IS_SIMPLE")
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 500,
      easing: 'ease-out-sine',
    });
    if (isUser === null) {
      navigate("/login")
    }
  }, [])
  return (
    <>
      <Routes>
        <Route path='/*' element={<SimpleMain />} />
        <Route path='/admin-page/*' element={<AdminMain />} />
        <Route path='/super-page/*' element={<SuperMain />} />
      </Routes>
    </>
  );
}

export default App;
