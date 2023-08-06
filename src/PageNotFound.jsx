import React, { useEffect } from "react";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page not found!"
  }, [])
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center" data-aos="zoom-in">
      <h1 className="text-[30px] text-gray-300">404</h1>
      <h1 className="text-[16px] text-gray-600">Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
