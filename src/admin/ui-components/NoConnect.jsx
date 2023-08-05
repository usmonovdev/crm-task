import React from 'react'

const NoConnect = ({ data }) => {
  return (
    <div className="flex flex-col gap-3 rounded-lg">
      {data.map((sold, i) => {
        return (
          <div className="flex md:flex-row flex-col gap-3">
            <h1 className="p-3 hover:bg-blue-600/60 transition cursor-pointer border md:w-fit w-full rounded-lg border-neutral-700">
              Unable connections: {i + 1}
            </h1>
            <h1 className="p-3 hover:bg-blue-600/60 transition cursor-pointer border md:w-fit w-full rounded-lg border-neutral-700">
              Name: <span className="font-medium">{sold.name}</span>
            </h1>
            <h1 className="p-3 hover:bg-blue-600/60 transition cursor-pointer border md:w-fit w-full rounded-lg border-neutral-700">
              Phone: <span className="font-medium">{sold.phone}</span>
            </h1>
          </div>
        );
      })}
    </div>
  )
}

export default NoConnect