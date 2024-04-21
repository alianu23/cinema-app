import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Tabs from "@radix-ui/react-tabs";
import { ChangeEvent, useState } from "react";
import DialogText from "./dialog-text";

type Props = {};

const Modal = (props: Props) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="text-violet11 mb-5 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
        Үзвэрийн хуваарь нэмэх
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[650px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 mb-5 text-[17px] font-medium text-center">
          Үзвэрийн хуваарь нэмэх
        </Dialog.Title>

        <Tabs.Root className="flex flex-col w-full " defaultValue="tab1">
          <Tabs.List
            className="shrink-0 flex border-b border-mauve6"
            aria-label="Manage your account"
          ></Tabs.List>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab1"
          >
            <p className="mb-5 text-mauve11 text-[15px] leading-normal text-center">
              Кино Үзвэрийн Хуваарь Нэмнэ үү.
            </p>
            <DialogText />
          </Tabs.Content>
        </Tabs.Root>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild></Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
