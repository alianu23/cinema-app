import { CiBarcode } from "react-icons/ci";
import React from "react";

import { TicketDialog } from "./dialog";

export const MovieTicket = (ticket: any) => {
  return (
    <div className="w-80 z-9 bg-slate-700 rounded-3xl text-slate-300">
      <div className="bg-slate-900 relative drop-shadow-2xl  rounded-3xl p-4 m-4">
        <TicketDialog ticketData={ticket} />
        <div className=" border-dashed border-b-2 pt-5">
          <div className="absolute rounded-full w-5 h-5 bg-slate-700 -mt-2 -left-2"></div>
          <div className="absolute rounded-full w-5 h-5 bg-slate-700 -mt-2 -right-2"></div>
        </div>
        <div className="w-full mx-auto mt-2">
          <div className="flex justify-between px-1 font-semibold">
            <div className="text-[14px]"> {ticket?.ticket?.branch}</div>
            <div className="text-[14px]">
              {ticket?.ticket?.startTime.date.month} сарын{" "}
              {ticket?.ticket?.startTime.date.day}{" "}
              <span className="text-bold">
                {" "}
                {ticket?.ticket?.startTime.time}
              </span>
            </div>
          </div>
          <div className="flex items-center text-sm gap-4 justify-start px-1 mt-2">
            <div className="text-sm font-bold text-slate-400">Тасалбар:</div>
            <div className="font-semibold border-2 py-1 px-2 rounded-md text-nowrap text-[12px]">
              {ticket?.ticket?.adultCount} том хүн
            </div>
            {ticket?.ticket?.kidsCount !== 0 ? (
              <div className="font-semibold border-2 py-1 px-2 rounded-md text-nowrap text-[12px]">
                {ticket?.ticket?.kidsCount} хүүхэд
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
