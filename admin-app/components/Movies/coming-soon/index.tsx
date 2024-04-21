"use client";
import React, { useContext } from "react";
import Breadcrumb from "../../Breadcrumbs/Breadcrumb";
import { useComingSoon } from "@/context";
import { MovieCard } from "./movie-card";
import { ComingsoonDialog } from "./add-dialog/comingsoon-dialog.tsx";

type Props = {};

export const ComingSoon = (props: Props) => {
  const { coMovies } = useComingSoon();
  return (
    <>
      <Breadcrumb pageName="Тун удахгүй дэлгэцнээ" />

      <ComingsoonDialog />
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {coMovies.map((movie: any) => (
            <MovieCard movie={movie} key={movie._id} />
          ))}
        </div>
      </div>
    </>
  );
};
