import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <div className="text-gray-300 bg-slate-800 overflow-hidden text-[12px] md:text-[16px] md:p-16">
      <div className="grid mx-auto flex-col  items-center justify-center  md:grid-cols-2 xl:grid-cols-2 container md:mb-16">
        <div className="flex flex-col gap-4 justify-start">
          <div className="text-xl md:text-2xl font-bold mt-12 md:mb-4">
            Central Cinema
          </div>
          <div className="font-medium mb-8">
            - Бүх кино театарыг нэг доороос!
          </div>
          <div className="font-bold text-xl md:text-2xl mb-2">Холбоос </div>
          <div className="flex flex-col gap-5 mb-12">
            <div className="flex items-center gap-2">
              <FaFacebookF className="size-6 hover:bg-blue-700 " />
              <div className="">Facebook</div>
            </div>
            <div className="flex items-center gap-2">
              <FaInstagram className="size-7 hover:text-red-400" />
              <div className="">Instagram</div>
            </div>
            <div className="flex items-center gap-2">
              <FaTwitter className="size-6 hover:text-blue-400" />
              <div className="">Twitter</div>
            </div>
          </div>
        </div>

        <div className="grid xl:flex xl:justify-center xl:mt-[-48px] md:mt-[132px]">
          <div className="flex justify-center flex-col gap-4  xl:mr-32 xl:gap-10 xl:ml-[-88px]">
            <div className="text-xl md:text-2xl mb-4 font-bold">
              Түгээмэл асуулт
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot className="size-5" />
              <div className="font-medium">
                Сүхбаатар дүүрэг, 8-р хороо, EyeCandy Tower, 5-н давхар
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaPhone className="size-4 xl:size-4" />
              <div className="font-medium ">99487463, 83837632</div>
            </div>
            <div className="flex items-center gap-2">
              <IoMdMail className="size-5" />
              <div className="font-medium">eyecandy@business.com</div>
            </div>
          </div>

          <div className="flex items-center xl:flex-col size-64">
            <div>
              <img
                src="./clientqr.png"
                className="size-[180px] xl:size-[160px]"
              />
            </div>

            <div className="flex items-center justify-center flex-col ml-[20px] xl:m-auto md:h-[160px]">
              <img
                src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                className="size-56 xl:size-40 xl:mb-[-20px]"
              />
              <img
                src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                className="size-56 xl:size-40 mt-[-160px] md:mt-[-80px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-600 w-[640px] h-[1px] flex justify-center m-auto"></div>
      <div className="font-medium flex justify-center bg-slate-800 h-16 mt-12">
        Copyright © 2024 | EYECANDY
      </div>
    </div>
  );
};

// For Mobile Devices – 320px — 480px.
// iPads and Tablets – 481px — 768px.
// Laptops and small screen – 769px — 1024px.
// Large screens and Desktops – 1025px — 1200px.
// TV and Extra Large Screens – 1201px and more.
