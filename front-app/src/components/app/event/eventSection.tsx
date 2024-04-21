"use client";
import React, { useContext } from "react";
// import { events } from "./data";
import { EventDialog } from "./dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { EventContext } from "@/components";

type Props = {};

export const EventBanner = (props: Props) => {
  const { events } = useContext(EventContext);
  return (
    <div className=" flex flex-wrap justify-center">
      <ScrollArea className="h-[600px] w-[50%%] rounded-md border-4 border-slate-800 bg-slate-800">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col justify-between  mb-3 relative rounded-lg "
          >
            <img
              className="w-[400px] sm:w-[520px] md:w-[800px] rounded-md hover:border-white-500 hover:duration-300 duration-300 hover:cursor-pointer lg:opacity-65 hover:opacity-100 hover:shadow-md shadow-2xl"
              src={event.image}
            />
            <div className="absolute flex flex-row h-full">
              <p className="absolute bottom-0 p-2 mb-2 ml-2 bg-black bg-opacity-20 rounded-xl">
                {event.date.split("T")[0]}
              </p>
              <p className="absolute text-[0px] md:text-base bottom-2 ml-40 text-wrap bg-black bg-opacity-20 w-[500px]">
                {event.about}
              </p>
              <div className="absolute p-2 text-white flex justify-around gap-4 text-3xl ml-2 bg-black mt-2 rounded-xl bg-opacity-20">
                <p className="">{event.name}</p>
                <span>
                  <Link href={event.link}>
                    <FaFacebook className="w-10 h-10 hover:text-blue-600 cursor-pointer hover:bg-slate-50 rounded-full" />
                  </Link>
                </span>
              </div>
            </div>
            <EventDialog event={event} />
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};
