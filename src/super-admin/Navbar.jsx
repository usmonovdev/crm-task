import { useLocation, useNavigate } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleSimpleNavbar } from "../store/theme";

const routes = [
  {
    id: 1,
    name: "Personnel",
    link: "/super-page/users",
    icon: FiUsers,
  },
  {
    id: 2,
    name: "Admins",
    link: "/super-page/admins",
    icon: RiAdminLine,
  }
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
