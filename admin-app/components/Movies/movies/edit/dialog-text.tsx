import React, { ChangeEvent } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { InputField } from "@/components/utils/input-field";
import { Flex } from "@radix-ui/themes";

type Props = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  movie: any;
};
const typesMovie = [
  { name: "2D", id: "2D" },
  { name: "3D", id: "3D" },
  { name: "IMAX", id: "IMAX" },
  { name: "LASER", id: "LASER" },
];

export const DialogText = ({ handleInputChange, movie }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      <div>
        <InputField
          desc="Киноны нэр"
          label="Гарчиг"
          defaultValue={movie.title}
          name="title"
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Киноны тайлбар"
          label="Киноны тайлбар"
          defaultValue={movie.synopsis || ""}
          name="synopsis"
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Киноны Найруулагч"
          defaultValue={movie.director || ""}
          label="Найруулагч"
          name="director"
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Киноны үргэлжлэх хугацаа"
          label="Хугацаа"
          name="duration"
          defaultValue={movie.duration}
          type={"number"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Киноны төрөл"
          label="Төрөл"
          defaultValue={movie.genre}
          name="genre"
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Гарах өдөр"
          label="Гарах өдөр"
          defaultValue={movie.releaseDate}
          name="releaseDate"
          type={"date"}
          onChange={handleInputChange}
        />
      </div>
      <div>
        {movie.cast.map((cast: any) => (
          <div>
            <InputField
              desc="Жүжигчин 1"
              label="Жүжигчин"
              name="cast1"
              defaultValue={cast.name}
              type={"text"}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <InputField
          desc="Том хүн тасалбар үнэ"
          label="Тасалбарын үнэ (Том хүн)"
          defaultValue={movie.ticketPrice.adult}
          name="adult"
          type={"number"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Хүүхдийн тасалбар үнэ"
          label="Тасалбарын үнэ (Хүүхэд)"
          defaultValue={movie.ticketPrice.child}
          name="child"
          type={"number"}
          onChange={handleInputChange}
        />
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="movieType"
          >
            Танхимын төрөл
          </label>
          <Flex direction="row">
            {typesMovie.map((type: any, i: any) => (
              <RadioGroup.Root
                key={i}
                defaultValue={movie.movieType}
                name="movieType"
                value={type.id}
                onChange={handleInputChange}
                className="flex flex-row gap-7"
              >
                <RadioGroup.Item
                  className="bg-white px-2 w-full h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                  value={type.id}
                >
                  {type.name}
                </RadioGroup.Item>
              </RadioGroup.Root>
            ))}
          </Flex>
        </fieldset>
      </div>
    </div>
  );
};
