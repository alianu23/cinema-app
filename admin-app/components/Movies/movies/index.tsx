"use client";
import { useContext } from "react";
import Breadcrumb from "../../Breadcrumbs/Breadcrumb";
import { MovieCard } from "./movie-card";
import { MovieContext } from "../../../context/movie";
import { MovieDialog } from "./add-dialog/movie-dialog";

export const Movies = () => {
  const { movies } = useContext(MovieContext);
  return (
    <>
      <Breadcrumb pageName="Кинонууд" />
      <MovieDialog />
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie: any) => (
            <MovieCard movie={movie} key={movie._id} />
          ))}
        </div>
      </div>
    </>
  );
};
