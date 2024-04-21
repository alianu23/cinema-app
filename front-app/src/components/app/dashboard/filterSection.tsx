"use client";

import { MultiSelect, SelectCinema } from "@/components/ui/select-filter";
import React, { useContext, useRef } from "react";
import { ImLocation } from "react-icons/im";

const FilterSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center mx-auto mt-10 md:mt-24 sm:mb-20 justify-center">
      <p className="text-xs sm:text-sm lg:text-base text-[#e5e7eb] whitespace-nowrap mr-2 sm:mr-6">
        Шүүлтүүр:
      </p>
      <MultiSelect />
    </div>
  );
};

export default FilterSection;
