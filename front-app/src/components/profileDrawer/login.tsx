"use client";
import React, { useContext } from "react";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { PasswordInput } from "../ui/passwordinput";
import { Separator } from "@/components/ui/separator";
import { CiFacebook } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { AuthContext } from "..";

type Props = {
  handleLinkClick: any;
};

export const Login = ({ handleLinkClick }: Props) => {
  const { login } = useContext(AuthContext);
  const formik = useFormik({
    onSubmit: ({ email, password }) => {
      login(email, password);
    },
    initialValues: { email: "", password: "" },
    validateOnChange: false,
    validateOnBlur: false,
  });
  return (
    <div className="px-14">
      <SheetHeader>
        <SheetTitle className="text-white">Нэвтрэх</SheetTitle>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        <Input
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Е-майл хаяг"
          className="bg-slate-400 border-none"
        />
        <PasswordInput
          id="current_password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          className="bg-slate-400 border-none"
          placeholder="Нууц үг"
        />
        <a href="/forgotpassword" className="text-white text-end text-[13px]">
          Нууц үг мартсан
        </a>
      </div>
      <SheetClose asChild>
        <Button
          // type="submit"
          onClick={() => {
            formik.handleSubmit();
          }}
          className="w-full py-4 bg-[#1f4682]"
        >
          Нэвтрэх
        </Button>
      </SheetClose>
      {/* <div className="flex items-center my-4 gap-1 justify-between">
        <Separator className="w-[100px]" />
        <p className="text-white">Эсвэл</p>
        <Separator className="w-[100px]" />
      </div>
      <div className="">
        <Button
          onClick={() => {
            window.open(
              "https://cinema-app-backend-iota.vercel.app/auth/google",
              "_self"
            );
          }}
          className="w-full py-4 mb-2"
        >
          <div className="w-[20px] mr-1">
            <CgMail className="h-full w-full" />
          </div>
          Gmail-ээр нэвтрэх
        </Button>
      </div> */}
      <div className="flex justify-between mt-8">
        <p className="text-white text-[14px]">Шинэ хэрэглэгч үү?</p>
        <a
          onClick={handleLinkClick}
          className="text-white text-end text-[13px] cursor-pointer"
        >
          Бүртгүүлэх
        </a>
      </div>
      <div className="flex justify-between mt-8">
        <Button
          className="w-full bg-orange-400"
          onClick={() => {
            login("guestpinecone@gmail.com", "123456789");
          }}
        >
          Дэмо
        </Button>
      </div>
    </div>
  );
};
