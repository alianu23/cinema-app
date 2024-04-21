"use client";
import { Cloudinary } from "@/components/utils/cloudinary-next/upload";
import { InputField } from "@/components/utils/input-field";
import { useComingSoon, useMovie } from "@/context";
import { Flex } from "@radix-ui/themes";
import React, { ChangeEvent } from "react";

type Props = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  movie: any;
};

export const DialogFile = ({ handleInputChange, movie }: Props) => {
  const { setCast1, setCast2, setCast3, setLandOne, setLandTwo, setVertical } =
    useComingSoon();
  return (
    <div className=" ">
      <InputField
        desc="Трэйлер линк оруулна уу"
        label="Trailer"
        defaultValue={movie.movie_trailer}
        name="movie_trailer"
        type={"text"}
        onChange={handleInputChange}
      />

      {movie ? (
        <div className="flex flex-row gap-3 items-center">
          <div className="w-[300px]">
            <div className=" flex flex-col gap-3">
              <p className="text-[13px] text-violet12">
                Киноны зураг {"(Босоо зураг)"}
              </p>
              <p className="border text-[15px] overflow-hidden border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
                {movie.poster.vertical}
              </p>
              <div className="bg-sky-200 text-sky-700 flex items-center rounded-md px-2">
                <Cloudinary setFunction={setVertical} />
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <p className="text-[13px] mt-3 text-violet12">
                Киноны зураг {"(Хэвтээ зураг 1)"}
              </p>
              <p className="border text-[15px] overflow-hidden border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
                {movie.poster.lands.land1}
              </p>
              <div className="bg-sky-200 text-sky-700 flex items-center rounded-md px-2">
                <Cloudinary setFunction={setLandOne} />
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <p className="text-[13px] text-violet12">
                Киноны зураг {"(Хэвтээ зураг 1)"}
              </p>
              <p className="border text-[15px] overflow-hidden border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
                {movie.poster.lands.land2}
              </p>
              <div className="bg-sky-200 text-sky-700 flex items-center rounded-md px-2">
                <Cloudinary setFunction={setLandTwo} />
              </div>
            </div>
          </div>

          <Flex direction={"column"} className="w-[300px]">
            {movie.cast.map((cast: any) => (
              <div className="flex flex-col gap-3 mt-3">
                <p className="text-[13px] text-violet12">
                  Зураг {"(Жүжигчний зураг)"}
                </p>

                <p className="border text-[15px] overflow-hidden border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
                  {cast.img}
                </p>
                <div className="bg-sky-200 text-sky-700 flex items-center rounded-md px-2">
                  <Cloudinary setFunction={setCast1} />
                </div>
              </div>
            ))}
          </Flex>
        </div>
      ) : (
        <div>
          <div className="flex flex-col gap-3">
            <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded ">
              {" "}
              <Cloudinary setFunction={setVertical} />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <p className="text-[13px] text-violet12">
              Киноны зураг {"(Хэвтээ зураг 1)"}
            </p>
            <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
              {" "}
              <Cloudinary setFunction={setLandOne} />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <p className="text-[13px] text-violet12">
              Киноны зураг {"(Хэвтээ зураг 2)"}
            </p>
            <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
              {" "}
              <Cloudinary setFunction={setLandTwo} />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <p className="text-[13px] text-violet12">Poster {"(Cast img 1)"}</p>
            <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
              {" "}
              <Cloudinary setFunction={setCast1} />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <p className="text-[13px] text-violet12">Poster {"(Cast img 2)"}</p>
            <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
              {" "}
              <Cloudinary setFunction={setCast2} />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <p className="text-[13px] text-violet12">Poster {"(Cast img 3)"}</p>
            <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
              {" "}
              <Cloudinary setFunction={setCast3} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
