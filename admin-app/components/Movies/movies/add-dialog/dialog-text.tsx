import React, { ChangeEvent } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { InputField } from "@/components/utils/input-field";
import { Flex } from "@radix-ui/themes";

type Props = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  demo: any;
  isDemo: boolean;
};
const typesMovie = [
  { name: "2D", id: "2D" },
  { name: "3D", id: "3D" },
  { name: "IMAX", id: "IMAX" },
  { name: "LASER", id: "LASER" },
];

export const DialogText = ({ handleInputChange, demo, isDemo }: Props) => {
  return (
    <div className="flex gap-4 w-full">
      <div>
        <InputField
          desc="Киноны нэр"
          label="Гарчиг"
          name="title"
          defaultValue={isDemo ? demo.title : ""}
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Киноны тайлбар"
          label="Киноны тайлбар"
          name="synopsis"
          defaultValue={isDemo ? demo.synopsis : ""}
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Киноны Найруулагч"
          label="Найруулагч"
          name="director"
          defaultValue={isDemo ? demo.director : ""}
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Киноны үргэлжлэх хугацаа"
          label="Хугацаа"
          name="duration"
          defaultValue={isDemo ? demo.duration : ""}
          type={"number"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Киноны төрөл"
          label="Төрөл"
          name="genre"
          defaultValue={isDemo ? demo.genre : ""}
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Гарах өдөр"
          label="Гарах өдөр"
          name="releaseDate"
          defaultValue={isDemo ? demo.releaseDate : ""}
          type={"date"}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <InputField
          desc="Жүжигчин 1"
          label="Жүжигчин 1"
          name="cast1"
          defaultValue={isDemo ? demo.cast1 : ""}
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Жүжигчин 2"
          label="Жүжигчин 2"
          name="cast2"
          defaultValue={isDemo ? demo.cast2 : ""}
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Жүжигчин 3"
          label="Жүжигчин 3"
          name="cast3"
          defaultValue={isDemo ? demo.cast3 : ""}
          type={"text"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Том хүн тасалбар үнэ"
          label="Тасалбарын үнэ (Том хүн)"
          name="adult"
          defaultValue={isDemo ? demo.adult : ""}
          type={"number"}
          onChange={handleInputChange}
        />
        <InputField
          desc="Хүүхдийн тасалбар үнэ"
          label="Тасалбарын үнэ (Хүүхэд)"
          name="child"
          defaultValue={isDemo ? demo.child : ""}
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
                defaultValue={isDemo ? demo.movieType : ""}
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
