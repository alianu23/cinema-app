import { PasswordRecoverContext } from "@/context/passwordrecover";
import { Button } from "@radix-ui/themes";
import React, { ChangeEvent, useContext } from "react";

interface IStepProps {
  email: string;
  loading: boolean;
  handleNext: () => void;
  changeSteps: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput = ({ handleNext, handleChangeInput, loading }: IStepProps) => {
  return (
    <div className="my-32">
      <div className="flex items-center flex-col justify-center m-auto p-[32px] gap-8">
        <p className="text-center text-[28px] text-bold">Нууц үг сэргээх</p>
        <p className="text-start text-[14px]">
          Та бүртгэлтэй и-мэйл хаягаа оруулна уу?
        </p>
        <input
          placeholder="Имэйл хаягаа оруулна уу"
          onChange={handleChangeInput}
          name="email"
          className="py-2 px-4 w-[80%] border"
        />

        <Button
          onClick={() => {
            handleNext();
          }}
          disabled={loading}
          style={{ width: "full", padding: "20px" }}
        >
          Үргэлжлүүлэх
        </Button>
      </div>
    </div>
  );
};

export default EmailInput;
