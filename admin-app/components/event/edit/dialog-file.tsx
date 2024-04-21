import { Cloudinary } from "@/components/utils/cloudinary-next/upload";
import { IEvent } from "@/types/event";
import { Button } from "@radix-ui/themes";
import React from "react";

type Props = {
  setFile: (e: any) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  event: IEvent;
  image: string;
  takeImg: (e: string) => void;
};

export const DialogFile = ({
  setFile,
  handleInputChange,
  event,
  takeImg,
  image,
}: Props) => {
  return (
    <div className="flex gap-4">
      <div>
        <fieldset className="mb-[15px] w-[250px] flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="Facebook link"
          >
            Link {"(Facebook link format only)"}
          </label>
          <input
            placeholder="trailer"
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="trailer"
            name="link"
            defaultValue={event?.link || ""}
            onChange={handleInputChange}
            type="url"
          />
        </fieldset>
        <div className="flex flex-col gap-3 mt-3">
          <p className="text-[13px] text-violet12">Poster {"(Vertical img)"}</p>

          {event ? (
            <div className=" flex gap-3">
              <p className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
                {event.image}
              </p>
              <div
                onClick={() => {
                  takeImg(image);
                }}
                className="bg-sky-200 text-sky-700 flex items-center rounded-md px-2"
              >
                <Cloudinary setFunction={setFile} />
              </div>
            </div>
          ) : (
            <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
              <Cloudinary setFunction={setFile} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
