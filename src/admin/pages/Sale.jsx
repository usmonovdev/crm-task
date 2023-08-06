import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleSimpleNavbar } from "../../store/theme";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { exportToExel } from "../../utils/ExelExport";
import { TodaySaled } from "../ui-components";

const Sale = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState(true);
  const { simpleNavbar } = useSelector((state) => state.theme);
  const { simpleUsers } = useSelector((state) => state.simpleUsers);
  const [filtered, setFiltered] = useState(simpleUsers);

  useEffect(() => {
    document.title = "CRM Task - Sold";
    const filter = filtered.filter((f) => f.action == "Sold");
    setFiltered(filter);
  }, []);

  return (
    <>
      <div
        className="container mx-auto sm:px-10 p-3 flex flex-col gap-8"
        data-aos="fade-down"
      >
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
          {!filtered.length == 0 ? (
            <div
              className="flex items-center gap-3 bg-neutral-800 border-neutral-700 border cursor-pointer w-fit p-2 rounded-lg"
              onClick={() => exportToExel("CRM Task - Sold", filtered)}
            >
              <h1 className="uppercase">Download</h1>
              <AiOutlineCloudDownload className={`text-xl transition`} />
            </div>
          ) : (
            ""
          )}
        </div>
        <TodaySaled
          filter={filtered}
          data={simpleUsers}
          sort={sort}
          setSort={setSort}
        />
      </div>
    </>
  );
};

export default Sale;
