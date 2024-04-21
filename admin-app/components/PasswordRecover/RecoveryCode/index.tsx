import React, { ChangeEvent, useContext } from "react";
import myAxios from "@/components/utils/axios";
import { toast } from "react-toastify";
import { PasswordRecoverContext } from "@/context/passwordrecover";
import { Button } from "@radix-ui/themes";

interface IStepProps {
  email: string;
  otp: string;
  handleNext: () => void;
  changeSteps: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RecoveryCode = ({
  email,
  otp,
  changeSteps,
  handleChangeInput,
}: IStepProps) => {
  const { handleSendOtp, user } = useContext(PasswordRecoverContext);

  return (
    <div className="my-32 text-black">
      <div className="flex items-center flex-col justify-center m-auto p-[32px] gap-8">
        <p className="text-center text-[28px] ">Нууц үг сэргээх</p>
        <div className="w-full mb-[10px]">
          <p className="text-[16px]  ">
            Таны <span style={{ color: "orange" }}>{email}</span> хаяг руу
            сэргээх код илгээх болно.
          </p>
          <input
            className="text-black py-2 px-4 w-full bg-slate-300 mt-8 rounded-sm border "
            name="otp"
            placeholder="Код оруулна уу"
            onChange={handleChangeInput}
          />
        </div>
        <Button
          onClick={() => {
            handleSendOtp(user.email, user.otp);
          }}
          style={{ width: "full", padding: "20px" }}
        >
          Үргэлжлүүлэх
        </Button>
      </div>
    </div>
  );
};

export default RecoveryCode;
