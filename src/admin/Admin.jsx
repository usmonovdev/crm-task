import React from "react";
import {
  AdminDeadline,
  AdminLogin,
  AdminNavbar,
  AdminRejected,
  AdminSale,
  AdminUsers,
} from "./index";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../PageNotFound";

const Admin = () => {
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
