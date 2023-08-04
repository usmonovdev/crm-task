import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleSimpleNavbar } from "../../store/theme";

const Users = () => {
  const dispatch = useDispatch();
  const { simpleNavbar } = useSelector(state => state.theme)
  return (
    <div className="container mx-auto sm:px-10 p-3">
      <div
        className="flex items-center gap-3 bg-neutral-800 border-neutral-700 border cursor-pointer w-fit p-2 rounded-lg"
        onClick={() => dispatch(toggleSimpleNavbar())}
      >
        <h1 className="uppercase">Users</h1>
        <BsFillArrowRightCircleFill className={`text-xl transition ${simpleNavbar ? "rotate-180" : ""}`} />
      </div>
      {/* <table class="table-auto">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default Users;
