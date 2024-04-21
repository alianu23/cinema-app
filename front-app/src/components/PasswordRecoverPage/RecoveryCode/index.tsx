import React, { ChangeEvent } from "react";
import { usePassword } from "@/components/contexts/passwordrecover";
import { Button } from "@/components/ui";

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
  const { handleSendOtp, user, loading } = usePassword();

  return (
    <div className="bg-slate-700">
      <div className="flex items-center flex-col justify-center m-auto p-[32px] gap-6">
        <p className="text-center text-[28px]">Нууц үг сэргээх</p>
        <div className="w-full">
          <p className="text-[16px] text-white  w-[260px]">
            Таны <span style={{ color: "orange" }}>{email}</span> хаяг руу нэг
            удаагийн код илгээлээ.
          </p>
        </div>
        <input
          className="text-black py-2 px-4 bg-slate-300 w-[260px] "
          name="otp"
          placeholder="Код оруулна уу"
          onChange={handleChangeInput}
        />
        <div className="flex w-[50%] ">
          <Button
            disabled={loading}
            onClick={() => {
              handleSendOtp(user.email, user.otp);
            }}
            className="w-full py-4 bg-[#1f4682]"
          >
            Үргэлжлүүлэх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecoveryCode;
