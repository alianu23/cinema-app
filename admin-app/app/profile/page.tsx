"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";

import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "@/context";
import Link from "next/link";

const Profile = () => {
  const { loginuser } = useAuth();
  return (
    <>
      <Breadcrumb pageName="Бүртгэл" />
      {loginuser ? (
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="relative z-0 h-35 md:h-65">
            <Image
              src={"/images/cover/cover-03.jpeg"}
              alt="profile cover"
              className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
              width={970}
              height={260}
            />
            <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4"></div>
          </div>
          <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
            <div className="relative z-0 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
              <div className="relative flex drop-shadow-2">
                <div className="flex items-center gap-2">
                  {loginuser?.avatarUrl ? (
                    <img
                      src={loginuser?.avatarUrl}
                      className="w-28 h-28 sm:w-[152px] sm:h-[152px] object-cover rounded-full"
                    />
                  ) : (
                    <FaUserCircle className="w-28 h-28 sm:w-[152px] sm:h-[152px]" />
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                {loginuser?.email}
              </h3>
              <p className="font-medium">Хэрэглэгч</p>

              <div className="mx-auto max-w-180">
                <p className="mt-4.5"></p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-4 text-lg">
          <h1>Та нэвтэрээгүй байна.</h1>
          <Link href="/signin" className="text-blue-500">
            Нэвтрэх хэсэгрүү шилжих
          </Link>
        </div>
      )}
    </>
  );
};

export default Profile;
