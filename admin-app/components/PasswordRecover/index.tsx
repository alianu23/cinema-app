"use client";

import React, { ChangeEvent, useContext, useState } from "react";
import EmailInput from "./EmailInput";
import RecoveryCode from "./RecoveryCode";
import ChangeNewPassword from "./ChangeNewPassword";
import myAxios from "@/components/utils/axios";
import { toast } from "react-toastify";
import { PasswordRecoverContext, usePassword } from "@/context/passwordrecover";

const PasswordRecoverPage = () => {
  //   const [activeStep, setActivestep] = useState(1);

  //   const [user, setUser] = useState({
  //     email: "",
  //     password: "",
  //     rePassword: "",
  //     otp: "",
  //   });

  //   const changeSteps = () => {
  //     setActivestep((prev) => prev + 1);
  //   };

  //   const handleNext = async () => {
  //     try {
  //       const { data } = await myAxios.post<any>("/verify/send-email", {
  //         email: user.email,
  //       });
  //       changeSteps();
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("И-мэйл хаяг буруу байна.");
  //     }
  //   };

  //   const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
  //     setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //   };
  const {
    activeStep,
    handleChangeInput,
    changeSteps,
    handleNext,
    user,
    loading,
  } = usePassword();

  return (
    <div className="mx-auto bg-slate-200  max-w-[448px] rounded-[32px]">
      {activeStep === 1 && (
        <EmailInput
          email={user.email}
          handleNext={handleNext}
          changeSteps={changeSteps}
          handleChangeInput={handleChangeInput}
          loading={loading}
        />
      )}
      {activeStep === 2 && (
        <RecoveryCode
          email={user.email}
          otp={user.otp}
          handleNext={handleNext}
          changeSteps={changeSteps}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 3 && (
        <ChangeNewPassword
          email={user.email}
          password={user.password}
          rePassword={user.rePassword}
          handleChangeInput={handleChangeInput}
        />
      )}
    </div>
  );
};

export default PasswordRecoverPage;
