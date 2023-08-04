import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { toggleSimpleNavbar } from "../store/theme";

const routes = [
  {
    id: 1,
    name: "Users",
    link: "/dashboard/users",
    icon: FiUsers,
  },
  {
    id: 2,
    name: "Sale",
    link: "/dashboard/sale",
    icon: RiMoneyDollarCircleLine,
  },
  {
    id: 3,
    name: "Meeting",
    link: "/dashboard/meeting",
    icon: LiaBusinessTimeSolid,
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { simpleNavbar } = useSelector(state => state.theme)
  const dispatch = useDispatch()
  return (
    <>
      {simpleNavbar ? (
        <div>
          <ul className="w-[70px] h-[100vh] bg-orange-600 absolute">
            {routes.map((route) => {
              return (
                <li
                  key={route.id}
                  className={`w-full h-[90px] cursor-pointer p-2 flex flex-col items-center justify-center transition ${
                    pathname === route.link && "bg-orange-700"
                  }`}
                  onClick={() => {
                    dispatch(toggleSimpleNavbar())
                    navigate(route.link);
                  }}
                >
                  <route.icon className="text-2xl" />
                  <p>{route.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
