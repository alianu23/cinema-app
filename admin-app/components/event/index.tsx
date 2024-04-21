"use client";
import React, { useContext } from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { EventDialog } from "./dialog/event-dialog";
import { EventContext } from "@/context";
import { EventCard } from "./event-card";

type Props = {};

export const Event = (props: Props) => {
  const { events } = useContext(EventContext);
  return (
    <>
      <Breadcrumb pageName="Эвент" />
      <EventDialog />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event: any) => (
            <EventCard event={event} key={event._id} />
          ))}
        </div>
      </div>
    </>
  );
};
