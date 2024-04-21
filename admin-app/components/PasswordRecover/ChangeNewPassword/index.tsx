"use client";

import React, { ChangeEvent, useContext, useState } from "react";
import myAxios from "@/components/utils/axios";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { PasswordRecoverContext, usePassword } from "@/context/passwordrecover";
import { Button } from "@radix-ui/themes";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

interface IStepProps {
  email: string;
  password: string;
  rePassword: string;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ChangeNewPassword = ({
  email,
  password,
  rePassword,
  handleChangeInput,
}: IStepProps) => {
  const { handleChangeToNewPassword, user } = usePassword();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword1, setIsShowPassword1] = useState(false);
  return (
    <div className="my-32 text-black">
      <div className="flex items-center flex-col justify-center m-auto p-[32px] gap-8">
        <p className="text-center text-[28px] text-bold">Нууц үг өөрчлөх</p>
        <div className="flex items-center bg-slate-300 relative">
          <input
            placeholder="Шинэ нууц үг оруулах"
            onChange={handleChangeInput}
            name="password"
            type={isShowPassword ? "password" : "text"}
            className="py-2 px-4 bg-slate-300"
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
        <div className="flex items-center bg-slate-300 relative">
          <input
            placeholder="Шинэ нууц үг оруулах"
            onChange={handleChangeInput}
            name="rePassword"
            type={isShowPassword1 ? "password" : "text"}
            className="py-2 px-4 bg-slate-300"
          />
          {isShowPassword == false ? (
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
        <Button
          onClick={() => {
            handleChangeToNewPassword(user.email, user.password);
          }}
          style={{ width: "full", padding: "20px" }}
        >
          Үргэлжлүүлэх
        </Button>
      </div>
    </div>
  );
};

export default ChangeNewPassword;
