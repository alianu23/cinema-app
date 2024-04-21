"use client";
import React, { useContext, useState } from "react";

import { CardSection } from "./cardSection";
import { ComingsoonContext } from "@/components/contexts";

type Props = {};

export const ComingSoon = (props: Props) => {
  const [pageCount, setPageCount] = useState(6);
  const { coMovies } = useContext(ComingsoonContext);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="pb-16 container">
        <h1 className="flex font-bold text-xl mb-6 md:mx-16 lg:mx-4 md:text-3xl xl:mx-48 text-white mt-20 sm:mt-28 lg:mt-32">
          Тун удахгүй гарах кинонууд
        </h1>
        <CardSection pageCount={pageCount} />
      </div>
      {pageCount < coMovies.length && (
        <div className="mb-24 p-3 rounded-md text-white bg-red-500 hover:bg-slate-800 duration-75">
          <button
            color="white"
            onClick={() => {
              setPageCount(pageCount + 6);
            }}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};
