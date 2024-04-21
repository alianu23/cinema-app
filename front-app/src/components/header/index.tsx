"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ProfileDrawer } from "../profileDrawer";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useContext, useState } from "react";
import { HeadDrawer } from "./drawer";

const headers = [
  {
    header: "Нүүр",
    href: "/",
  },
  {
    header: "Удахгүй дэлгэцнээ",
    href: "/comingsoon",
  },
  {
    header: "Үйл ажиллагаа",
    href: "/event",
  },
  {
    header: "Тасалбар",
    href: "/ticket",
  },
];
export const Header = () => {
  const isActive = usePathname();

  return (
    <div className=" fixed flex backdrop-blur-md w-[100%] h-[60px] sm:h-[80px] md:h-[100px] z-10 text-white p-3 text-[10px] sm:text-[16px] justify-center">
      <div className="header flex items-center">
        <div className="font-bold text-base absolute left-0 ml-4 lg:ml-8  text-red-500">
          <div>CENTRAL</div>
          <div>CINEMA</div>
        </div>
        <div className="pointer-events-none opacity-0 lg:pointer-events-auto lg:opacity-100 flex flex-row gap-16 absolute items-center right-0 mr-8">
          {headers.map((header, i) => (
            <Link
              className={`font-bold transition-all duration-75  ${
                isActive === header.href
                  ? "text-red-500"
                  : "hover:text-red-400 "
              }`}
              key={i}
              href={header.href}
            >
              {header.header}
            </Link>
          ))}
          {<ProfileDrawer />}
        </div>
        <div className="">
          <HeadDrawer />
        </div>
      </div>
    </div>
  );
};
