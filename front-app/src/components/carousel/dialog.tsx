import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cinemas } from "../movieCard/cinemas";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { MovieContext } from "..";
import { Resizable } from "./resizeImage";

type ICardProps = {
  movie: any;
};

export function DialogOpen({ movie }: ICardProps) {
  const router = useRouter();
  const { setSelectedMovieId } = useContext(MovieContext);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-24 h-6 text-[12px] md:w-28 md:h-9 font-medium md:text-[14px] text-white bg-red-500">
          Дэлгэрэнгүй
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-slate-900 w-[95%] h-[95%] border-none rounded-md overflow-auto">
        <div className="flex flex-col backdrop-blur-sm p-6 justify-center">
          <div className="rounded-lg overflow-hidden w-48 flex justify-center items-center">
            <img src={movie.poster.vertical} alt={movie.title + " image"} />
          </div>
          <div className="flex flex-col text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mt-4">
              {movie.title}
            </h1>
            <div className="flex gap-2 items-center mt-4">
              <p className="text-base font-bold">Найруулагч:</p>
              <div className="text-sm">{movie.director}</div>
            </div>
            <div className="flex gap-2 items-center mt-2">
              <p className="text-base font-bold">Төрөл:</p>
              <div className="text-sm">{movie.genre}</div>
            </div>
            <div className="flex mt-6">
              <Button
                className="bg-rose-500 px-10 w-32 h-8"
                onClick={() => {
                  router.push("/order"), setSelectedMovieId(movie._id);
                }}
              >
                Захиалах
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -z-10 top-0 opacity-30">
          <img src={movie.poster.vertical} alt="" className="w-[640px]" />
        </div>
        <div className="bg-gradient-to-b from-slate-900 to-slate-600 text-white pl-6 mt-[-20px]">
          <p className="text-xl font-bold mt-6">Тухай: </p>
          <div className="text-sm mt-4 mr-4">{movie.synopsis}</div>
          <p className="text-xl font-bold mt-4">Дүрүүдэд: </p>
          <div className="flex gap-6 mt-4">
            {movie.cast.map((cast: any, i: any) => {
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
          <Resizable card={movie} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
