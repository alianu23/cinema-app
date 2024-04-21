"use client";

import { Button } from "@/components/ui";
import React, { ChangeEvent, useState } from "react";
import { usePassword } from "@/components/contexts/passwordrecover";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

interface IStepProps {
  email: string;
  password: string;
  rePassword: string;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ChangeNewPassword = ({ handleChangeInput }: IStepProps) => {
  const { handleChangeToNewPassword, user, loading } = usePassword();
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isShowPassword1, setIsShowPassword1] = useState(true);
  return (
    <div className="bg-slate-700">
      <div className="flex items-center flex-col justify-center m-auto p-[32px] gap-8">
        <p className="text-center text-[28px] text-bold">Нууц үг өөрчлөх</p>
        <div className="flex items-center bg-slate-300 relative text-black ">
          <input
            placeholder="Шинэ нууц үг оруулах"
            onChange={handleChangeInput}
            name="password"
            type={isShowPassword ? "password" : "text"}
            className="py-2 px-4 bg-slate-300 w-[260px]"
          />
          {isShowPassword == false ? (
            <IoIosEye
              size={20}
              onClick={() => {
                setIsShowPassword(!isShowPassword);
              }}
              className="absolute right-2"
            />
          ) : (
            <IoIosEyeOff
              size={20}
              onClick={() => {
                setIsShowPassword(!isShowPassword);
              }}
              className="absolute right-2"
            />
          )}
        </div>
        <div className="flex items-center bg-slate-300 relative text-black">
          <input
            placeholder="Шинэ нууц үг оруулах"
            onChange={handleChangeInput}
            name="rePassword"
            type={isShowPassword1 ? "password" : "text"}
            className="py-2 px-4 bg-slate-300 w-[260px]"
          />
          {isShowPassword1 == false ? (
            <IoIosEye
              size={20}
              onClick={() => {
                setIsShowPassword1(!isShowPassword1);
              }}
              className="absolute right-2"
            />
          ) : (
            <IoIosEyeOff
              size={20}
              onClick={() => {
                setIsShowPassword1(!isShowPassword1);
              }}
              className="absolute right-2"
            />
          )}
        </div>
        <div className="flex w-[50%] ">
          <Button
            disabled={loading}
            onClick={() => {
              handleChangeToNewPassword(user.email, user.password);
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

export default ChangeNewPassword;
