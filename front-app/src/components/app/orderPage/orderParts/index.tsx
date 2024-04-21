import React, { useContext } from "react";
import { Seats } from "./seats";
import { TicketInfo } from "./ticketInfo";
import { ShowtimeContext } from "@/components/contexts/showtime";

type Props = {
  handleForwardStep: () => void;
  handleBackwardStep: () => void;
};

export const OrderIndex = ({
  handleForwardStep,
  handleBackwardStep,
}: Props) => {
  const { showtimes } = useContext(ShowtimeContext);
  return (
    <div className="flex justify-center items-center ">
      <TicketInfo
        handleForwardStep={handleForwardStep}
        handleBackwardStep={handleBackwardStep}
      />
    </div>
  );
};
