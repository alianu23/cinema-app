import { BiCameraMovie } from "react-icons/bi";
import { LiaWalletSolid } from "react-icons/lia";
import { MdOutlineChair } from "react-icons/md";
import { TfiTicket } from "react-icons/tfi";

export const TicketConfirmation = () => {
  return (
    <ul className=" dark:text-white flex justify-center ">
      <div className="flex items-center ">
        <div className="flex-col  max-h-20">
          <button className="items-center rounded-md sm:rounded-lg md:rounded-xl bg-red-500 ml-3 sm:ml-2 md:ml-0">
            <BiCameraMovie className="w-6 h-5 sm:w-9 sm:h-[30px] md:w-12 md:h-10 text-white" />
          </button>
          <li className=" text-white text-xs flex justify-center">Байршил</li>
        </div>
      </div>
      <div className="w-10 mx-2  md:w-20 h-[1px] mt-3 sm:mt-4 md:mt-6 bg-red-500"></div>
      <div className="flex items-center ">
        <div className="flex-col  max-h-20">
          <button className="items-center rounded-md sm:rounded-lg md:rounded-xl bg-red-500 ml-2 sm:ml-1 md:ml-0">
            <MdOutlineChair className="w-6 h-5 sm:w-9 sm:h-[30px] md:w-12 md:h-10 text-white" />
          </button>
          <li className=" text-white text-xs flex justify-center">Суудал</li>
        </div>
      </div>
      <div className="w-10 mx-2  md:w-20 h-[1px] mt-3 sm:mt-4 md:mt-6 bg-red-500"></div>
      <div className="flex items-center  ">
        <div className="flex-col  max-h-20">
          <button className="items-center  rounded-md sm:rounded-lg md:rounded-xl bg-red-500 ml-2 sm:ml-1 md:ml-0">
            <LiaWalletSolid className="w-6 h-5 sm:w-9 sm:h-[30px] md:w-12 md:h-10 text-white" />
          </button>
          <li className=" text-white text-xs flex justify-center">Төлбөр</li>
        </div>
      </div>
      <div className="w-10 sm:mx-2  md:w-20 h-[1px] mt-3 sm:mt-4 md:mt-6 bg-white"></div>
      <div className="flex items-center ">
        <div className="flex-col  max-h-20">
          <button className="items-center rounded-md sm:rounded-lg md:rounded-xl bg-white ml-2 sm:ml-1 md:ml-0">
            <TfiTicket className="w-6 h-5 sm:w-9 sm:h-[30px] md:w-12 md:h-10" />
          </button>
          <li className=" text-white text-xs flex justify-center">QR код</li>
        </div>
      </div>
    </ul>
  );
};
