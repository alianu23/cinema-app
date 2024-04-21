"use client";

import { useAuth } from "@/components/contexts";
import { MovieTicket } from "@/components/app/ticketpage/ticket";
import React from "react";

type Props = {};

function TicketPage({}: Props) {
  const { loginuser } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex font-bold text-xl mt-20 sm:mt-28 lg:mt-32 mb-10 sm:text-2xl md:text-3xl container sm:pl-40 md:pl-12 lg:pl-44 xl:pl-32  text-white">
        Миний тасалбар
      </div>
      {loginuser ? (
        loginuser?.tickets.length !== 0 ? (
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 justify-center items-center max-w-[1200px] gap-8 mb-56 ">
            {loginuser?.tickets
              ?.map((ticket: any, i: number) => (
                <MovieTicket ticket={ticket} key={i} />
              ))
              .reverse()}
          </div>
        ) : (
          <div className="h-[50vh] mb-10 sm:text-2xl md:text-xl container sm:pl-40 md:pl-12 lg:pl-44 xl:pl-32  text-white">
            Таньд тасалбар байхгүй байна.
          </div>
        )
      ) : (
        <div className="h-[50vh] mb-10 sm:text-2xl md:text-xl container sm:pl-40 md:pl-12 lg:pl-44 xl:pl-32  text-white">
          Уучлаарай та нэвтрээгүй байна.
        </div>
      )}
    </div>
  );
}

export default TicketPage;
