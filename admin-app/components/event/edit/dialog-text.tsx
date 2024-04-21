import { momentChange } from "@/components/utils/moment";
import { IEvent } from "@/types/event";
import React from "react";

type Props = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  event: IEvent;
};

export const DialogText = ({ handleInputChange, event }: Props) => {
  return (
    <div className="flex  flex-col lg:flex-row gap-4 w-full">
      <div>
        <fieldset className="mb-[15px] w-[250px] flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="name"
          >
            Нэр
          </label>
          <input
            placeholder="title"
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            name="name"
            defaultValue={event.name}
            onChange={handleInputChange}
            id="title"
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="date"
          >
            Өдөр
          </label>
          <input
            placeholder="date"
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            name="date"
            defaultValue={event.date}
            onChange={handleInputChange}
            type="Date"
            id="synopsis"
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="Event about"
          >
            Тухай
          </label>
          <input
            placeholder="about"
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="about"
            name="about"
            defaultValue={event.about}
            onChange={handleInputChange}
            type="text"
          />
        </fieldset>
      </div>
      <div>
        <fieldset className="mb-[15px] w-[250px] flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="location"
          >
            Байршил
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="location"
            name="location"
            defaultValue={event.location}
            onChange={handleInputChange}
            type="text"
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="addition"
          >
            Нэмэлт
          </label>
          <input
            placeholder="cast"
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="cast"
            name="addition"
            defaultValue={event.addition || ""}
            onChange={handleInputChange}
            type="text"
          />
        </fieldset>
      </div>
    </div>
  );
};
