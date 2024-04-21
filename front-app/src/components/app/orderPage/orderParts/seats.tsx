import { Button } from "@/components";
import { Armchair } from "lucide-react";
import React, { useContext, useState } from "react";

type Props = {
  showtimes: any;
  func: any;
  selectedSeats: any;
  clear: () => void;
  setSelectedSeats: (el: any) => void;
};

export const Seats = ({
  showtimes,
  func,
  selectedSeats,
  setSelectedSeats,
  clear,
}: Props) => {
  const [allSeats, setAllSeats] = useState([]);
  const handleSelect = (seatNumber: string) => {
    const fndIdx = selectedSeats.findIndex((el: any) => el === seatNumber);
    console.log("F", fndIdx);
    if (fndIdx !== -1) {
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
      func(selectedSeats.length + 1);
    }
  };

  return (
    <div className="h-screen text-black flex justify-center flex-col items-center mt-[-80px] lg:mt-[-40px]">
      <p className="text-white py-5 font-bold">
        {showtimes[0]?.screen} - Дэлгэц
      </p>
      <div className="h-20 w-80 border-gray-500 border-l-[25px] border-l-transparent border-r-transparent border-r-[25px] border-t-[80px] rounded-t-md overflow-hidden "></div>
      <div className="flex gap-6 pt-10">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            {showtimes[0]?.seats.map((row: any, i: any) => {
              return (
                <div className="flex justify-center gap-2" key={i}>
                  {row.map((seat: any, i: any) => {
                    return (
                      <div key={i}>
                        {seat.isNull === "false" ? (
                          <div className={`w-4 hover:cursor-pointer`}>
                            <Armchair
                              onClick={() => {
                                if (seat.status === "available")
                                  handleSelect(seat.seatNumber);
                              }}
                              size={24}
                              color={
                                selectedSeats.includes(seat.seatNumber)
                                  ? "lime"
                                  : seat.status === "unavailable"
                                  ? "red"
                                  : "white"
                              }
                              opacity="70%"
                            />
                          </div>
                        ) : (
                          <div className="w-3"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <div className="w-full flex justify-center mt-4">
              <Button
                className=" bg-slate-700 hover:bg-red-500"
                onClick={() => {
                  clear();
                }}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
