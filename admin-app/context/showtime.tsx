"use client";
import { useRouter } from "next/navigation";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/components/utils/axios";
import { AuthContext, MovieContext } from ".";
import { toast } from "react-toastify";
import { ITimeContext } from "@/types/showtime";

export const ShowtimeContext = createContext({} as ITimeContext);

export const ShowtimeProvider = ({ children }: PropsWithChildren) => {
  // const { selectedMovieId } = useContext(MovieContext);
  const [showtimes, setShowtimes] = useState([]);
  const [showtimesByMovie, setShowtimesByMovie] = useState([]);
  const [showtimesByCinema, setShowtimesByCinema] = useState([]);
  const [selectedScreen, setSelectedScreen] = useState("");
  const [newTicketId, setNewTicketId] = useState<any>();
  const [orderSeats, setOrderSeats] = useState([]);
  const [seats, setSeats] = useState([]);
  const { token } = useContext(AuthContext);
  const [isCreateOrderWorked, setIsCreateOrderWorked] = useState(false);

  const router = useRouter();

  const getTime = async () => {
    try {
      const {
        data: { times },
      } = await myAxios.get("/showtime", {});
      setShowtimes(times);
      console.log("times irlee", times);
    } catch (error) {}
  };

  const getTimeByCinemaAndMovie = async (
    movieId: string,
    cinemaId: string,
    branch: string,
    screen: string,
    startTime: Date
  ) => {
    try {
      const {
        data: { times },
      } = await myAxios.post("/showtime/", {
        movieId: movieId,
        cinemaId: cinemaId,
        branch: branch,
        screen: screen,
        startTime: startTime,
      });
      setSelectedScreen(times.screen);
      setSeats(times.seats);
      // console.log(times.seats);
    } catch (error) {
      console.log(error, "ALDAA GARAV");
    }
  };
  const updateShowtime = async (seats: any) => {
    try {
      const { data } = await myAxios.put(
        "/showtime",
        {
          seats,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      toast.warning("Та нэвтэрнэ үү!");
    }
  };

  const createShowtime = async (formData: any) => {
    try {
      console.log("token ---------------->", token);
      const { data } = await myAxios.post(
        "/showtime/new",
        {
          formData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(data.message);
    } catch (error) {
      toast.warning("Та нэвтэрнэ үү!");
      router.push("/signin");
    }
  };

  const sendShowtime = async (
    selectedMovieId: string,
    selectedBranch: string,
    adultCount: number,
    kidsCount: number,
    selectedSeats: any,
    isActiveMonth: string,
    isActiveDate: string,
    isActiveTime: string
  ) => {
    try {
      const {
        data: { ticket },
      } = await myAxios.post(
        "/ticket",
        {
          movieId: selectedMovieId,
          branch: selectedBranch,
          adultCount: adultCount,
          kidsCount: kidsCount,
          seatNumbers: selectedSeats,
          month: isActiveMonth,
          day: isActiveDate,
          time: isActiveTime,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNewTicketId(ticket._id);
      console.log(ticket);
      setTimeout(async () => {
        if (isCreateOrderWorked == false) {
          await myAxios.post(
            "/order/isvalid",
            { ticketId: ticket._id },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        }
      }, 600 * 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTime();
  }, []);

  return (
    <ShowtimeContext.Provider
      value={{
        showtimes,
        getTimeByCinemaAndMovie,
        seats,
        sendShowtime,
        newTicketId,
        setIsCreateOrderWorked,
        setShowtimes,
        showtimesByMovie,
        setShowtimesByMovie,
        showtimesByCinema,
        setShowtimesByCinema,
        setOrderSeats,
        orderSeats,
        updateShowtime,
        createShowtime,
      }}
    >
      {children}
    </ShowtimeContext.Provider>
  );
};

export const useShowtime = () => useContext(ShowtimeContext);
