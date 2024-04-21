"use client";
import React, { useContext } from "react";
import { Badge, CardFooter, Card, ShowtimeContext } from "..";
import { DialogOpen } from "./dialog";

type Props = {
  card: any;
};

export const MCard = ({ card }: Props) => {
  return (
    <div className="flex justify-center my-4 flex-wrap gap-5 items-center">
      <Card className="transition ease-in duration-200 delay-100 hover:cursor-pointer hover:scale-105 border-2 border-slate-900 bg-slate-900 shadow-none w-[300px] h-[450px]">
        <DialogOpen card={card} />
        <Badge className="absolute mt-[-20px] bg-slate-800 shadow-none rounded-none rounded-tr-lg">
          {card.releaseDate.split("T")[0]}
        </Badge>

        <CardFooter className="bg-slate-800 flex items-center flex-col gap-2 rounded-b-lg">
          <p className="text-white font-bold text-sm mt-5 overflow-hidden">
            {card.title}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
