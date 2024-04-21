"use client";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { TEventContext } from "..";
import myAxios from "@/components/utils/axios";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

export const EventContext = createContext({} as TEventContext);

export const EventProvider = ({ children }: PropsWithChildren) => {
  const [events, setEvents] = useState([]);
  const [refresh, setRefresh] = useState<boolean>(true);
  const { toast } = useToast();

  const getEvents = async () => {
    try {
      const {
        data: { events },
      } = await myAxios.get("/event");
      // console.log("events ===> ", events);
      setEvents(events);
      setRefresh(!refresh);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `There was a problem with your request. ${error} `,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <EventContext.Provider value={{ events }}>{children}</EventContext.Provider>
  );
};
