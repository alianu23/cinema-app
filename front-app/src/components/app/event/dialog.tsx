import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

interface IEventProps {
  event: any;
}

export function EventDialog({ event }: IEventProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-slate-900 absolute bottom-0 right-0 mr-2 mb-2 w-24 h-6 text-[12px] md:w-28 md:h-9 font-medium md:text-[14px] text-white  hover:bg-red-500">
          Дэлгэрэнгүй
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95%] h-[95%] h-max-[150%] rounded-lg bg-slate-900 border-4 border-slate-800 overflow-auto">
        <div className="w-full mt-6 flex flex-col items-center ">
          <img
            className="rounded-md shadow-2xl"
            src={event.image}
            alt="image"
          />
          <div className="text-2xl sm:text-3xl md:text-4xl absolute left-0 ml-8 mt-2 p-2 rounded-xl bg-opacity-30 bg-black text-white">
            {event.name}
          </div>
          <div className="text-gray-300 mt-4">
            <div>
              <h5 className="py-3 font-bold sm:text-xl lg:text-2xl">Тухай</h5>
              <p className="text-xs sm:text-sm text-wrap">{event.about}</p>
            </div>
            <div className="mt-4">
              <h5 className="py-3 font-bold sm:text-xl lg:text-2xl">
                Үйл ажиллагаа
              </h5>
              <p className="text-xs sm:text-sm text-wrap">{event.addition}</p>
            </div>
            <div className="mt-4">
              <h6 className="py-3 font-bold sm:text-xl lg:text-2xl">Байршил</h6>
              <p className="text-xs sm:text-sm text-wrap">{event.location}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
