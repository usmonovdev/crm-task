import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleSimpleNavbar } from "../../store/theme";
import { BiSolidArrowToTop } from "react-icons/bi";
import { DataNotFound } from "../../ui";
import { DeadlineModal } from "../ui-components";
import moment from "moment";

const Deadline = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(true);
  const [addDedline, setAddDeadline] = useState(false)
  const [data, setData] = useState(false)
  const { simpleNavbar } = useSelector((state) => state.theme);
  const { personnels } = useSelector((state) => state.personnels);
  const { simpleUsers } = useSelector((state) => state.simpleUsers)
  console.log(personnels);

  useEffect(() => {
    document.title = "CRM Task - Deadline";
  }, []);

  return (
    <>
    <DeadlineModal open={addDedline} setOpen={setAddDeadline} data={data} />
      <div className="container mx-auto sm:px-10 p-3 flex flex-col gap-8">
        <div className="flex justify-between">
          <div
            className="flex items-center gap-3 bg-neutral-800 border-neutral-700 border cursor-pointer w-fit p-2 rounded-lg"
            onClick={() => dispatch(toggleSimpleNavbar())}
          >
            <h1 className="uppercase">Deadline</h1>
            <BsFillArrowRightCircleFill
              className={`text-xl transition ${
                simpleNavbar ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
        <input
          className="input sm:w-[300px] w-full"
          placeholder="Search by name"
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          disabled={personnels.length < 1}
        />
        {personnels.length ? (
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
                  <th className="text-left p-3">Users</th>
                  <th className="text-left p-3">Dedeline</th>
                  <th className="text-left p-3">Help</th>
                </tr>
              </thead>
              <tbody className="cursor-pointer">
                {personnels
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
                      >
                        <td className="p-3 border border-neutral-700">
                          {users.name}
                        </td>
                        <td className="p-3 border border-neutral-700">
                          {moment(users.date).format("lll")}
                        </td>
                        <td className="p-3 border border-neutral-700">
                          {simpleUsers.length}
                        </td>
                        <td className="p-3 border border-neutral-700">
                          {users.deadline}
                        </td>
                        <td className="p-3 border border-neutral-700">
                          <div className="flex flex-row gap-3 justify-center">
                            <button
                              className="w-fit px-2 h-[42px] rounded-lg bg-red-600 hover:bg-red-700 transition"
                              onClick={() => {
                                setAddDeadline(true)
                                setData(users)
                              }}
                            >
                              Add Deadline
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
          <DataNotFound title="Personnels not found" />
        )}
      </div>
    </>
  );
};

export default Deadline;
