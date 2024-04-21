"use client";

import { Divider } from "@tremor/react";
import React from "react";
import CinemaPut from "./CinemaPut";
import CinemaDelete from "./DeleteCinema";
import { CinemaBranches } from "./cinemaBranch";
import { useCinema } from "..";

type Props = {
  cinemas: any;
};

export const CinemaCard = ({ cinemas }: Props) => {
  const { getCinemas } = useCinema();
  return (
    <div className="flex justify-center flex-wrap items-center gap-6 my-10 ">
      {cinemas?.map((cinema: any) => {
        return (
          <div className="">
            <p>{cinema.cinemaName}</p>
            <CinemaBranches cinema={cinema} cinemaId={cinema._id} />
          </div>
        );
      })}
    </div>
  );
};
