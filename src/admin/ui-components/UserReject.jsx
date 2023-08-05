import React from "react";
import { DataNotFound } from "../../ui";
import moment from "moment";
import { BiSolidArrowToTop } from "react-icons/bi";

const UserReject = ({ data, filter, sort, setSort }) => {
  return (
    <div className="flex flex-col gap-3">
      {filter.length ? (
        <>
          <h1>Today Rejects: {filter.length}</h1>
          <div className="overflow-x-auto pb-4">
            <table className="w-full min-w-[900px]">
              <thead className="h-[50px] w-full border border border-neutral-700 bg-neutral-800 rounded-lg">
                <tr className="rounded-lg">
                  <th className="text-left p-3">
                    <p>Full Name</p>
                  </th>
                  <th className="text-left p-3">Phone</th>
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
                  <th className="text-left p-3">Reason</th>
                </tr>
              </thead>
              <tbody className="cursor-pointer">
                {data
                  .filter((f) => f.action == "Rejected")
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
                          {moment(users.date).format("lll")}
                        </td>
                        <td className="p-3 border border-neutral-700">
                          {users.rejected}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <DataNotFound title="Sales not found!" />
      )}
    </div>
  );
};

export default UserReject;
