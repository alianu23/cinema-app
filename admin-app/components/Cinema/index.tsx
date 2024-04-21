"use client";

import { Separator } from "@radix-ui/themes";
import React, { Fragment, useContext, useState } from "react";
import { CinemaCard } from "./CinemaCard";
import { CinemaContext, useAuth, useCinema } from "@/context";
import { Dialog, Transition } from "@headlessui/react";
import { InputField } from "../utils/input-field";
import { Cloudinary } from "../utils/cloudinary-next/upload";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import DialogText from "./dialog-text";
import Link from "next/link";

const Cinema = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { cinemas, addCinema, getCinemas } = useCinema();
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const { loginuser } = useAuth();

  return (
    <>
      <Breadcrumb pageName="Cinema" />
      <div className="inset-0">
        {loginuser ? (
          <button
            type="button"
            onClick={openModal}
            className="mx-10 rounded-md bg-white border px-4 py-2 text-sm font-medium text-violet11 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            Салбар нэмэх
          </button>
        ) : (
          <div className="flex gap-4 text-lg">
            <h1>Та нэвтэрээгүй байна. Админ үйлдэл хийх эрхтэй</h1>
            <Link href="/signin" className="text-blue-500">
              Нэвтрэх хэсэгрүү шилжих
            </Link>
          </div>
        )}
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
                    Кино театр нэмэх
                  </Dialog.Title>
                  <Dialog.Description as="h4" className="text-sm my-3">
                    Кино театрын нэмэхийг хүсвэл нэмэж болно.
                    <br /> Гэхдээ ганцхан admin ууд болон Үнэнбатаас өөр хүн
                    хийж болкүүдээ хэхэ.
                  </Dialog.Description>
                  <Separator />
                  <DialogText closeModal={closeModal} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div>
        <div className="flex flex-wrap gap-5">
          <CinemaCard cinemas={cinemas} />
        </div>
      </div>
    </>
  );
};

export default Cinema;
