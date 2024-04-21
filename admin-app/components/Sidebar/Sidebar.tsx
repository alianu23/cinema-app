import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  MenuIcon,
  ShoppingBag,
  User2Icon,
  LockIcon,
  BarChart2,
  Settings,
  Table2Icon,
  HomeIcon,
  LampIcon,
  MonitorPlay,
  Clapperboard,
  FileVideo2,
  Film,
  CalendarCheck,
  PopcornIcon,
} from "lucide-react";
import { useSidebar } from "./use-sidebar";
import { cn } from "@/app/libs/utlis";
import LinkItem from "./LinkItem";
import ExpandMenu from "./ExpandMenu";
import { useAuth } from "..";

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useSidebar((state) => state);
  const { loginuser } = useAuth();

  return (
    <aside
      className={cn(
        `absolute left-0 top-0 z-1 lg:z-999999 flex h-screen w-20 flex-col overflow-y-hidden bg-black duration-300 ease-linear lg:opacity-100 dark:bg-boxdark lg:static lg:translate-x-0 `,
        {
          "w-56": isSidebarOpen,
          "opacity-0": !isSidebarOpen,
          "duration-100": isSidebarOpen,
        }
      )}
    >
      <div className="relative flex w-full items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <MenuIcon onClick={toggleSidebar} className="" />

        {/* {isSidebarOpen && (
          <div className="font-bold text-base absolute left-0 ml-16 text-red-500">
            <div>CINEMA</div>
            <div>ADMIN</div>
          </div>
        )} */}
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="px-4 py-4  lg:px-3">
          <div>
            <ul
              className={cn("mb-6 flex flex-col  gap-1.5", {
                "items-center justify-center ": !isSidebarOpen,
              })}
            >
              <li className="cursor-pointer ">
                <ExpandMenu
                  name="Нүүр хуудас"
                  icon={<HomeIcon className="  h-6 w-6 hover:text-white " />}
                >
                  <ExpandMenu
                    name="Кинонууд"
                    icon={
                      <MonitorPlay className="  h-6 w-6 hover:text-white" />
                    }
                  >
                    <LinkItem
                      title="Дэлгэцнээ"
                      href="/movies"
                      icon={<Clapperboard className="h-6 w-6 " />}
                    ></LinkItem>
                    <LinkItem
                      title="Тун удахгүй"
                      href="/comingsoon"
                      icon={<FileVideo2 className="h-6 w-6" />}
                    ></LinkItem>
                  </ExpandMenu>
                </ExpandMenu>
              </li>

              <li>
                <LinkItem
                  title="Кино театр"
                  href="/cinema"
                  icon={<Film className="h-6 w-6" />}
                ></LinkItem>
              </li>
              <li>
                <LinkItem
                  title="Үзвэрийн хуваарь"
                  href="/showtime"
                  icon={<PopcornIcon className="h-6 w-6" />}
                ></LinkItem>
              </li>
              <li>
                <LinkItem
                  title="Үйл ажиллагаа"
                  href="/events"
                  icon={<CalendarCheck className="h-6 w-6" />}
                ></LinkItem>
              </li>

              <li>
                <LinkItem
                  title="Хэрэглэгчид"
                  href="/tables"
                  icon={<Table2Icon className="h-6 w-6" />}
                ></LinkItem>
              </li>

              <li className="cursor-pointer">
                <ExpandMenu
                  name="Профайл"
                  icon={<User2Icon className="  h-6 w-6 hover:text-white" />}
                >
                  <LinkItem
                    title="Профайл"
                    href="/profile"
                    icon={<User2Icon className="h-6 w-6" />}
                  ></LinkItem>
                  <LinkItem
                    title="Тохиргоо"
                    href="/settings"
                    icon={<Settings className="h-6 w-6" />}
                  ></LinkItem>
                </ExpandMenu>
              </li>
              {!loginuser ? (
                <li>
                  <LinkItem
                    title="Нэвтрэх"
                    href="/signin"
                    icon={<LockIcon className="h-5 w-5" />}
                  ></LinkItem>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
