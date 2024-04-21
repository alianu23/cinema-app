import React from "react";

type Props = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  demo: any;
  isDemo: boolean;
};

export const DialogText = ({ handleInputChange, demo, isDemo }: Props) => {
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
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            name="name"
            placeholder="Нэр..."
            value={isDemo ? demo.name : ""}
            onChange={handleInputChange}
            id="title"
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="date"
          >
            Он сар өдөр
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            name="date"
            onChange={handleInputChange}
            value={isDemo ? demo.date : ""}
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
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="director"
            placeholder="Тухай..."
            name="about"
            value={isDemo ? demo.about : ""}
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
            placeholder="Байршил"
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="cast"
            value={isDemo ? demo.location : ""}
            name="location"
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
            placeholder="Нэмэлт мэдээлэл оруулна уу"
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="cast"
            name="addition"
            value={isDemo ? demo.addition : ""}
            onChange={handleInputChange}
            type="text"
          />
        </fieldset>
      </div>
    </div>
  );
};
