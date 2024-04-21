import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { useCinema, useMovie, useShowtime } from "@/context";
import { ChevronDown } from "lucide-react";
import { InputField } from "../utils/input-field";
import * as Dialog from "@radix-ui/react-dialog";
import { Cloudinary } from "../utils/cloudinary-next/upload";
import { toast } from "react-toastify";

type Props = {
  closeModal: () => void;
};

const DialogText = ({ closeModal }: Props) => {
  const { cinemas, addCinema, setCinemaImg, cinemaImg } = useCinema();
  const [selectedCinema, setSelectedCinema] = useState(cinemas[0]);
  const [isDemo, setIsDemo] = useState(false);

  const [cinemaData, setCinemaData] = useState<any>({
    cinemaId: "",
    branchName: "",
    branchLocation: "",
    image: "",
    opening: "",
    closing: "",
  });
  const [demo, setDemo] = useState<any>({
    cinemaId: "661782294cab6d2e97feecd2",
    branchName: "Өргөө-8",
    branchLocation: "3 4-р хороолол",
    image:
      "https://res.cloudinary.com/dzricfscv/image/upload/v1712836774/qcov0yudzuz55uc2dr3g.jpg",
    opening: "9",
    closing: "23",
  });

  const fillButton = () => {
    setIsDemo(true);
  };
  const func1 = (selectedCinema: any) => {
    setCinemaData({ ...cinemaData, cinemaId: selectedCinema._id });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);

    console.log("working");
  };

  const handleChange = (name: string, value: string) => {
    setCinemaData({ ...cinemaData, [name]: value });
  };

  const handleAdd = () => {
    if (isDemo == false) {
      addCinema(cinemaData);
    } else {
      addCinema(demo);
    }
    closeModal();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-evenly w-full">
      <div>
        <div className="p-2">
          <fieldset className="mb-[15px] w-full flex flex-col justify-start">
            <label
              className="text-[13px] leading-none mb-2.5  block"
              htmlFor="synopsis"
            >
              Кино театр
            </label>
            <Listbox value={selectedCinema} onChange={setSelectedCinema}>
              <Listbox.Button className="flex justify-between px-2 rounded-sm py-2 text-start shadow-[0_0_0_1px] shadow-blue-500 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none leading-none text-violet11">
                <div>{selectedCinema.cinemaName}</div>
                <ChevronDown />
              </Listbox.Button>
              <Listbox.Options className="bg-violet4">
                {cinemas.map((cinema) => (
                  <Listbox.Option
                    key={cinema._id}
                    value={isDemo ? demo.cinemaId : cinema}
                    onClick={() => {
                      setSelectedCinema(cinema);
                      func1(cinema);
                    }}
                    className="hover:cursor-pointer rounded-lg shadow-violet7 h-[35px] hover:bg-violet7 focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none leading-none text-violet11"
                  >
                    {cinema.cinemaName}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </fieldset>

          <InputField
            label="Салбар"
            desc="Нэмэх салбарын нэр"
            onChange={handleInputChange}
            name="branchName"
            type="text"
            defaultValue={isDemo ? demo.branchName : ""}
          />
          <InputField
            label="Гудамж"
            desc="Хаяг"
            onChange={handleInputChange}
            name="branchLocation"
            type="text"
            defaultValue={isDemo ? demo.branchLocation : ""}
          />
        </div>
      </div>
      <div className="flex flex-col p-2">
        <InputField
          label="Нээх цаг"
          onChange={handleInputChange}
          name="opening"
          type="number"
          defaultValue={isDemo ? demo.opening : ""}
        />
        <InputField
          label="Хаах цаг"
          onChange={handleInputChange}
          name="closing"
          type="number"
          defaultValue={isDemo ? demo.closing : ""}
        />
        <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded w-58 mt-6 leading-none mb-2.5  block">
          <Cloudinary setFunction={setCinemaImg} />
        </div>
      </div>
      <div className="flex flex-row items-cente gap-3">
        <button
          className=" py-2 bg-violet-200 text-violet12 hover:bg-violet11 focus:shadow-green7 rounded-[4px] px-[15px] font-medium"
          onClick={() => {
            handleAdd();
          }}
        >
          Нэмэх
        </button>
        <button
          className="px-5 py-2 rounded-md bg-blue-200 text-blue-800"
          onClick={closeModal}
        >
          Болих
        </button>
        <button
          className="px-5 py-1 rounded-md bg-blue-200 text-blue-800"
          onClick={fillButton}
        >
          Дэмо
        </button>
      </div>
    </div>
  );
};

export default DialogText;
