import React from "react";
import { FaUserAstronaut } from "react-icons/fa"

const DataNotFound = ({ title = "Not Found" }) => {
  return (
    <>
      <div className="w-full h-[500px] center-mode gap-2 flex-col">
        <FaUserAstronaut className="text-7xl text-neutral-700" />
        <h1 className="text-3xl text-center uppercase">{title}</h1>
      </div>
    </>
  );
};

export default DataNotFound;
