import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdOutlineLocalMovies } from "react-icons/md";

export const TicketDialog = (ticketData: any) => {
  const dayCurrent = new Date().getDate();
  const hourCurrent = new Date().getHours();
  const movieStartHour =
    ticketData?.ticketData?.ticket?.startTime.time.split(":")[0];
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center justify-between">
          <div className="flex items-center  my-1">
            <span className="mr-3 rounded-full color-white  w-8 h-8">
              <MdOutlineLocalMovies className="h-8 p-1 size-full" />
            </span>
            <h2 className="font-bold text-xl text-white">
              {ticketData?.ticketData?.ticket?.movieId?.title}{" "}
            </h2>
          </div>
          {ticketData?.ticketData?.ticket?.startTime.date.day < dayCurrent ||
          (ticketData?.ticketData?.ticket?.startTime.date.day === dayCurrent &&
            movieStartHour < hourCurrent) ? (
            <div className="text-sm absolute w-20 right-6 top-28 bg-black rounded-lg text-red-400">
              Хүчингүй
            </div>
          ) : (
            <div className="text-sm absolute w-20 right-6 top-28 bg-black rounded-lg text-green-400">
              Хүчинтэй
            </div>
          )}
        </div>
        <div className=" border-dashed border-b-2 pt-5">
          <div className="absolute rounded-full w-5 h-5 bg-slate-700 -mt-2 -left-2"></div>
          <div className="absolute rounded-full w-5 h-5 bg-slate-700 -mt-2 -right-2"></div>
        </div>
        <div className="flex items-center mt-5 w-64 h-96 overflow-hidden">
          <img
            src={`${ticketData?.ticketData?.ticket?.movieId?.poster.vertical}`}
            className="rounded-md size-full object-cover"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-slate-900 border-4 border-slate-800 text-slate-300 w-80 rounded-lg">
        <div className="flex flex-col  p-3 gap-4 text-sm">
          <h2 className="font-bold text-3xl">
            {ticketData?.ticketData?.ticket?.movieId?.title}
          </h2>
          <div className="items-center flex gap-2">
            <span className="text-sm font-bold text-slate-400">Байршил:</span>
            <div className="font-semibold">
              {ticketData?.ticketData?.ticket?.branch}
            </div>
          </div>
          <div className="items-center flex gap-2">
            <span className="text-base font-bold text-slate-400">Хэзээ:</span>
            <div className="font-semibold">
              {ticketData?.ticketData?.ticket?.startTime.date.month} сарын{" "}
              {ticketData?.ticketData?.ticket?.startTime.date.day} {"2024"}
            </div>
          </div>
          <div className="items-center flex gap-2">
            <span className="text-sm font-bold text-slate-400">Эхлэх цаг:</span>
            <div className="font-semibold">
              {ticketData?.ticketData?.ticket?.startTime.time}
            </div>
          </div>
          <div className="items-center flex gap-2">
            <span className="text-sm font-bold text-slate-400">Танхим:</span>
            <div className="font-semibold">1</div>
          </div>
          <div className="text-sm font-bold text-slate-400 z-50">Суудал:</div>
          <div className="items-center flex flex-wrap gap-4 justify-center h-40 overflow-y-auto bg-slate-800 rounded-lg p-4">
            {ticketData?.ticketData?.ticket?.seatNumbers.map(
              (seat: any, i: any) => (
                <div className="flex gap-2 ">
                  <div className="font-semibold">
                    Эгнээ: {seat.split("-")[0]}
                  </div>
                  <div>Суудал: {seat.split("-")[1]}</div>
                </div>
              )
            )}
          </div>

          <div className="flex items-center text-sm gap-2">
            <div className="text-sm font-bold text-slate-400">Тасалбар:</div>
            <div className="font-semibold border-2 py-1 px-2 rounded-md">
              {ticketData?.ticketData?.ticket?.adultCount} том
            </div>
            <div className="font-semibold border-2 py-1 px-2 rounded-md">
              {ticketData?.ticketData?.ticket?.kidsCount} хүүхэд
            </div>
          </div>
          <div className="font-semibold flex-row flex gap-2">
            <div className="text-sm font-bold text-slate-400">Нийт төлбөр:</div>
            <span>
              {ticketData?.ticketData?.ticket?.adultCount *
                ticketData?.ticketData?.ticket?.movieId.ticketPrice.adult +
                ticketData?.ticketData?.ticket?.kidsCount *
                  ticketData?.ticketData?.ticket?.movieId.ticketPrice.child}
              ₮
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
