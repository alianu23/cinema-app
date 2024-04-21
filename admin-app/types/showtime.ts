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

export interface ITimeContext {
  showtimes: ITimes[];
  getTimeByCinemaAndMovie: (
    movieId: string,
    cinemaId: string,
    branch: string,
    screen: string,
    startTime: Date
  ) => Promise<void>;
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
  updateShowtime: (seats: any) => Promise<void>;
  createShowtime: (formData: any) => Promise<void>;
}
