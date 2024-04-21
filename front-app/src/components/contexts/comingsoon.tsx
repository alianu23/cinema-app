"use client";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/components/utils/axios";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

interface IMovies {
  _id: string;
  title: string;
  poster: {
    lands: {
      land1: string;
      land2: string;
    };
    vertical: string;
  };
  movie_trailer: string;
  duration: number;
  releaseDate: Date;
  director: string;
  genre: string;
  synopsis: string;
  movieType: string;
  cast: [
    {
      name: string;
      img: string;
    }
  ];
}

interface IComingsoonContext {
  coMovies: IMovies[];
  loading: boolean;
}

export const ComingsoonContext = createContext({} as IComingsoonContext);

export const ComingsoonProvider = ({ children }: PropsWithChildren) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [coMovies, setCoMovies] = useState([]);

  const getMovies = async () => {
    try {
      const {
        data: { movies },
      } = await myAxios.get("/comingsoon");
      // console.log("comingsoon ===> ", movies);
      setCoMovies(movies);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `There was a problem with your request. ${error} `,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ComingsoonContext.Provider
      value={{
        coMovies,
        loading,
      }}
    >
      {children}
    </ComingsoonContext.Provider>
  );
};
