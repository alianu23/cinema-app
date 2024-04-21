"use client";

import { useAuth } from "..";
import myAxios from "@/components/utils/axios";

const TableTwo = () => {
  const { allUser, loginuser, deleteUser, loading } = useAuth();

  return (
    <>
      {loginuser ? (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="py-6 px-4 md:px-6 xl:px-7.5">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              Хэрэглэгчдийн жагсаалт
            </h4>
          </div>

          <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
            <div className="col-span-2 flex items-center">
              <p className="font-medium">И-мэйл</p>
            </div>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="font-medium">Нэр</p>
            </div>
            <div className="col-span-1 flex items-center text-center">
              <p className="font-medium">Утас</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Тасалбарын тоо</p>
            </div>
            <div className="col-span-1 flex items-center"></div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Эрх</p>
            </div>
          </div>

          {allUser?.map((user: any, key: string) => (
            <div
              className="grid grid-cols-6 border-t  border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
              key={key}
            >
              <div className="col-span-2 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row items-center">
                  <div className="">{user.email}</div>
                  <p className="text-sm text-black dark:text-white"></p>
                </div>
              </div>
              <div className="col-span-2 hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">
                  {user.name ? user.name : "Хэрэглэгчийн нэр"}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {user.phoneNumber ? user.phoneNumber : "99119911"}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white ml-14">
                  {user.tickets.length}
                </p>
              </div>
              <div className="col-span-1 flex items-center gap-8 ml-28">
                <p className="text-sm text-meta-3">Хэрэглэгч</p>
                <button
                  disabled={loading}
                  className="text-sm text-white cursor-pointer rounded-lg border bg-orange-500 px-4 py-2 transition hover:bg-opacity-90"
                  onClick={() => {
                    deleteUser(user._id);
                    console.log("clicked", user._id);
                  }}
                >
                  Устгах
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between gap-5 ">
          <div className="text-2xl">
            Хэрэглэгчийн жагсаалтыг харахын тулд та заавал нэвтэрнэ үү.
          </div>
          <a
            className="max-w-[200px] cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
            href="/signin"
          >
            Нэвтрэх
          </a>
        </div>
      )}
    </>
  );
};

export default TableTwo;
