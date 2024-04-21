import { type } from "os";
import { Dispatch, SetStateAction } from "react";

export interface ICinemaContext {
  getCinema: () => Promise<void>;
  cinemas: ICinema[];
  addCinema: (params: Cinema) => Promise<void>;
  setSelectedCinema: (id: any) => void;
  setSelectedBranch: (name: string) => void;
  deleteCinema: (branch: string) => Promise<void>;
  putCinema: (formData: any, branch: string, cinema: any) => Promise<void>;
  selectedCinema: string;
  selectedBranch: string;
  cinemaImg: string;
  loading: boolean;
  getCinemas: Cinema[];
  setGetCinemas: Dispatch<SetStateAction<Cinema[]>>;
  setCinemaImg: (url: string) => void;
}

interface IBranch {
  name: string;
  location: {
    address: {
      street: string;
      city: string;
      zipCode: number;
    };
  };
  opening: string;
  closing: string;
  image: string;
}

interface ICinema {
  location: {
    address: {
      street: string;
      city: string;
      zipCode: number;
    };
  };
  _id: string;
  cinemaName: string;
  icon: string;
  opening: string;
  closing: string;
  image: string;
  branches: IBranch[];
}

export type Cinema = {
  cinemaName: string;
};
