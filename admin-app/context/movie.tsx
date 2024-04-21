"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/components/utils/axios";
import { IMovies } from "@/types/movie";
import { CinemaContext, useAuth } from ".";
import { toast } from "react-toastify";

interface IMovieContext {
  movies: IMovies[];
  addMovie: (movieData: any) => Promise<void>;
  setVertical: (e: any) => void;
  setLandOne: (e: any) => void;
  setLandTwo: (e: any) => void;
  setCast1: (e: any) => void;
  setCast2: (e: any) => void;
  setCast3: (e: any) => void;
  deleteMovie: (movieId: string) => Promise<void>;
  isLoading: boolean;
  updateMovie: (movieData: any, movieId: string) => Promise<void>;
}

export const MovieContext = createContext({} as IMovieContext);

export const MovieProvider = ({ children }: PropsWithChildren) => {
  const { cinemas } = useContext(CinemaContext);
  const [movies, setMovies] = useState([]);
  const { token } = useAuth();
  const [refresh, setRefresh] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const cinemaId = cinemas?.map((cinema: any) => cinema._id);
  const getMovies = async () => {
    try {
      const {
        data: { movies },
      } = await myAxios.get("/movie");
      setMovies(movies);
    } catch (error) {}
  };

  const [vertical, setVertical] = useState<any>(null);
  const [landOne, setLandOne] = useState<any>(null);
  const [landTwo, setLandTwo] = useState<any>(null);
  const [cast1, setCast1] = useState<any>(null);
  const [cast2, setCast2] = useState<any>(null);
  const [cast3, setCast3] = useState<any>(null);

  const addMovie = async (movieData: any) => {
    console.log("EventData = ", movieData);
    try {
      setLoading(true);
      const {
        data: { movie },
      } = await myAxios.post(
        "/movie",
        {
          title: movieData.title,
          vertical: vertical,
          land1: landOne,
          land2: landTwo,
          cast1img: cast1,
          cast2img: cast2,
          cast3img: cast3,
          movie_trailer: movieData.movie_trailer,
          duration: movieData.duration,
          releaseDate: movieData.releaseDate,
          director: movieData.director,
          genre: movieData.genre,
          synopsis: movieData.synopsis,
          cinemas: cinemaId,
          movieType: movieData.movieType,
          cast1name: movieData.cast1,
          cast2name: movieData.cast2,
          cast3name: movieData.cast3,
          adult: movieData.adult,
          child: movieData.child,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setRefresh(!refresh);
      toast.success("Movie added successfully!");
    } catch (error) {
      toast.error("Failed to add the Movie!");
    } finally {
      setLoading(false);
    }
  };

  const deleteMovie = async (movieId: string) => {
    try {
      console.log("MOVIEID ====> ", movieId);
      setLoading(true);
      await myAxios.delete(`movie/${movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRefresh(!refresh);
      toast.success("Movie deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete the Movie!");
    } finally {
      setLoading(false);
    }
  };

  const updateMovie = async (movieData: any, movieId: string) => {
    try {
      setLoading(true);
      // dataEvent.image = file;
      const {
        data: { newMovieData },
      } = await myAxios.put(`/movie/${movieId}`, movieData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRefresh(!refresh);
      toast.success("Movie updated successfully!", { autoClose: 1500 });
    } catch (error) {
      toast.error("Failed to update the movie!", { autoClose: 1500 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [refresh]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        addMovie,
        setVertical,
        setLandOne,
        setLandTwo,
        setCast1,
        setCast2,
        setCast3,
        deleteMovie,
        isLoading,
        updateMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext);
