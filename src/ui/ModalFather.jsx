import React from "react";

const ModalFather = ({ children }) => {
  return (
    <div className="z-[1000] w-screen h-screen bg-neutral-950/70 absolute">
      <div className="container mx-auto sm:px-10 p-3 center-mode h-screen">
        <div className="w-full sm:w-[500px] h-fit bg-neutral-900 border border-neutral-700 rounded-lg p-[20px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalFather;
