import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSimpleNavbar } from "../../store/theme";
import { SimpleAddUser } from "../index";
import moment from "moment";

const Users = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { simpleNavbar } = useSelector((state) => state.theme);
  const { simpleUsers } = useSelector((state) => state.simpleUsers);

  return (
    <>
      <SimpleAddUser open={open} setOpen={setOpen} />
      <div className="container mx-auto sm:px-10 p-3 flex flex-col gap-8">
        <div className="flex justify-between">
          <div
            className="flex items-center gap-3 bg-neutral-800 border-neutral-700 border cursor-pointer w-fit p-2 rounded-lg"
            onClick={() => dispatch(toggleSimpleNavbar())}
          >
            <h1 className="uppercase">Users</h1>
            <BsFillArrowRightCircleFill
              className={`text-xl transition ${
                simpleNavbar ? "rotate-180" : ""
              }`}
            />
          </div>
          <button
            className="w-[96px] h-[42px] rounded-lg bg-orange-600 hover:bg-orange-700 transition"
            onClick={() => setOpen(true)}
          >
            Add User
          </button>
        </div>
        <input
          className="input w-[300px]"
          placeholder="Search"
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          disabled={simpleUsers.length < 1}
        />
        {simpleUsers.length ? (
          <>
            <table className="w-full">
              <thead className="h-[50px] w-full border border border-neutral-700 bg-neutral-800 rounded-lg">
                <tr className="rounded-lg">
                  <th className="text-left p-3">Full Name</th>
                  <th className="text-left p-3">Phone</th>
                  <th className="text-left p-3">Added Time</th>
                  <th className="text-left p-3">Action</th>
                </tr>
              </thead>
              <tbody className="cursor-pointer">
                {simpleUsers.filter((f) => f.name.toLowerCase().includes(search)).map((users) => {
                  return (
                    <tr className="hover:bg-neutral-800">
                      <td className="p-3 border border-neutral-700">
                        {users.name}
                      </td>
                      <td className="p-3 border border-neutral-700">
                        <a href={`tel:${users.phone}`}>{users.phone}</a>
                      </td>
                      <td className="p-3 border border-neutral-700">
                        {moment(users.date).format("lll")}
                      </td>
                      <td className="p-3 border border-neutral-700">
                        {users.action}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          <div className="w-full h-[500px] center-mode gap-2 flex-col">
            <FaUserAstronaut className="text-7xl text-neutral-700" />
            <h1 className="text-3xl text-center uppercase">USERS Not found!</h1>
            <button className="w-[96px] h-[42px] rounded-lg bg-orange-600 hover:bg-orange-700 transition">
              Add User
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Users;
