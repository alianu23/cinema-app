"use client";
import React from "react";

import FilterSection from "./filterSection";
import EventsBanner from "./eventbanner";
import { CarouselCard, useMovie } from "@/components";
import { MovieCard } from "@/components";

type Props = {};

export const Dashboard = (props: Props) => {
  const { loading, error } = useMovie();
  return (
    <div>
      {error ? (
        <div className="flex flex-col h-screen items-center justify-center bg-slate-900">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-secondary border-t-transparent"></div>
          <h1 className="text-red-700 text-3xl text-center my-10 mt-36  ">
            {error}
          </h1>
        </div>
      ) : (
        <div>
          <CarouselCard />
          <div className="container mx-auto">
            <FilterSection />
            <MovieCard />
          </div>
          <EventsBanner />
        </div>
      )}
    </div>
  );
};
