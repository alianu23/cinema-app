"use client";

import { Button, CinemaContext } from "@/components";
import { useContext, useState } from "react";
import { CinemaSection } from "./cinemaSection";
type Props = {
  handleForwardStep: () => void;
  cinemas: any;
};

export const CinemaButton = ({ cinemas, handleForwardStep }: Props) => {
  const [click, setClick] = useState("");
  const { setSelectedCinema, loading } = useContext(CinemaContext);
  const [isActive, setIsActive] = useState("");
  const [filteredCinema, setFilteredCinema] = useState([]);
  const handleClick = (cinemaId: any, name: any) => {
    setClick(cinemaId);
    setIsActive(name);

    const filtered = cinemas.filter((cinema: any) => cinema._id === cinemaId);
    setFilteredCinema(filtered);
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="flex flex-col ">
      {loading && <div>Loading</div>}
      <div className="flex gap-2 md:gap-4 flex-wrap justify-center container mt-4 mb-2 md:mt-8 md:mb-8">
        {cinemas.map((cinema: any, i: any) => (
          <Button
            className={`font-bold p-3 border mt-4 border-slate-600 text-xs md:text-sm transition-all duration-75   ${
              isActive === cinema.cinemaName
                ? "text-red-500"
                : "hover:text-red-400 "
            }`}
            key={i}
            onClick={() => {
              handleClick(cinema._id, cinema.cinemaName);
            }}
          >
            {cinema.cinemaName}
          </Button>
        ))}
      </div>
      <div>
        <div className="">
          {filteredCinema.length === 0 &&
            cinemas.map((cinema: any, i: number) => (
              <CinemaSection
                key={i}
                handleForwardStep={handleForwardStep}
                cinemas={cinema}
              />
            ))}
        </div>

        {filteredCinema.length !== 0 &&
          filteredCinema.map((cinema: any, i: number) => (
            <CinemaSection
              key={i}
              handleForwardStep={handleForwardStep}
              cinemas={cinema}
            />
          ))}
      </div>
    </div>
  );
};
