import React, { useEffect } from "react";
import {
  AdminDeadline,
  AdminLogin,
  AdminNavbar,
  AdminRejected,
  AdminSale,
  AdminUsers,
} from "./index";
import { Route, Routes, useNavigate } from "react-router-dom";
import PageNotFound from "../PageNotFound";

const Admin = () => {
  const navigate = useNavigate()
  const isAdmin = localStorage.getItem("IS_ADMIN")
  console.log(isAdmin);
  useEffect(() => {
    if (isAdmin === false) {
      navigate("/admin-page/users")
    } else {
      navigate("/admin-page/login")
    }
  }, [])
  return (
    <div>
      <AdminNavbar />
      <Routes>
        <Route path="login" element={<AdminLogin />} />

        <Route path="users" element={<AdminUsers />} />
        <Route path="sale" element={<AdminSale />} />
        <Route path="rejected" element={<AdminRejected />} />
        <Route path="deadline" element={<AdminDeadline />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Admin;
