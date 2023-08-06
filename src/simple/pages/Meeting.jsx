import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleSimpleNavbar } from "../../store/theme";
import { SimpleAddUser } from "../index";
import { BiSolidArrowToTop } from "react-icons/bi";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { upSimpleUsers } from "../../store/simple-users";
import { exportToExel } from "../../utils/ExelExport";
import { DataNotFound } from "../../ui";
import moment from "moment";

const Meeting = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [sort, setSort] = useState(true);
  const { simpleNavbar } = useSelector((state) => state.theme);
  const { simpleUsers } = useSelector((state) => state.simpleUsers);
  const [filtered, setFiltered] = useState(simpleUsers);

  useEffect(() => {
    document.title = "CRM Task - Meetings";
    const filter = filtered.filter((f) => f.action == "Meeting");
    setFiltered(filter);
  }, []);

  const handleDelete = (e) => {
    const filter = simpleUsers.filter((f) => f.id !== e);
    dispatch(upSimpleUsers([...filter]));
  };

  return (
    <>
      <SimpleAddUser open={open} setOpen={setOpen} />
      <div className="container mx-auto sm:px-10 p-3 flex flex-col gap-8" data-aos="fade-down">
        <div className="flex justify-between">
          <div
            className="flex items-center gap-3 bg-neutral-800 border-neutral-700 border cursor-pointer w-fit p-2 rounded-lg"
            onClick={() => dispatch(toggleSimpleNavbar())}
          >
            <h1 className="uppercase">Meeting</h1>
            <BsFillArrowRightCircleFill
              className={`text-xl transition ${
                simpleNavbar ? "rotate-180" : ""
              }`}
            />
          </div>
          {!simpleUsers.length == 0 ? (
            <div
              className="flex items-center gap-3 bg-neutral-800 border-neutral-700 border cursor-pointer w-fit p-2 rounded-lg"
              onClick={() => exportToExel("CRM Task - Meeting", filtered)}
            >
              <h1 className="uppercase">Download</h1>
              <AiOutlineCloudDownload className={`text-xl transition`} />
            </div>
          ) : (
            ""
          )}
        </div>
        {simpleUsers.length ? (
          <div className="overflow-x-auto pb-4">
            <table className="w-full min-w-[900px]">
              <thead className="h-[50px] w-full border border border-neutral-700 bg-neutral-800 rounded-lg">
                <tr className="rounded-lg">
                  <th className="text-left p-3">
                    <p>Full Name</p>
                  </th>
                  <th className="text-left p-3">Phone</th>
                  <th className="text-left p-3">Location</th>
                  <th className="text-left p-3">
                    <div className="flex items-center gap-1">
                      <p>Added Time</p>
                      <BiSolidArrowToTop
                        className={`cursor-pointer transition z-[999] ${
                          sort ? "rotate-180" : ""
                        }`}
                        onClick={() => setSort(!sort)}
                      />
                    </div>
                  </th>
                  <th className="text-left p-3">Help</th>
                </tr>
              </thead>
              <tbody className="cursor-pointer">
                {simpleUsers
                  .filter((f) => f.action == "Meeting")
                  .sort(function (a, b) {
                    if (sort) {
                      return new Date(b.date) - new Date(a.date);
                    }
                  })
                  .map((users) => {
                    return (
                      <tr className="hover:bg-neutral-800" key={users.id}>
                        <td className="p-3 border border-neutral-700">
                          {users.name}
                        </td>
                        <td className="p-3 border border-neutral-700">
                          <a href={`tel:${users.phone}`}>{users.phone}</a>
                        </td>
                        <td className="p-3 border border-neutral-700">
                          {users.location}
                        </td>
                        <td className="p-3 border border-neutral-700">
                          {moment(users.date).format("lll")}
                        </td>
                        <td className="p-3 border border-neutral-700">
                          <div className="flex flex-row gap-3 justify-center">
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
          <DataNotFound title="Meetings not found" />
        )}
      </div>
    </>
  );
};

export default Meeting;
