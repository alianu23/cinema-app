"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Button, Flex } from "@radix-ui/themes";
import { useState } from "react";

export const TrailerDialog = ({ movie }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="text-violet11 mb-5 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
        >
          Трэйлер
        </button>
      </Dialog.Trigger>
      {open && (
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />

          <Dialog.Content className="data-[state=open]:animate-contentShow bg-black fixed top-[45%] left-[50%] max-h-[85vh] w-[90vw] max-w-[650px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Flex align={"center"} justify={"between"} direction={"row"}>
              <Dialog.Title className="text-white mb-5 text-[17px] font-medium">
                Трэйлер
              </Dialog.Title>
              <Button
                style={{
                  color: "white",
                  marginBottom: 20,
                  fontWeight: 600,
                  backgroundColor: "#384759",
                  paddingInline: 10,
                  paddingBlock: 6,
                  borderRadius: 5,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Хаах
              </Button>
            </Flex>

            <div>
              <iframe
                className="w-72 sm:w-[528px] sm:h-72 flex justify-center m-auto"
                src={movie.movie_trailer}
              ></iframe>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </Dialog.Root>
  );
};
