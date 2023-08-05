import React, { useState } from "react";
import { ModalFather } from "../../ui";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonnel } from "../../store/personnels";

const DeadlineModal = ({ open, setOpen, data }) => {
  const { personnels } = useSelector((state) => state.personnels);
  const [deadline, setDeadline] = useState("");
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  console.log(data);

  const handleAddUser = () => {
    const addDedline = personnels.map((data) =>
      data.id === data.id
        ? {
            ...data,
            name: data.name,
            logged_time: data.logged_time,
            id: data.id,
            deadline,
          }
        : data
    );
    if (deadline.length > 0) {
      dispatch(updatePersonnel([...addDedline]))
      setIsError(false)
      setOpen(false)
    } else {
      setIsError(true)
    }
  };

  return (
    <div
      className={`${
        open ? "visible opactiy-1" : "invisible opactiy-0"
      } transition z-[1000]`}
    >
      <ModalFather>
        <div className="w-full h-full flex flex-col gap-[15px] relative">
          <div className="flex flex-col gap-[15px]">
            <h1 className="text-center text-2xl uppercase bold text-neutral-100">
              Add Deadline
            </h1>
            <input
              type="text"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="input"
              placeholder="Deadline count"
            />
          </div>
          {isError ? (
            <p className="text-center text-red-600">Something went wrong!</p>
          ) : (
            ""
          )}
          <div className="w-full flex gap-4 relative bottom-0 justify-end absolute bottom-0">
            <button
              className="w-[96px] h-[42px] rounded-lg bg-neutral-800 border-neutral-700 border transition"
              onClick={() => setOpen(false)}
            >
              Cencel
            </button>
            <button
              className="w-[96px] h-[42px] rounded-lg bg-orange-600 hover:bg-orange-700 transition"
              onClick={handleAddUser}
            >
              Save
            </button>
          </div>
        </div>
      </ModalFather>
    </div>
  );
};

export default DeadlineModal;
