"use client";

import myAxios from "@/components/utils/axios";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { ToastAction } from "@radix-ui/react-toast";

interface ICinemaContext {
  getCinema: () => Promise<void>;
  cinemas: ICinema[];
  setSelectedCinema: (id: any) => void;
  setSelectedBranch: (name: string) => void;
  selectedCinema: string;
  selectedBranch: string;
  loading: boolean;
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
  name: string;
  icon: string;
  opening: string;
  closing: string;
  image: string;
}

export const CinemaContext = createContext({} as ICinemaContext);

export const CinemaProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectedCinema, setSelectedCinema] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const { toast } = useToast();
  const [cinemas, setCinemas] = useState([]);

  const getCinema = async () => {
    try {
      setLoading(true);
      const {
        data: { cinemas },
      } = await myAxios.get("/cinema");
      setCinemas(cinemas);
      // console.log(cinemas, "<3");
    } catch (error) {
      toast({
        description: `There was a problem with your request. ${error} `,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCinema();
  }, []);

  return (
    <CinemaContext.Provider
      value={{
        getCinema,
        cinemas,
        selectedCinema,
        setSelectedCinema,
        selectedBranch,
        setSelectedBranch,
        loading,
      }}
    >
      {children}
    </CinemaContext.Provider>
  );
};
