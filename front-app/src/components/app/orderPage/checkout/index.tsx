"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { any, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "../../../ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useContext } from "react";
import { OrderContext } from "@/components/contexts/order";
import { AuthContext, MovieContext, ShowtimeContext } from "@/components";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().includes("@", {
    message: "И-мэйл хаягаа зөв оруулна уу?",
  }),
  phone: z.string().refine((value) => /^\d{8}$/.test(value), {
    message: "Утасны дугаар буруу байна",
  }),
  banknumber: z.string().refine((value) => /^\d{9}$/.test(value), {
    message: "Дансны дугаар буруу байна",
  }),
  cvv: z.string().refine((value) => /^\d{3}$/.test(value), {
    message: "CVV дугаар буруу байна",
  }),
  paymentMethod: z.string(),
  paymentAmount: z.number(),
});

export function Checkout({ handleForwardStep, handleBackwardStep }: any) {
  const { loginuser } = useContext(AuthContext);
  const { order, setOrder, createOrder } = useContext(OrderContext);
  const { selectedMovieId, movies } = useContext(MovieContext);
  const { updateShowtime, orderSeats } = useContext(ShowtimeContext);

  const selectedMovie = movies.find((movie) => movie._id === selectedMovieId);

  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      banknumber: "",
      cvv: "",
      paymentMethod: "Qpay",
      paymentAmount: totalPrice,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {}

  const router = useRouter();

  const goBackAlert = async () => {
    await Swal.fire({
      position: "center",
      title: "Та буцахдаа итгэлтэй байна уу?",
      icon: "question",
      text: "Буцвал таны сонгосон кино устахыг анхаарна уу.",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Тийм",
      confirmButtonColor: "#cc3300",
      preConfirm: () => {
        router.push("/");
      },
      cancelButtonText: "Үгүй",
      cancelButtonColor: "#339900",
    });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col  justify-between bg-slate-900 py-12 rounded-xl mb-32"
      >
        <h1 className="font-bold text-2xl sm:text-3xl justify-center flex text-white mb-12">
          Checkout
        </h1>
        <div className="flex flex-col md:flex-row md:gap-16">
          <div className="flex flex-col gap-6 h-full text-white">
            <div className="">
              <div className="mb-8">
                <p className="font-bold">1. Мэдээллээ оруулна уу</p>
                <div className="flex gap-2 mt-3 flex-col">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl className="w-64 ">
                          <div>
                            <Label
                              className={`text-[10px] transition-opacity ${
                                field.value ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              И-мэйл хаяг
                            </Label>
                            <Input
                              placeholder="И-мэйл хаяг"
                              className="outline-none rounded-none mt-[-8px] border-t-0 border-r-0 border-l-0 border-slate-400 hover:border-white"
                              {...field}
                              value={loginuser?.email}
                            />
                          </div>
                        </FormControl>
                        <div>
                          <FormMessage className="text-[10px] absolute" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl className="w-64">
                          <div>
                            <Label
                              className={`text-[10px] transition-opacity ${
                                field.value ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              Утасны дугаар
                            </Label>
                            <Input
                              className="outline-none rounded-none mt-[-8px] border-t-0 border-r-0 border-l-0 border-slate-400 hover:border-white"
                              placeholder="Утасны дугаар"
                              {...field}
                              value={loginuser?.phone}
                            />
                          </div>
                        </FormControl>
                        <div>
                          <FormMessage className="text-[10px] absolute" />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p>2. Төлбөр төлөх сонголт</p>
                <div className="grid grid-cols-2">
                  {banks.map((e, i) => (
                    <Button key={i} type="button">
                      <img
                        src={e.imgsrc}
                        width={"20px"}
                        style={{ marginRight: "4px" }}
                      />
                      {e.name}
                    </Button>
                  ))}
                </div>
                <div className="flex flex-col gap-2 mt-[-15px]">
                  <FormField
                    control={form.control}
                    name="banknumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl className="w-64">
                          <div>
                            {" "}
                            <Label
                              className={`text-[10px] transition-opacity ${
                                field.value ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              Дансны дугаар
                            </Label>
                            <Input
                              className="outline-none rounded-none mt-[-8px] border-t-0 border-r-0 border-l-0 border-slate-400 hover:border-white"
                              placeholder="Дансны дугаар"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <div>
                          <FormMessage className="text-[10px] absolute" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl className="w-64">
                          <div>
                            <Label
                              className={`text-[10px] transition-opacity ${
                                field.value ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              CVV
                            </Label>
                            <Input
                              className="outline-none rounded-none mt-[-8px] border-t-0 border-r-0 border-l-0 border-slate-400 hover:border-white"
                              placeholder="CVV"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <div>
                          <FormMessage className="text-[10px] absolute" />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full flex justify-center flex-col m-auto mt-12 md:mt-0">
            <div className="w-56 h-80 bg-red-100 rounded-sm relative text-white shadow-2xl flex justify-center m-auto">
              <img
                className="relative object-cover w-full h-full rounded-sm"
                src={`${selectedMovie?.poster.vertical}`}
              />
            </div>
            <div className="flex flex-col justify-center gap-1 ">
              <h1 className="text-slate-100 my-2 text-center text-xl font-bold">
                {selectedMovie?.title}
              </h1>
              {ordersDetail.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="flex justify-between text-slate-100 text-[12px] w-[250px]"
                  >
                    <p>
                      {e.name} <span> x{e.quantity}</span>
                    </p>
                    <p>{e.price}₮</p>
                  </div>
                );
              })}
              <div className="flex justify-between text-slate-100 text-[12px] w-[250px]">
                <p>Нийт:</p>
                <p>{totalPrice}₮</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center m-auto flex-col gap-2 mt-4 md:mt-12">
          <Button
            type="submit"
            className="w-64 bg-red-500 mt-2 hover:bg-slate-700"
            onClick={() => {
              const values = form.getValues();
              createOrder(values);
              updateShowtime();
              handleForwardStep();
            }}
          >
            Төлөх
          </Button>
          <Button
            className="text-slate-100 bg-slate-800 z-20 w-64 hover:bg-red-500"
            onClick={() => {
              goBackAlert();
            }}
          >
            Буцах
          </Button>
        </div>
      </form>
    </Form>
  );
}

const ordersDetail = [
  { name: "Том хүн", quantity: "2", price: "36000" },
  { name: "Хүүхэд", quantity: "1", price: "8000" },
];

const totalPriceForEachItem = ordersDetail.map((item) => ({
  ...item,
  totalPrice: Number(item.quantity) * Number(item.price),
}));

const totalPrice = totalPriceForEachItem.reduce(
  (acc, item) => acc + item.totalPrice,
  0
);

const banks = [
  { name: "Khan Bank", imgsrc: "/banklogos/khaanbank.png" },
  { name: "Khas Bank", imgsrc: "/banklogos/khasbank.png" },
  { name: "Social Pay", imgsrc: "/banklogos/socialpay.png" },
  { name: "TDB", imgsrc: "/banklogos/tdb.png" },
];
