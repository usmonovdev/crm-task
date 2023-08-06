import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleSimpleNavbar } from "../../store/theme";
import { AiOutlineCloudDownload } from "react-icons/ai"
import { exportToExel } from "../../utils/ExelExport";
import { UserReject } from "../ui-components";

const Rejected = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState(true);
  const { simpleNavbar } = useSelector((state) => state.theme);
  const { simpleUsers } = useSelector((state) => state.simpleUsers);
  const [filtered, setFiltered] = useState(simpleUsers)

  useEffect(() => {
    document.title = "CRM Task - Rejected";
    const filter = filtered.filter((f) => f.action == "Rejected")
    setFiltered(filter)
  }, []);

  return (
    <>
      <div className="container mx-auto sm:px-10 p-3 flex flex-col gap-8" data-aos="fade-down">
        <div className="flex justify-between">
          <div
            className="flex items-center gap-3 bg-neutral-800 border-neutral-700 border cursor-pointer w-fit p-2 rounded-lg"
            onClick={() => dispatch(toggleSimpleNavbar())}
          >
            <h1 className="uppercase">Reject</h1>
            <BsFillArrowRightCircleFill
              className={`text-xl transition ${
                simpleNavbar ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className="flex items-center gap-3 bg-neutral-800 border-neutral-700 border cursor-pointer w-fit p-2 rounded-lg"
            onClick={() => exportToExel("CRM Task - Sold", filtered)}
          >
            <h1 className="uppercase">Download</h1>
            <AiOutlineCloudDownload
              className={`text-xl transition`}
            />
          </div>
        </div>
        <UserReject filter={filtered} data={simpleUsers} sort={sort} setSort={setSort}/>
      </div>
    </>
  );
};

export default Rejected;
