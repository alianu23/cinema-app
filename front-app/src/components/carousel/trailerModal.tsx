import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type Props = {
  trailers: string;
};

export default function Trailermodal({ trailers }: Props) {
  const [trailerClose, setTrailerClose] = useState(true);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-24 h-6 text-[12px] md:w-28 md:h-9 font-medium md:text-[14px] text-black bg-white hover:text-white">
          Трейлер
        </Button>
      </DialogTrigger>
      {trailerClose && (
        <DialogContent className=" bg-black border-none">
          <iframe
            src={trailers}
            className="w-[280px] sm:w-[466px] sm:h-[240px] flex justify-center m-auto"
            allowFullScreen
            loading="lazy"
          />
        </DialogContent>
      )}
    </Dialog>
  );
}
