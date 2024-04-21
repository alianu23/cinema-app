"use client";

import myAxios from "@/components/utils/axios";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { Cinema, ICinemaContext } from "@/types/cinema";
import { toast } from "react-toastify";
import { useAuth } from ".";

export const CinemaContext = createContext({} as ICinemaContext);

export const CinemaProvider = ({ children }: PropsWithChildren) => {
  const { token } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [selectedCinema, setSelectedCinema] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [cinemas, setCinemas] = useState([]);
  const [getCinemas, setGetCinemas] = useState<Cinema[]>([]);
  const [cinemaImg, setCinemaImg] = useState("");

  const getCinema = async () => {
    try {
      setLoading(true);
      const {
        data: { cinemas },
      } = await myAxios.get("/cinema");
      setCinemas(cinemas);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const addCinema = async (cinemaData: any) => {
    try {
      setLoading(true);
      cinemaData.image = cinemaImg;
      const {
        data: { cinemas },
      } = await myAxios.post("/cinema", cinemaData);

      // setCinemas(cinemas);
      setRefresh(!refresh);
      toast.success("cinema added successfully!");
    } catch (error) {
      toast.error(`Кино театр нэмэхэд алдаа гарлаа.`);
    } finally {
      setLoading(false);
    }
  };

  const putCinema = async (formData: any, branch: string, cinema: any) => {
    try {
      setLoading(true);
      console.log("gulug", branch);
      const {
        data: { cinemas },
      } = await myAxios.put(`/cinema`, { formData, branch: branch, cinema });
      setCinemas(cinemas);
      setRefresh(!refresh);
      toast.success("Cinema hehehe successfully!");
    } catch (error) {
      toast.warning("Засахад алдаа гарлаа.");
    } finally {
      setLoading(false);
    }
  };

  const deleteCinema = async (branch: string) => {
    try {
      setLoading(true);
      const {
        data: { cinemas },
      } = await myAxios.post("/cinema/delete", {
        branchName: branch,
        headers: { Authorization: `Bearer ${token}` },
      });
      setCinemas(cinemas);
      setRefresh(!refresh);
      toast.success("Кино театр аммжилттай устлаа!");
    } catch (error) {
      toast.warning("Устхад алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCinema();
  }, [refresh]);

  return (
    <CinemaContext.Provider
      value={{
        addCinema,
        getCinema,
        deleteCinema,
        putCinema,
        cinemas,
        selectedCinema,
        setSelectedCinema,
        selectedBranch,
        setSelectedBranch,
        loading,
        getCinemas,
        setGetCinemas,
        setCinemaImg,
        cinemaImg,
      }}
    >
      {children}
    </CinemaContext.Provider>
  );
};

export const useCinema = () => useContext(CinemaContext);
