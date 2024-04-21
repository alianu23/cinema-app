import React from "react";

export const PaymentQr = () => {
  return (
    <div className=" flex items-center justify-center flex-col bg-slate-900 mb-32">
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center text-white text-2xl sm:text-3xl  font-bold mt-12">
          Төлбөр амжилттай хийгдээ!
        </div>
        <div className="text-center w-80 sm:w-[400px] text-sm sm:text-base text-slate-400 mt-8 ">
          Төлбөрийн мэдээлэл болон тасалбарын QR-кодыг таны бүртгүүлсэн EMAIL
          хаяг руу илгээлээ.
        </div>
        <div className="flex flex-col  justify-center items-center border-2 border-dotted mt-8 border-red-500 w-80 sm:w-96 px-4 sm:px-2 py-3 sm:py-5">
          <div className=" text-sm text-center text-slate-200 sm:text-base">
            Та кино эхлэхээс өмнө тасалбар шалгагч дээр энэхүү QR-кодыг үзүүлж
            шууд орох боломжтой. Эсвэл KIOSK төхөөрөмжөөс баримтаа хэвлэж авж
            болно.
          </div>
          <img src="./clientqr.png" className="size-48 sm:size-56 mt-8 mb-4" />
        </div>
      </div>
    </div>
  );
};
