export interface IComingSoon {
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
    },
  ];
}
