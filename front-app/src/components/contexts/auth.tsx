"use client";
import { useRouter } from "next/navigation";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

import myAxios from "@/components/utils/axios";
import { AxiosError } from "axios";

interface IUser {
  email: string;
  password?: string;
  googleId?: string | null;
}

interface IAuthContext {
  login: (email: string, password: string) => Promise<void>;
  signup: (password: string, email: string) => Promise<void>;
  getUser: (id: any) => Promise<void>;
  logout: () => void;
  loginuser: any;
  token: any;
  setUser: any;
  loading: boolean;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const { toast } = useToast();

  const handleNext = () => {
    router.replace("/");
  };

  const setUserData = (data: any) => {
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", JSON.stringify(data.token));
  };

  const login = async (email: string, password: string) => {
    try {
      const { data } = await myAxios.post("/user/login", {
        userEmail: email,
        userPassword: password,
      });
      setUserData(data);
      router.push("/");
      toast({
        title: "Амжилттай нэвтрэлээ!",
        description: "Enjoy your journey ^.^ 🫰",
        duration: 1500,
      });
      setTimeout(() => {
        logout();
      }, 6000 * 10000);
      console.log(data, "alsjkdsaljdk");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          title: "Aldaa garlaa",
          variant: "destructive",
          description: `Aldaa = ${error.response?.data.message}`,
        });
      }
    }
  };

  const getCurrentUser = async () => {
    try {
      const { data } = await myAxios.get("/auth/google/success", {
        withCredentials: true,
      });
      setUser(data.user);
      router.push("/");
      toast({
        title: "Амжилттай нэвтрэлээ!",
        description: "Enjoy your journey ^.^ 🫰",
        duration: 1500,
      });
    } catch (error) {}
  };

  const signup = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { data } = await myAxios.post("/user/signup", {
        email: email,
        password: password,
      });
      toast({
        title: "Амжилттай бүртгүүллээ",
        description:
          "Та нэвтрэх хэсгээр нэвтэрч орно уу! Enjoy your journey ^.^ 🫰",
      });
      console.log("agagagahahhaahhahahahaahhaahahhahaah", data);
      handleNext();
      setRefresh(!refresh);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `There was a problem with your request. ${error} `,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };

  const [loginuser, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const authLogged = () => {
    if (localStorage.getItem("token")) {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      if (user && token) {
        setUser(JSON.parse(user));
        setToken(JSON.parse(token));
      }
    }
  };
  const logout = () => {
    setIsLoggingOut(true);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken("");
    setTimeout(() => {
      setIsLoggingOut(false);
    }, 1000);
    router.push("/");
  };

  const getUser = async (id: any) => {
    try {
      const { data } = await myAxios.get("/user/customer", {
        params: { userId: id },
      });
      setUserData(data);
      console.log(data, "newloginuser");
    } catch (error) {}
  };

  useEffect(() => {
    authLogged();
    getCurrentUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        signup,
        logout,
        loginuser,
        token,
        setUser,
        getUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
