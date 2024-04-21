"use client";
import { useRouter } from "next/navigation";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Toast, ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import myAxios from "@/components/utils/axios";
import { AuthContext, MovieContext } from ".";

interface ITimes {
  movie: string;
  cinema: string;
  branch: string;
  screen: string;
  startTime: {
    date: {
      month: string;
      day: string;
    };
    time: string;
  };
}

interface ITimeContext {
  showtimes: ITimes[];
  // getTimeByCinemaAndMovie: (
  //   movieId: string,
  //   cinemaId: string,
  //   branch: string,
  //   screen: string,
  //   startTime: Date
  // ) => Promise<void>;
  seats: any;
  newTicketId: any;
  sendShowtime: (
    selectedMovieId: string,
    selectedBranch: string,
    adultCount: number,
    kidsCount: number,
    selectedSeats: any,
    isActiveMonth: string,
    isActiveDate: string,
    isActiveTime: string
  ) => Promise<void>;
  setIsCreateOrderWorked: (hi: any) => void;
  setShowtimes: (showtimes: any) => void;
  showtimesByMovie: ITimes[];
  setShowtimesByMovie: (showtimes: any) => void;
  showtimesByCinema: ITimes[];
  setShowtimesByCinema: (showtimes: any) => void;
  setOrderSeats: (seats: any) => void;
  orderSeats: any;
  updateShowtime: () => Promise<void>;
  showtimeByTime: any;
  setShowtimeByTime: (showtimes: any) => void;
}

export const ShowtimeContext = createContext({} as ITimeContext);

export const ShowtimeProvider = ({ children }: PropsWithChildren) => {
  const [showtimeByTime, setShowtimeByTime] = useState<any>([]);
  const { selectedMovieId } = useContext(MovieContext);
  const [showtimes, setShowtimes] = useState([]);
  const [showtimesByMovie, setShowtimesByMovie] = useState([]);
  const [showtimesByCinema, setShowtimesByCinema] = useState([]);
  const [selectedScreen, setSelectedScreen] = useState("");
  const [newTicketId, setNewTicketId] = useState<any>();
  const { toast } = useToast();
  const [orderSeats, setOrderSeats] = useState(null);
  const [seats, setSeats] = useState([]);
  const { token } = useContext(AuthContext);
  const [isCreateOrderWorked, setIsCreateOrderWorked] = useState(false);

  const getTime = async () => {
    try {
      const {
        data: { times },
      } = await myAxios.get("/showtime", {});
      setShowtimes(times);
      console.log("times irlee", times);
    } catch (error) {}
  };

  // const getTimeByCinemaAndMovie = async (
  //   movieId: string,
  //   cinemaId: string,
  //   branch: string,
  //   screen: string,
  //   startTime: Date
  // ) => {
  //   try {
  //     const {
  //       data: { times },
  //     } = await myAxios.post("/showtime/", {
  //       movieId: movieId,
  //       cinemaId: cinemaId,
  //       branch: branch,
  //       screen: screen,
  //       startTime: startTime,
  //     });
  //     setSelectedScreen(times.screen);
  //     setSeats(times.seats);
  //     // console.log(times.seats);
  //   } catch (error) {
  //     console.log(error, "ALDAA GARAV");
  //   }
  // };
  const updateShowtime = async () => {
    try {
      const {
        data: { ticket },
      } = await myAxios.post(
        "/showtime",
        {
          ticket: newTicketId,
          showtime: showtimeByTime[0],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("seats on st context", newTicketId);
      console.log("selected showtime", showtimeByTime[0]);
      console.log("ticket irev ------->", ticket);
    } catch (error) {
      console.log("update Showtime context dr aldaa garlaa", error);
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
      console.log(selectedMovieId);
      console.log(selectedBranch);
      console.log(adultCount);
      console.log(kidsCount);
      console.log(selectedSeats);
      console.log(isActiveMonth);
      console.log(isActiveDate);
      console.log(isActiveTime);
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
      toast({
        variant: "default",
        title: "Тасалбар үүслээ",
      });
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
      toast({
        title: "Showtime илгээхэд алдаа гарлаа",
        variant: "destructive",
        action: (
          <ToastAction altText={`Try again ${error}`}>Try Again</ToastAction>
        ),
      });
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
        // getTimeByCinemaAndMovie,
        showtimeByTime,
        setShowtimeByTime,
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
      }}
    >
      {children}
    </ShowtimeContext.Provider>
  );
};
