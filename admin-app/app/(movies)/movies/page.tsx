import { Movies } from "@/components/Movies/movies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie Page | Next.js E-commerce Dashboard Template",
};

const MoviePage = () => {
  return (
    <>
      <Movies />
    </>
  );
};

export default MoviePage;
