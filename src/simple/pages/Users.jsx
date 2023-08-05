import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleSimpleNavbar } from "../../store/theme";
import { SimpleAddUser, SimpleUserOpen } from "../index";
import { BiSolidArrowToTop } from "react-icons/bi";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { upSimpleUsers } from "../../store/simple-users";
import { exportToExel } from "../../utils/ExelExport";
import { DataNotFound } from "../../ui";
import moment from "moment";

const Users = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(true);
  const [dataOpen, setDataOpen] = useState(false);
  const [id, setId] = useState("");
  const { simpleNavbar } = useSelector((state) => state.theme);
  const { simpleUsers } = useSelector((state) => state.simpleUsers);
  const { personnels } = useSelector((state) => state.personnels);
  console.log(personnels[0].deadline);

  useEffect(() => {
    document.title = "CRM Task - Users";
  }, []);

  const handleDelete = (e) => {
    const filter = simpleUsers.filter((f) => f.id !== e);
    dispatch(upSimpleUsers([...filter]));
  };

  return (
    <>
      <SimpleAddUser open={open} setOpen={setOpen} />
      <SimpleUserOpen open={dataOpen} setOpen={setDataOpen} userId={id} />
      <div className="container mx-auto sm:px-10 p-3 flex flex-col gap-8">
        <div className="flex justify-between gap-3">
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
          <div className="flex gap-2">
            <div
              className="flex items-center gap-3 bg-neutral-800 border-neutral-700 border cursor-pointer w-fit p-2 rounded-lg"
              onClick={() => exportToExel("CRM Task - Users", simpleUsers)}
            >
              <h1 className="uppercase">Download</h1>
              <AiOutlineCloudDownload className={`text-xl transition`} />
            </div>
            <button
              className="w-[96px] h-[42px] rounded-lg bg-orange-600 hover:bg-orange-700 transition"
              onClick={() => setOpen(true)}
            >
              Add User
            </button>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-3 w-full">
          <input
            className="input sm:w-[300px] w-full"
            placeholder="Search by name"
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            disabled={simpleUsers.length < 1}
          />
          <div
            className="flex items-center gap-3 bg-neutral-800 sm:w-fit w-full px-2 border-neutral-700 border cursor-pointer py-2 rounded-lg"
          >
            <h1 className="uppercase">Deadline: {personnels[0].deadline}</h1>
          </div>
        </div>
        {simpleUsers.length ? (
          <div className="overflow-x-auto pb-4">
            <table className="w-full min-w-[900px]">
              <thead className="h-[50px] w-full border border border-neutral-700 bg-neutral-800 rounded-lg">
                <tr className="rounded-lg">
                  <th className="text-left p-3">
                    <div className="flex items-center gap-1">
                      <p>Full Name</p>
                      <BiSolidArrowToTop
                        className={`cursor-pointer transition z-[999] ${
                          sort ? "rotate-180" : ""
                        }`}
                        onClick={() => setSort(!sort)}
                      />
                    </div>
                  </th>
                  <th className="text-left p-3">Phone</th>
                  <th className="text-left p-3">Added Time</th>
                  <th className="text-left p-3">Action</th>
                  <th className="text-left p-3">Help</th>
                </tr>
              </thead>
              <tbody className="cursor-pointer">
                {simpleUsers
                  .filter((f) => f.name.toLowerCase().includes(search))
                  .sort(function (a, b) {
                    if (sort) {
                      return a.name.localeCompare(b.name);
                    }
                  })
                  .map((users) => {
                    return (
                      <tr
                        className="hover:bg-neutral-800"
                        key={users.id}
                        onClick={() => setId(users)}
                      >
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
                        <td className="p-3 border border-neutral-700">
                          <div className="flex flex-row gap-3 justify-center">
                            <button
                              className="w-[96px] h-[42px] rounded-lg border border-orange-600 transition"
                              onClick={() => setDataOpen(!dataOpen)}
                            >
                              Edit User
                            </button>
                            <button
                              className="w-[96px] h-[42px] rounded-lg bg-red-600 hover:bg-red-700 transition"
                              onClick={() => handleDelete(users.id)}
                            >
                              Delete User
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        ) : (
          <DataNotFound />
        )}
      </div>
    </>
  );
};

export default Users;
