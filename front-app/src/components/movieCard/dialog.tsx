"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cinemas } from "./cinemas";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { Resizable } from "./resizeImage";
import { MovieContext, ShowtimeContext, useAuth } from "..";
import { useToast } from "@/components/ui/use-toast";

type ICardProps = {
  card: any;
};

export function DialogOpen({ card }: ICardProps) {
  const { showtimesByMovie, setShowtimesByMovie, showtimes } =
    useContext(ShowtimeContext);
  const [openVideo, setOpenvideo] = useState(false);
  const { setSelectedMovieId, setSelectedMovie, movies } =
    useContext(MovieContext);
  const router = useRouter();
  const { loginuser } = useAuth();
  const { toast } = useToast();

  const handleNext = (id: string) => {
    setSelectedMovieId(id);
    router.push("/order");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={card.poster.vertical}
          className="h-[380px] w-full rounded-t-lg border-none relative"
        />
      </DialogTrigger>
      <DialogContent className="p-0 bg-slate-900 w-[95%] h-[95%] border-none rounded-md overflow-auto">
        <div className="flex flex-col backdrop-blur-sm p-6 justify-center">
          <div className="rounded-lg overflow-hidden w-48 flex justify-center items-center">
            <img src={card.poster.vertical} alt={card.title + " image"} />
          </div>
          <div className="flex flex-col text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mt-4">
              {card.title}
            </h1>
            <div className="flex gap-2 items-center mt-4">
              <p className="text-base font-bold">Найруулагч:</p>
              <div className="text-sm">{card.director}</div>
            </div>
            <div className="flex gap-2 items-center mt-2">
              <p className="text-base font-bold">Төрөл:</p>
              <div className="text-sm">{card.genre}</div>
            </div>
            <div className="flex mt-6 gap-4">
              <Button
                className="bg-rose-500 px-10 w-32 h-8"
                onClick={() => {
                  if (loginuser) {
                    router.push("/order"),
                      setSelectedMovieId(card._id),
                      setShowtimesByMovie(
                        showtimes.filter(
                          (showtime: any) => showtime.movie == card._id
                        )
                      );
                    setSelectedMovie(
                      movies.filter((movie: any) => {
                        return movie._id === card._id;
                      })[0]
                    );
                  } else {
                    toast({
                      variant: "default",
                      title: "Анхаарна уу!",
                      description:
                        "Уучлаарай та заавал нэвтэрсэн үед кино захиалах боломжтой. ^.^ 🫰",
                      duration: 2500,
                    });
                    console.log("owrked");
                  }
                }}
              >
                Захиалах
              </Button>{" "}
              <Button
                onClick={() => {
                  setOpenvideo(true);
                }}
                className="px-10 w-32 h-8 bg-white text-black hover:text-white"
              >
                Трейлер
              </Button>
              {openVideo && (
                <div className="bg-black absolute flex justify-center">
                  <Button
                    className="bg-black size-7 rounded-sm text-white hover:text-red-500 hover:bg-black absolute right-0"
                    onClick={() => {
                      setOpenvideo(false);
                    }}
                  >
                    ✖
                  </Button>
                  <iframe
                    src={card.movie_trailer}
                    allowFullScreen
                    loading="lazy"
                    title={card.synopsis}
                    className="w-[308px] sm:w-[466px] sm:h-[240px]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute -z-10 top-0 opacity-30">
          <img src={card.poster.vertical} alt="" className="w-[640px]" />
        </div>
        <div className="bg-gradient-to-b from-slate-900 to-slate-600 text-white pl-6 mt-[-20px]">
          <p className="text-xl font-bold mt-6">Тухай: </p>
          <div className="text-sm mt-4 mr-4">{card.synopsis}</div>
          <p className="text-xl font-bold mt-4">Дүрүүдэд: </p>
          <div className="flex gap-6 mt-4">
            {card.cast.map((cast: any, i: any) => {
              return (
                <div
                  key={i}
                  className="flex flex-col gap-4 overflow-hidden max-w-20 text-sm text-center"
                >
                  <Avatar className="rounded-full size-20 items-center ">
                    <AvatarImage
                      src={cast.img}
                      className="object-cover"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p>{cast.name}</p>
                </div>
              );
            })}
          </div>
          <p className="text-xl font-bold mt-4">Кино театрууд:</p>
          <div className="flex gap-4 mt-4 pb-10">
            {cinemas.map((cinema: any, i: any) => {
              return (
                <div
                  key={i}
                  className="flex rounded-lg size-12 overflow-hidden justify-center items-center"
                >
                  <img src={cinema.img} alt={cinema.name} />
                </div>
              );
            })}
          </div>
          <Resizable card={card} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
