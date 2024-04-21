import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { useSidebar } from "@/components/Sidebar/use-sidebar";
import Link from "next/link";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const { toggleSidebar, isSidebarOpen } = useSidebar((state) => state);
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 ">
          <Link
            href="/"
            style={{ cursor: "pointer" }}
            className="flex flex-col font-bold text-base absolute left-3 text-red-500 opacity-0 lg:opacity-100 pointer-events-none"
          >
            CINEMA <span className="ml-8">ADMIN</span>
          </Link>

          {!isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              aria-hidden={!isSidebarOpen}
              aria-controls="sidebar"
              className=" lg:pointer-events-none"
            >
              <MenuIcon className="h-6 w-6 lg:opacity-0 dark:text-white text-slate-400" />
            </button>
          )}

          {isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              aria-hidden={!isSidebarOpen}
              aria-controls="sidebar"
              className="lg:pointer-events-none"
            >
              <MenuIcon className="h-6 w-6 lg:opacity-0  text-slate-400" />
            </button>
          )}
          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={32}
              height={32}
              src={"/images/logo/logo-icon.svg"}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="hidden sm:block"></div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
            <DropdownNotification />
            <DropdownMessage />
          </ul>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
