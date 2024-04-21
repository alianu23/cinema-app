"use client";

import React, { useContext } from "react";
import { Button, CinemaContext, ShowtimeContext } from "@/components";

type Props = {
  handleForwardStep: () => void;
  cinemas: any;
};

export const CinemaSection = ({ handleForwardStep, cinemas }: Props) => {
  const { showtimesByMovie, setShowtimesByCinema } =
    useContext(ShowtimeContext);
  const { setSelectedBranch } = useContext(CinemaContext);
  const handleClick = (branchName: string) => {
    handleForwardStep();
    setShowtimesByCinema(
      showtimesByMovie.filter((showtime: any) => showtime.branch === branchName)
    );
    setSelectedBranch(branchName);
    console.log("console log on orderPage/cinema", showtimesByMovie);
  };
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 my-10 ">
        {cinemas.branches?.map((branch: any, i: any) => (
          <div className="w-40 sm:w-52 h-full rounded-lg bg-slate-800 hover:cursor-pointer hover:scale-110 transition ease-in-out" key={i}>
            <img
              src={branch.image}
              className="w-40 sm:w-52 h-56 rounded-t-lg  object-cover relative"
              onClick={() => {
                handleClick(branch.name);
              }}
            />
            <div className="mx-2 mt-2 mb-1 flex flex-col gap-2 ">
              <div className="mb-1 text-slate-50 text-xl font-bold ">
                {branch.name}
              </div>
              <div className="mb-1 text-slate-400 font-thin">
                {branch.location.address.street}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
