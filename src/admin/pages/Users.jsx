import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleSimpleNavbar } from "../../store/theme";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { exportToExel } from "../../utils/ExelExport";
import { Meeting, NoConnect, Rejected, Saled } from "../ui-components";
import { DataNotFound } from "../../ui"

const Users = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(true);
  const { simpleNavbar } = useSelector((state) => state.theme);
  const { personnels } = useSelector((state) => state.personnels);
  const { simpleUsers } = useSelector((state) => state.simpleUsers);

  const [filterSaled, setFilterSaled] = useState(simpleUsers);
  const [filterReject, setFilterReject] = useState(simpleUsers);
  const [filterMeet, setFilterMeet] = useState(simpleUsers);
  const [filterCn, setFilterCn] = useState(simpleUsers);
  console.log(filterReject);
  useEffect(() => {
    document.title = "CRM Task - Personnels";
    setFilterSaled(filterSaled.filter((f) => f.action == "Sold"));
    setFilterMeet(filterMeet.filter((f) => f.action == "Meeting"));
    setFilterReject(filterReject.filter((f) => f.action == "Rejected"));
    setFilterCn(filterCn.filter((f) => f.action == "Unable to connect"));
  }, []);

  return (
    <>
      <div className="container mx-auto sm:px-10 p-3 flex flex-col gap-8">
        <div className="flex justify-between">
          <div
            className="flex items-center gap-3 bg-neutral-800 border-neutral-700 border cursor-pointer w-fit p-2 rounded-lg"
            onClick={() => dispatch(toggleSimpleNavbar())}
          >
            <h1 className="uppercase">Personnels</h1>
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
          <div className="w-full p-3 min-h-[100px] bg-neutral-900 border border-neutral-700 rounded-lg">
            {personnels
              .filter((f) => f.name.toLowerCase().includes(search))
              .sort(function (a, b) {
                if (sort) {
                  return a.name.localeCompare(b.name);
                }
              })
              .map((personnel) => {
                return (
                  <div key={personnel.id} className="flex gap-3 flex-col">
                    <div className="flex md:flex-row flex-col gap-3">
                      <div className="flex gap-2 md:w-fit w-full">
                        <div
                          className="flex items-center gap-3 bg-neutral-800 border-neutral-700 border cursor-pointer w-fit p-2 rounded-lg"
                          onClick={() =>
                            exportToExel("CRM Task - Users", personnels)
                          }
                        >
                          <h1 className="uppercase">Download</h1>
                          <AiOutlineCloudDownload
                            className={`text-xl transition`}
                          />
                        </div>
                      </div>
                      <h1 className="p-3 border border-neutral-700 bg-neutral-800 md:w-fit w-full rounded-lg">
                        Name: {personnel.name}
                      </h1>
                      <h1 className="p-3 border border-green-600 bg-neutral-800 md:w-fit w-full rounded-lg">
                        Total sales:{" "}
                        {filterSaled.length > 0 ? filterSaled.length : 0}
                      </h1>
                      <h1 className="p-3 border border-red-600 bg-neutral-800 md:w-fit w-full rounded-lg">
                        Total rejects:{" "}
                        {filterReject.length > 0 ? filterReject.length : 0}
                      </h1>
                      <h1 className="p-3 border border-orange-600 bg-neutral-800 md:w-fit w-full rounded-lg">
                        Total meetings:{" "}
                        {filterMeet.length > 0 ? filterMeet.length : 0}
                      </h1>
                      <h1 className="p-3 border border-blue-600 bg-neutral-800 md:w-fit w-full rounded-lg">
                        Total unable connects:{" "}
                        {filterCn.length > 0 ? filterCn.length : 0}
                      </h1>
                    </div>
                    {/* Saled datas */}
                    {filterSaled.length < 1 ? (
                      ""
                    ) : (
                      <>
                        <div className="flex p-3 flex-col gap-3 bg-green-800/30 rounded-lg border border-green-600">
                          <h1 className="w-fit rounded-lg">
                            Total sales: {filterSaled.length}
                          </h1>
                          <Saled data={filterSaled} />
                        </div>
                      </>
                    )}
                    {/* Rejected datas */}
                    {filterReject.length < 1 ? (
                      ""
                    ) : (
                      <>
                        <div className="flex p-3 flex-col gap-3 bg-red-800/30 rounded-lg border border-red-600">
                          <h1 className="w-fit rounded-lg">
                            Total rejects: {filterReject.length}
                          </h1>
                          <Rejected data={filterReject} />
                        </div>
                      </>
                    )}
                    {/* Meeting datas */}
                    {filterMeet.length < 1 ? (
                      ""
                    ) : (
                      <>
                        <div className="flex p-3 flex-col gap-3 bg-orange-800/30 rounded-lg border border-orange-600">
                          <h1 className="w-fit rounded-lg">
                            Total meetings: {filterMeet.length}
                          </h1>
                          <Meeting data={filterMeet} />
                        </div>
                      </>
                    )}
                    {/* Unable to connections datas */}
                    {filterCn.length < 1 ? (
                      ""
                    ) : (
                      <>
                        <div className="flex p-3 flex-col gap-3 bg-blue-800/30 rounded-lg border border-blue-600">
                          <h1 className="w-fit rounded-lg">
                            Total unable connections: {filterCn.length}
                          </h1>
                          <NoConnect data={filterCn} />
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          <DataNotFound title="Personnels not found" />
        )}
      </div>
    </>
  );
};

export default Users;
