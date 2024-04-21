"use client";
import { ChangeEvent, useState, Fragment } from "react";

import * as Tabs from "@radix-ui/react-tabs";
import { DialogText } from "./dialog-text";
import { DialogFile } from "./dialog-file";
import { Dialog, Transition } from "@headlessui/react";
import { useEvent } from "@/context";
import { DeleteDialog } from "@/components/utils";
import { Button } from "@radix-ui/themes";

export const EventEdit = ({ event }: any) => {
  const { isLoading, deleteEvent, updateEvent } = useEvent();
  const [eventImage, setImage] = useState("");
  const [dataEvent, setEventData] = useState({
    name: "",
    date: "",
    link: "",
    about: "",
    location: "",
    addition: "",
    image: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleChange = (name: string, value: string) => {
    setEventData({ ...dataEvent, [name]: value });
  };

  const handleAdd = () => {
    updateEvent(dataEvent, event._id);
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const takeImg = (e: string) => {
    setEventData({ ...dataEvent, image: e });
  };

  return (
    <>
      <div className=" inset-0  ">
        <img
          onClick={openModal}
          src={event.image}
          alt="Bold typography"
          style={{
            display: "block",
            objectFit: "cover",
            width: "100%",
            height: 350,
            backgroundColor: "var(--gray-5)",
          }}
        />
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
                <Dialog.Panel className=" max-w-xxl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Эвент
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
                        event={event}
                        handleInputChange={handleInputChange}
                      />
                    </Tabs.Content>
                    <Tabs.Content
                      className="grow p-5 bg-white rounded-b-md outline-none"
                      value="tab2"
                    >
                      <DialogFile
                        handleInputChange={handleInputChange}
                        setFile={setImage}
                        event={event}
                        takeImg={takeImg}
                        image={eventImage}
                      />
                    </Tabs.Content>
                  </Tabs.Root>
                  <div className="mt-4 flex gap-4">
                    <Button>
                      <DeleteDialog
                        event={event}
                        handleDelete={deleteEvent}
                        title={"Event устгах"}
                        label={"Эвентийг устгахдаа итгэлтэй байна уу?"}
                      />
                    </Button>

                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      disabled={isLoading}
                      onClick={handleAdd}
                    >
                      Эвент засах
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
