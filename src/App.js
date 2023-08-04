import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { SimpleLogin, SimpleMeeting, SimpleNavbar, SimpleRegister, SimpleSale, SimpleUsers } from './simple';
import { AdminDeadline, AdminLogin, AdminMain, AdminNavbar, AdminRejected, AdminSale } from './admin';
import { SuperAdmins, SuperLogin, SuperNavbar, SuperUsers } from "./super-admin";
import PageNotFound from './PageNotFound';
import Aos from 'aos';
import './App.css';
import 'aos/dist/aos.css';

function App() {
  const { pathname } = useLocation()
  console.log(pathname);
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 500,
      easing: 'ease-out-sine',
    });
  }, [])

  return (
    <>
      {localStorage.getItem("IS_SIMPLE") ?
        <>
          <SimpleNavbar />
          <Routes>
            <Route path='login' element={<SimpleLogin />} />
            <Route path='register' element={<SimpleRegister />} />
            <Route path='admin-page' element={<AdminLogin />} />
            <Route path='super-page' element={<SuperLogin />} />

            <Route path='dashboard'>
              <Route path='users' element={<SimpleUsers />} />
              <Route path='sale' element={<SimpleSale />} />
              <Route path='meeting' element={<SimpleMeeting />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </>
        :
        localStorage.getItem("IS_ADMIN") ?
          <div>
            <AdminNavbar />
            <Routes>
              <Route path='login' element={<SimpleLogin />} />
              <Route path='register' element={<SimpleRegister />} />
              <Route path='admin-page' element={<AdminLogin />} />
              <Route path='super-page' element={<SuperLogin />} />

              <Route path='admin-dashboard'>
                <Route path='users' element={<AdminMain />} />
                <Route path='sale' element={<AdminSale />} />
                <Route path='rejected' element={<AdminRejected />} />
                <Route path='deadline' element={<AdminDeadline />} />
              </Route>
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </div>
          :
          <div>
            <SuperNavbar />
            <Routes>
              <Route path='login' element={<SimpleLogin />} />
              <Route path='register' element={<SimpleRegister />} />
              <Route path='admin-page' element={<AdminLogin />} />
              <Route path='super-page' element={<SuperLogin />} />

              <Route path='super-dashboard'>
                <Route path='users' element={<SuperUsers />} />
                <Route path='admins' element={<SuperAdmins />} />
              </Route>
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </div>
      }
    </>
  );
}

export default App;
