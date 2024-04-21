"use client";

import myAxios from "@/components/utils/axios";
import {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";

interface IPasswordContext {
  setUser: (
    email: string,
    password: string,
    rePassword: string,
    otp: string
  ) => void;
  user: any;
  handleNext: () => void;
  changeSteps: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  activeStep: number;
  handleChangeToNewPassword: (email: string, password: string) => void;
  handleSendOtp: (email: string, otp: string) => void;
  loading: boolean;
}

export const PasswordRecoverContext = createContext({} as IPasswordContext);

export const PasswordRecoverProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [refresh, setRefresh] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);

  const [activeStep, setActivestep] = useState(1);

  const [user, setUser] = useState<any>({
    email: "",
    password: "",
    rePassword: "",
    otp: "",
  });

  const changeSteps = () => {
    setActivestep((prev) => prev + 1);
  };

  const handleNext = async () => {
    try {
      setLoading(true);
      const { data } = await myAxios.post<any>("/verify/send-email", {
        email: user.email,
      });
      changeSteps();
    } catch (error) {
      toast({
        title: "Бүртгэлгүй и-мэйл хаяг байна. Та дахин оролдоно уу",
        variant: "destructive",
        description: `Aldaa`,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendOtp = async (email: string, otp: string) => {
    try {
      setLoading(true);
      const data = await myAxios.post("/verify/otp", {
        email,
        otp,
      });
      changeSteps();
    } catch (error) {
      toast({
        title: "OTP буруу байна",
        variant: "destructive",
        description: `Aldaa`,
      });
    } finally {
      setLoading(false);
    }
  };
  const handleChangeToNewPassword = async (email: string, password: string) => {
    try {
      setLoading(true);
      if (user.password == user.rePassword) {
        const data = await myAxios.put("/verify/changepassword", {
          email,
          password,
        });
        toast({
          title: "Нууц үг амжилттай солигдлоо.",
          variant: "default",
          description: `Amjilttai`,
        });
        router.replace("/");
      } else {
        toast({
          title: "Нууц үг зөрүүтэй байна.",
          variant: "destructive",
          description: `Aldaa`,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PasswordRecoverContext.Provider
      value={{
        setUser,
        handleNext,
        changeSteps,
        handleChangeInput,
        activeStep,
        handleChangeToNewPassword,
        handleSendOtp,
        user,
        loading,
      }}
    >
      {children}
    </PasswordRecoverContext.Provider>
  );
};

export const usePassword = () => useContext(PasswordRecoverContext);
