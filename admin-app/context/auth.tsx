"use client";

import { useRouter } from "next/navigation";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import myAxios from "@/components/utils/axios";
import { CinemaContext } from ".";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

interface IUser {
  email: string;
  password?: string;
  avatarUrl?: string;
  _id?: string;
  fullName?: string;
}

interface IAuthContext {
  login: (password: string, email: string) => Promise<void>;
  updateUserImage: () => Promise<void>;
  setAvatarImage: (img: any) => void;
  deleteUser: (id: string) => Promise<void>;
  getAllUser: () => void;
  logout: () => void;
  loginuser: IUser | null;
  token: string;
  allUser: any;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [loginuser, setUser] = useState<IUser | null>(null);
  const [allUser, setAllUser] = useState<any | null>([]);
  const [token, setToken] = useState<string>("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [avatarImage, setAvatarImage] = useState<any>(null);

  const setUserData = (data: any) => {
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  };

  const getAllUser = async () => {
    try {
      const { data } = await myAxios.get("/user/allcustomer");
      console.log(data, "alluser");
      setAllUser(data.allCustomers);
    } catch (error) {
      console.error("cannot get all user", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { data } = await myAxios.post("/admin/login", {
        userEmail: email,
        userPassword: password,
      });
      console.log(data, "datataatatatatata");
      setUserData(data);
      getAllUser();
      handleNext();
      toast.success("Амжилттай нэвтэрлээ");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    } finally {
      setLoading(false);
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
      router.push("/");
    }, 1000);
  };

  const authLogged = () => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      getAllUser();
    }
  };

  const handleNext = () => {
    router.replace("/");
  };

  const deleteUser = async (id: string) => {
    try {
      setLoading(true);
      const data = await myAxios.post(`/user/deletecustomer`, {
        userId: id,
      });
      setRefresh(!refresh);
      toast("Хэрэглэгч аммжилттай устлаа", data);
    } catch (error) {
      toast("Хэрэглэгч устгахад!");
    } finally {
      setLoading(false);
    }
  };

  const getUser = async () => {
    try {
      const { data } = await myAxios.get("/user/customer", {
        params: { userId: loginuser?._id as string },
      });
      setUserData(data);
      console.log(data, "newloginuser");
    } catch (error) {}
  };

  const updateUserImage = async () => {
    try {
      setLoading(true);
      const data = await myAxios.put(`/user/updatecustomer`, {
        email: loginuser?.email,
        avatarUrl: avatarImage,
      });
      getUser();
      setRefresh(!refresh);

      console.log("User updated successfully", data);
    } catch (error) {
      console.error("Cannot update user", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    authLogged();
    getAllUser();
  }, [refresh]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        loginuser,
        token,
        setUser,
        getAllUser,
        allUser,
        deleteUser,
        setAvatarImage,
        updateUserImage,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
