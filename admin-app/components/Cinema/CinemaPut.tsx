"use client";

import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useCinema } from "..";
import { Cloudinary } from "../utils/cloudinary-next/upload";
import { Button, Separator, TextField } from "@radix-ui/themes";
import { InputField } from "../utils/input-field";

const CinemaPut = ({ branch, cinema }: any) => {
  let [isOpen, setIsOpen] = useState(false);
  const { putCinema } = useCinema();
  const [form, setForm] = useState({
    branch: "",
    location: "",
    image: "",
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [cinemaImg, setCinemaImg] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const takeImg = (e: string) => {
    setForm({ ...form, image: e });
  };

  return (
    <>
      <div className=" inset-0">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Засах
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900"
                  >
                    Кино театр засах
                  </Dialog.Title>
                  <Dialog.Description as="h4" className="text-sm my-3">
                    Кино театрын засахыг хүсвэл засаж болно.
                    <br /> Гэхдээ ганцхан admin ууд болон Үнэнбатаас өөр хүн
                    хийж болкүүдээ хэхэ.
                  </Dialog.Description>
                  <Separator />
                  <InputField
                    name="branch"
                    onChange={handleInputChange}
                    desc="Өргөө-1"
                    label="Салбар"
                    type="text"
                  />
                  <InputField
                    name="location"
                    onChange={handleInputChange}
                    desc="БЗД 3-хороо"
                    label="Байршил солих"
                    type="text"
                  />
                  <p className="text-[13px] leading-none mb-2.5 text-violet12 block">
                    Зурагаа оруулна уу
                  </p>
                  <div
                    className="border text-[15px] border-blue-500 text-blue-500 shadow-blue-500 px-3 py-2 rounded"
                    onClick={() => {
                      takeImg(cinemaImg);
                    }}
                  >
                    <Cloudinary setFunction={setCinemaImg} />
                  </div>
                  <div className="gap-3 ">
                    <button
                      className="p-2 bg-green-300 text-green-700 rounded-xl m-2"
                      onClick={() => {
                        setIsOpen(false), putCinema(form, branch, cinema);
                      }}
                    >
                      Хадгалах
                    </button>
                    <button
                      className="p-2 bg-red-300 text-red-700 rounded-xl m-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Болих
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CinemaPut;
