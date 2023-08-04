import React, { Fragment, useState } from "react";
import { ModalFather } from "../ui";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { Listbox, Transition } from "@headlessui/react";
import { MdCallMissed } from "react-icons/md";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsChevronExpand, BsCheck } from "react-icons/bs";

const people = [
  {
    id: 1,
    name: "Start",
    icon: AiOutlineAppstoreAdd,
  },
  {
    id: 2,
    name: "Sold",
    icon: RiMoneyDollarCircleLine,
  },
  {
    id: 3,
    name: "Meeting",
    icon: LiaBusinessTimeSolid,
  },
  {
    id: 4,
    name: "Unable to connect",
    icon: MdCallMissed,
  },
  {
    id: 5,
    name: "Rejected",
    icon: BiErrorCircle,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AddUser = ({ open, setOpen }) => {
  const [fullName, setFullName] = useState("");
  const [selected, setSelected] = useState(people[0]);
  const [phone, setPhone] = useState("");
  return (
    <div
      className={`${
        open ? "visible opactiy-1" : "invisible opactiy-0"
      } transition`}
    >
      <ModalFather>
        <div className="w-full h-full flex flex-col gap-[15px] relative">
          <div className="flex flex-col gap-[15px]">
            <h1 className="text-center text-2xl uppercase bold text-neutral-100">
              Add User
            </h1>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="input"
              placeholder="Full Name"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input"
              placeholder="Phone"
            />
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <div className="relative">
                    <Listbox.Button className="relative w-full h-[60px] cursor-default rounded-md bg-neutral-800 text-left border border-neutral-700 sm:text-sm cursor-pointer">
                      <span className="flex items-center gap-3">
                        <span className="ml-3 block truncate">
                          {selected.name}
                        </span>
                        <selected.icon className="text-xl" />
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <BsChevronExpand
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-neutral-800 py-1 text-base sm:text-sm">
                        {people.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active ? "bg-neutral-700" : "",
                                "relative cursor-pointer select-none py-2 pl-3 pr-9"
                              )
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center gap-3">
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {person.name}
                                  </span>
                                  <person.icon className="text-xl text-neutral-400" />
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active
                                        ? "text-neutral-100"
                                        : "text-neutral-100",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <BsCheck
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
          <div className="w-full flex gap-4 relative bottom-0 justify-end absolute bottom-0">
            <button
              className="w-[96px] h-[42px] rounded-lg bg-neutral-800 border-neutral-700 border transition"
              onClick={() => setOpen(false)}
            >
              Cencel
            </button>
            <button className="w-[96px] h-[42px] rounded-lg bg-orange-600 hover:bg-orange-700 transition">
              Save
            </button>
          </div>
        </div>
      </ModalFather>
    </div>
  );
};

export default AddUser;