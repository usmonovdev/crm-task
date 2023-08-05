import React, { useEffect } from "react";
import { SuperAdmins, SuperLogin, SuperNavbar, SuperUsers } from "./index";
import { Route, Routes, useNavigate } from "react-router-dom";
import PageNotFound from "../PageNotFound";

const SuperAdmin = () => {
  const navigate = useNavigate()
  const isSuper = localStorage.getItem("IS_ADMIN")
  useEffect(() => {
    if (isSuper === false) {
      navigate("/super-page/users")
    } else {
      navigate("/super-page/login")
    }
  }, [])
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
