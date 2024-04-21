import React from "react";
import CinemaPut from "./CinemaPut";
import CinemaDelete from "./DeleteCinema";

type Props = {};

export const CinemaBranches = ({ cinema, cinemaId }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {cinema?.branches.map((branch: any, i: any) => (
        <div className="w-64 h-full rounded-lg   bg-slate-800 " key={i}>
          <img
            alt=""
            src={branch.image}
            className="w-64 h-96 rounded-t-lg  object-cover relative"
          />
          <div className="mx-5 my-2 flex flex-col gap-2 ">
            <div className="mb-1 text-slate-50 text-lg ">{branch.name}</div>
            <div className="mb-1 text-slate-300">
              {branch.location.address.street}
            </div>
          </div>
          <div className="flex gap-3 m-4">
            {/* <CinemaPut branch={branch._id} cinema={cinema} /> */}
            <CinemaDelete branch={branch} cinema={cinema} />
          </div>
        </div>
      ))}
    </div>
  );
};
