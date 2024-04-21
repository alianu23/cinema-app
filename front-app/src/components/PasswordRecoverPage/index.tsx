"use client";

import React, { ChangeEvent, useState } from "react";
import EmailInput from "./EmailInput";
import RecoveryCode from "./RecoveryCode";
import ChangeNewPassword from "./ChangeNewPassword";
import { usePassword } from "../contexts/passwordrecover";

const PasswordRecoverPage = () => {
  const { activeStep, handleChangeInput, changeSteps, handleNext, user } =
    usePassword();

  return (
    <div className="mx-auto bg-slate-700  max-w-[900px] rounded-[32px] px-10 md:flex items-center justify-center max-md:mx-6">
      <div className=" max-md:flex max-md:justify-center ">
        {" "}
        <img src="forgot-password.svg" className="md:w-full w-[50%]" />
      </div>
      {activeStep === 1 && (
        <EmailInput
          email={user.email}
          handleNext={handleNext}
          changeSteps={changeSteps}
          handleChangeInput={handleChangeInput}
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
