import { Cloudinary } from "@/components/utils/cloudinary-next/upload";
import React from "react";

type Props = {
  setFile: (e: any) => void;
  demo: any;
  isDemo: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DialogFile = ({
  setFile,
  handleInputChange,
  demo,
  isDemo,
}: Props) => {
  return (
    <div className="flex gap-4">
      <div>
        <fieldset className="mb-[15px] w-[250px] flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="Facebook link"
          >
            Холбоос {"(Зөвхөн фэйсбоок линк оруулна уу)"}
          </label>
          <input
            className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
            id="trailer"
            name="link"
            value={isDemo ? demo.link : ""}
            onChange={handleInputChange}
            type="url"
          />
        </fieldset>
        <div className="flex flex-col gap-3 mt-3">
          <p className="text-[13px] text-violet12">Зураг {"(Хэвтээ зураг)"}</p>
          <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
            {" "}
            <Cloudinary setFunction={setFile} />
          </div>
        </div>
      </div>
    </div>
  );
};
