import React from "react";
import Link from "next/link";
import { LuPopcorn } from "react-icons/lu";

export default function NotFoundPage() {
  return (
    <div className=" flex items-center justify-center flex-col h-[900px] bg-slate-900">
      <div className="flex mt-[-40px]">
        <div>
          <h1 className="text-red-400  font-bold text-9xl flex justify-center">
            404
          </h1>
          <h1 className="text-red-400  font-bold text-3xl flex justify-center">
            ЮУ Ч ОЛДСОНГҮЙ.
          </h1>
        </div>
      </div>
      <div className="text-slate-500 mt-28 font-medium text-lg container text-center tracking-tighter">
        Туслалцаа хэрэгтэй бол 93983873, 83737363 утсанд холбогдоно уу.
      </div>
      <Link href="/">
        <div className="text-slate-300  font-medium text-2xl mt-[24px] underline">
          Буцахад энд дарна уу!
        </div>
      </Link>
      <div className="text-red-400  font-bold text-[180px] mt-[-300px] absolute opacity-5 pointer-events-none">
        404
      </div>
    </div>
  );
}
