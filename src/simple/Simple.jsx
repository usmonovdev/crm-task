import React, { useEffect } from "react";
import {
  SimpleLogin,
  SimpleMeeting,
  SimpleMissed,
  SimpleNavbar,
  SimpleRegister,
  SimpleRejected,
  SimpleSale,
  SimpleUsers,
} from "./index";
import { Route, Routes, useNavigate } from "react-router-dom";
import PageNotFound from "../PageNotFound";

const Simple = () => {
  const navigate = useNavigate()
  const isSimple = localStorage.getItem("IS_SIMPLE")
  useEffect(() => {
    if (isSimple === null || isSimple === false) {
      navigate("/login")
    } else {
      navigate("/users")
    }
  }, [])
  return (
    <div>
      <SimpleNavbar />
      <Routes>
        <Route path="login" element={<SimpleLogin />} />
        <Route path="register" element={<SimpleRegister />} />

        <Route path="users" element={<SimpleUsers />} />
        <Route path="sale" element={<SimpleSale />} />
        <Route path="meeting" element={<SimpleMeeting />} />
        <Route path="missed" element={<SimpleMissed />} />
        <Route path="rejected" element={<SimpleRejected />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Simple;
