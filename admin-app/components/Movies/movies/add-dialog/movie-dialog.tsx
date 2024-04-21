"use State";
import { Fragment, useState } from "react";

import * as Tabs from "@radix-ui/react-tabs";
import { Dialog, Transition } from "@headlessui/react";
import { DialogText } from "./dialog-text";
import { DialogFile } from "./dialog-file";
import { useAuth, useMovie } from "@/context";
import Link from "next/link";

export const MovieDialog = ({ movie }: any) => {
  const { addMovie, isLoading } = useMovie();
  const [movieData, setMovieData] = useState({
    title: "",
    synopsis: "",
    director: "",
    duration: 0,
    cast1: "",
    cast2: "",
    cast3: "",
    movie_trailer: "",
    releaseDate: "",
    genre: "",
    movieType: "",
    adult: 0,
    child: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleChange = (name: string, value: string) => {
    setMovieData({ ...movieData, [name]: value });
  };

  const [isDemo, setIsDemo] = useState(false);
  const [demo, SetDemo] = useState({
    title: "THE TIGER'S APPRENTICE",
    synopsis:
      "The story centres on a normal boy, Tom, who gets drawn into this world against his wishes when his eccentric grandmother turns out to be the guardian of the phoenix egg.",
    director: "Carlos Baena",
    duration: 82,
    cast1: "Sandra Oh",
    cast2: "Michelle Yeoh",
    cast3: "Henry Golding",
    movie_trailer: "https://www.youtube.com/embed/VgTc9zMQee8",
    releaseDate: "2024-04-04",
    genre: "Хүүхэлдэй",
    movieType: "2D",
    adult: 15000,
    child: 10000,
  });

  const demoFunc = () => {
    setIsDemo(true);
  };
  const handleAdd = () => {
    if (isDemo == false) {
      addMovie(movieData);
    } else {
      addMovie(demo);
    }

    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const { loginuser } = useAuth();
  return (
    <>
      <div className="inset-0">
        {loginuser ? (
          <button
            type="button"
            onClick={openModal}
            className="rounded-md shadow-black/20 bg-white border mb-7 px-4 py-2 text-sm font-medium text-violet11 hover:bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            Кино нэмэх
          </button>
        ) : (
          <div className="flex gap-4 text-lg mb-14">
            <h1>Та нэвтэрээгүй байна. Админ үйлдэл хийх эрхтэй</h1>
            <Link href="/signin" className="text-blue-500">
              Нэвтрэх хэсэгрүү шилжих
            </Link>
          </div>
        )}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
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
                    className="text-lg font-medium leading-6 text-gray-900 mb-4"
                  >
                    Кино нэмэх
                  </Dialog.Title>
                  <Tabs.Root
                    className="flex flex-col w-full "
                    defaultValue="tab1"
                  >
                    <Tabs.List
                      className="shrink-0 flex border-b border-mauve6"
                      aria-label="Manage your account"
                    >
                      <Tabs.Trigger
                        className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
                        value="tab1"
                      >
                        Текст{" (Алхам 1)"}
                      </Tabs.Trigger>
                      <Tabs.Trigger
                        className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
                        value="tab2"
                      >
                        Файл{" (Алхам 2)"}
                      </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content
                      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                      value="tab1"
                    >
                      <DialogText
                        demo={demo}
                        isDemo={isDemo}
                        handleInputChange={handleInputChange}
                      />
                    </Tabs.Content>
                    <Tabs.Content
                      className="grow p-5 bg-white rounded-b-md outline-none"
                      value="tab2"
                    >
                      <DialogFile
                        demo={demo}
                        isDemo={isDemo}
                        handleInputChange={handleInputChange}
                      />
                    </Tabs.Content>
                  </Tabs.Root>
                  <div className="mt-4 flex gap-4">
                    <button
                      type="button"
                      disabled={isLoading}
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={handleAdd}
                    >
                      Кино нэмэх
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      disabled={isLoading}
                      onClick={demoFunc}
                    >
                      Demo
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
