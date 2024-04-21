import React from "react";
import { useContext, useState } from "react";
import { AltProfileDrawer } from "./altProfileDrawer";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { AuthContext } from "..";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaClock } from "react-icons/fa6";

const headers = [
  {
    header: "Нүүр",
    href: "/",
    id: 1,
  },
  {
    header: "Удахгүй дэлгэцнээ",
    href: "/comingsoon",
    id: 2,
  },
  {
    header: "Үйл ажиллагаа",
    href: "/event",
    id: 3,
  },
  {
    header: "Тасалбар",
    href: "/ticket",
    id: 4,
  },
];

export function HeadDrawer() {
  const [showDirects, setShowDirects] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleClick = () => {
    setShowDirects(!showDirects);
  };

  const isActive = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="text-white absolute right-0 text-2xl h-[50%] mt-[-16px] mr-4 lg:mr-8 lg:pointer-events-none lg:opacity-0 hover:text-red-400 cursor-pointer">
          ☰
        </div>
      </SheetTrigger>
      <SheetContent className="bg-slate-900 border-none w-56 text-slate-300 flex flex-col">
        {headers.map((header) => (
          <SheetClose asChild key={header.id}>
            <Link
              className={`font-bold transition-all duration-75  ${
                isActive === header.href
                  ? "text-red-500"
                  : "hover:text-red-400 "
              }`}
              href={header.href}
            >
              {header.header}
            </Link>
          </SheetClose>
        ))}
        {<AltProfileDrawer />}
      </SheetContent>
    </Sheet>
  );
}
