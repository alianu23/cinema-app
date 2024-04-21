import { Button } from "@/components";
import { ProfileDrawer } from "@/components/profileDrawer";
import React from "react";

const EventsBanner = () => {
  return (
    <div className="w-full h-screen max-h-[360px] mt-10 p-4 md:p-8 relative overflow-hidden rounded-t-lg block z-5  bg-[url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-black before:opacity-90 before:z-[-5] opacity-75">
      <div className="flex flex-col h-full gap-10 items-center justify-center mx-auto">
        <div className=" text-white text-2xl md:text-4xl font-bold">
          The Adventures of Robin Hood (1938)
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white text-[10px] md:text-[14px] font-mono md:w-[650px]">
            Энэ бол "баячуудыг дээрэмдэж, ядууст мөнгө өгдөг" Шервудын ойн
            алдарт босогч болон түүний хөгжилтэй хүмүүсийн хамтлагийн тухай
            сонгодог, ярвигтай, адал явдалт, хувцасны туульс/үзүүлэлт юм. Дур
            булаам Робин Гуд (Флинн) Гисбурн хотын муу сэр Гай (Ратбон),
            Ноттингемийн хорон санаат шериф (Күүпер), зальтай ханхүү Жон (Rains)
            нарын эсрэг шударга ёсны төлөө тэмцдэг.
          </p>
          <Button className=" text-[12px]  mt-[40px] px-10 py-5 font-medium md:text-[14px] text-white bg-red-500">
            Дэлгэрэнгүй
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventsBanner;
