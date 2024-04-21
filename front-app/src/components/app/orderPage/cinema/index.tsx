"use client";

import React from "react";
import { CinemaButton } from "./cinemaButton";

type Props = {
  handleForwardStep: () => void;
  cinemas: any;
};

export const CinemaCard = ({ handleForwardStep, cinemas }: Props) => {
  return (
    <div className="w-full">
      <div className="flex justify-center font-bold text-xl sm:text-2xl text-slate-50 mt-12 md:mt-20 md:text-3xl">
        Кино театр болон салбар сонголт
      </div>
      <div>
        <CinemaButton handleForwardStep={handleForwardStep} cinemas={cinemas} />
      </div>
    </div>
  );
};
