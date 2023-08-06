import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleSimpleNavbar } from "../../store/theme";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { exportToExel } from "../../utils/ExelExport";
import { BiSolidArrowToTop } from "react-icons/bi";
import { DataNotFound } from "../../ui";
import { SuperEditModal } from "../index";
import { upSimpleUsers } from "../../store/simple-users";
import moment from "moment";
import { updateAdmin } from "../../store/admins";

const Admin = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState(true);
  const [editOpen, setEditOpen] = useState(false);
  const { simpleNavbar } = useSelector((state) => state.theme);
  const { admins } = useSelector((state) => state.admins);
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = "CRM Task - Admins";
  }, []);

  const handleDelete = (e) => {
    const deleteAdmin = admins.filter((f) => f.id !== e);
    dispatch(updateAdmin([...deleteAdmin]));
    dispatch(upSimpleUsers([]));
  };

  return (
    <>
      <SuperEditModal open={editOpen} setOpen={setEditOpen} user={data} />
      <div className="container mx-auto sm:px-10 p-3 flex flex-col gap-8">
        <div className="flex justify-between">
          <div
            className="flex items-center gap-3 bg-neutral-800 border-neutral-700 border cursor-pointer w-fit p-2 rounded-lg"
            onClick={() => dispatch(toggleSimpleNavbar())}
          >
            <h1 className="uppercase">Sale</h1>
            <BsFillArrowRightCircleFill
              className={`text-xl transition ${
                simpleNavbar ? "rotate-180" : ""
              }`}
            />
          </div>
          {!admins.length == 0 ? (
            <div
              className="flex items-center gap-3 bg-neutral-800 border-neutral-700 border cursor-pointer w-fit p-2 rounded-lg"
              onClick={() => exportToExel("CRM Task - Admins", admins)}
            >
              <h1 className="uppercase">Download</h1>
              <AiOutlineCloudDownload className={`text-xl transition`} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-3">
          {!admins?.length == 0 ? (
            <>
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
                      <th className="text-left p-3">Logged Time</th>
                      <th className="text-left p-3">Help</th>
                    </tr>
                  </thead>
                  <tbody className="cursor-pointer">
                    {admins
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
                              {moment(users.logged_time).format("lll")}
                            </td>
                            <td className="p-3 border border-neutral-700">
                              <div className="flex flex-row gap-3 justify-center">
                                <button
                                  className="w-[96px] h-[42px] rounded-lg border border-orange-600 transition"
                                  onClick={() => {
                                    setEditOpen(true);
                                    setData(users);
                                  }}
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
            </>
          ) : (
            <DataNotFound title="Admins not found!" />
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
