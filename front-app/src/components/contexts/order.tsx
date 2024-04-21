"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/components/utils/axios";
import { Dispatch, SetStateAction } from "react";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { AuthContext, ShowtimeContext, useAuth } from ".";

interface IOrderContext {
  setOrder: Dispatch<
    SetStateAction<{ paymentAmount: string; paymentMethod: string }>
  >;
  order: any;
  createOrder: (form: any) => Promise<void>;
}

export const OrderContext = createContext({} as IOrderContext);

export const OrderProvider = ({ children }: PropsWithChildren) => {
  const [order, setOrder] = useState({ paymentAmount: "", paymentMethod: "" });
  const { setOrderSeats, updateShowtime } = useContext(ShowtimeContext);
  const { token } = useContext(AuthContext);
  const { newTicketId } = useContext(ShowtimeContext);
  const { setIsCreateOrderWorked } = useContext(ShowtimeContext);
  const [refresh, setRefresh] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);
  const { loginuser, getUser } = useAuth();

  const createOrder = async (form: any) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      setLoading(true);
      const {
        data: { lastOrder },
      } = await myAxios.post(
        "/order",
        {
          paymentAmount: form.paymentAmount,
          paymentMethod: form.paymentMethod,
          ticketId: newTicketId,
        },
        config
      );
      setIsCreateOrderWorked(true);
      getUser(loginuser._id);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {}, []);

  return (
    <OrderContext.Provider value={{ order, setOrder, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
