import React from "react";
import { SuperAdmins, SuperLogin, SuperNavbar, SuperUsers } from "./index";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../PageNotFound";

const SuperAdmin = () => {
  return (
    <div>
      <SuperNavbar />
      <Routes>
        <Route path="login" element={<SuperLogin />} />

        <Route path="users" element={<SuperUsers />} />
        <Route path="admins" element={<SuperAdmins />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default SuperAdmin;
