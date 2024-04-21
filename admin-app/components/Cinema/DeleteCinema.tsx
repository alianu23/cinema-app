"use client";

import React, { useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { CinemaContext, useCinema } from "..";

const CinemaDelete = (branch: any, cinema: any) => {
  const { deleteCinema } = useCinema();
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-red-500 text-white px-[15px] font-medium leading-none focus:shadow-black focus:outline-none">
            Устгах
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-semibold text-xl">
              Кино театр устгах
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
              Та устгахдаа итгэлтэй байна уу?
            </Dialog.Description>
            <div className="mt-[25px] flex justify-end gap-6">
              <div>
                <Dialog.Close asChild>
                  <button className="bg-blue-500 text-white hover:bg-blue-300  inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:outline-none">
                    Болих
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Close asChild>
                <button
                  onClick={() => {
                    deleteCinema(branch);
                  }}
                  className="bg-red-500 text-white hover:bg-red-300  inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:outline-none"
                >
                  Устгах
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button
                className=" hover:bg-violet4 focus: absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default CinemaDelete;
