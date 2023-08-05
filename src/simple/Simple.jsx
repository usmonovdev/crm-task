import React from "react";
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
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../PageNotFound";

const Simple = () => {
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
