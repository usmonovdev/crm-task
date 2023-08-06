import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    id: 1,
    route: "/login",
    name: "Simple Personnels",
  },
  {
    id: 2,
    route: "/admin-dashboard/login",
    name: "Admin Dashboard",
  },
  {
    id: 3,
    route: "/super-admin/login",
    name: "Super Admin Dashboard",
  },
];

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("SIMPLE_PASSWORD", "password");
    localStorage.setItem("ADMIN_PASSWORD", "admin_password")
    localStorage.setItem("SUPER_PASSWORD", "super_password")
    localStorage.setItem("IS_SIMPLE", false)
    localStorage.setItem("IS_ADMIN", false)
    localStorage.setItem("IS_SUPER", false)
    document.title = "CRM Task - Home";
  }, []);
  return (
    <div className="w-screen h-screen center-mode" data-aos="zoom-in">
      <div className="sm:w-[300px] w-full sm:px-0 px-3">
        <ul className="w-full flex flex-col gap-3">
          {pages.map((page) => {
            return (
              <li
                onClick={() => navigate(page.route)}
                className="w-full h-[60px] border border-neutral-700 text-xl hover:bg-neutral-700/10 transition center-mode cursor-pointer bg-neutral-800 rounded-lg"
              >
                {page.name}
              </li>
            );
          })}
        </ul>
        <h1 className="mt-3 w-full h-[60px] border border-neutral-700 text-xl hover:bg-neutral-700/10 transition center-mode cursor-pointer bg-neutral-800 rounded-lg">
          <a target="_blank" href="https://github.com/usmonovdev/crm-task">Passwords & Documentation</a>
        </h1>
      </div>
    </div>
  );
};

export default Home;
