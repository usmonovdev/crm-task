import { useLocation, useNavigate } from "react-router-dom";
import { GoAlertFill } from "react-icons/go";
import { RiUserSmileFill } from "react-icons/ri";
import { FaBusinessTime } from "react-icons/fa";
import { BiSolidPhoneOff, BiSolidDollarCircle } from "react-icons/bi";
import { IoMdClose } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux";
import { toggleSimpleNavbar } from "../store/theme";

const routes = [
  {
    id: 1,
    name: "Users",
    link: "/users",
    icon: RiUserSmileFill,
  },
  {
    id: 2,
    name: "Sale",
    link: "/sale",
    icon: BiSolidDollarCircle,
  },
  {
    id: 3,
    name: "Meeting",
    link: "/meeting",
    icon: FaBusinessTime,
  },
  {
    id: 4,
    name: "Missed Calls",
    link: "/missed",
    icon: BiSolidPhoneOff,
  },
  {
    id: 5,
    name: "Rejected",
    link: "/rejected",
    icon: GoAlertFill,
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { simpleNavbar } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <>
      {simpleNavbar ? (
        <div className="w-screen absolute bg-neutral-950/70 z-[1000]">
          <div className="absolute right-0 w-[80px] h-[80px] text-neutral-100 center-mode">
            <IoMdClose className="text-neutral-100 text-3xl cursor-pointer" onClick={() => dispatch(toggleSimpleNavbar())} />
          </div>
          <ul className="w-[160px] h-[100vh] bg-orange-600">
            {routes.map((route) => {
              return (
                <li
                  key={route.id}
                  className={`w-full h-[60px] cursor-pointer py-2 px-3 flex flex-row items-center justify-start gap-3 transition hover:bg-orange-700 transition ${
                    pathname === route.link && "bg-orange-700"
                  }`}
                  onClick={() => {
                    dispatch(toggleSimpleNavbar());
                    navigate(route.link);
                  }}
                >
                  <div className="w-[25px] h-[25px] center-mode">
                    <route.icon className="text-3xl" />
                  </div>
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
