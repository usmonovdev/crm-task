import { useLocation, useNavigate } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { MdCallMissed } from "react-icons/md"
import { BiErrorCircle } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux";
import { toggleSimpleNavbar } from "../store/theme";

const routes = [
  {
    id: 1,
    name: "Users",
    link: "/users",
    icon: FiUsers,
  },
  {
    id: 2,
    name: "Sale",
    link: "/sale",
    icon: RiMoneyDollarCircleLine,
  },
  {
    id: 3,
    name: "Meeting",
    link: "/meeting",
    icon: LiaBusinessTimeSolid,
  },
  {
    id: 4,
    name: "Missed Calls",
    link: "/missed",
    icon: MdCallMissed,
  },
  {
    id: 5,
    name: "Rejected",
    link: "/rejected",
    icon: BiErrorCircle,
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
        <div className="w-screen absolute bg-neutral-950/70 z-[1000]">
          <ul className="w-[70px] h-[100vh] bg-orange-600">
            {routes.map((route) => {
              return (
                <li
                  key={route.id}
                  className={`w-full h-[90px] cursor-pointer p-2 flex flex-col items-center justify-center transition hover:bg-orange-700 transition ${
                    pathname === route.link && "bg-orange-700"
                  }`}
                  onClick={() => {
                    dispatch(toggleSimpleNavbar())
                    navigate(route.link);
                  }}
                >
                  <route.icon className="text-2xl" />
                  <p className="text-center">{route.name}</p>
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
