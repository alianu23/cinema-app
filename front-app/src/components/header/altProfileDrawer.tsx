"use client";
import { useContext, useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaUser } from "react-icons/fa6";
import { Login } from "../profileDrawer/login";
import { Signup } from "../profileDrawer/signup";
import Profile from "../profileDrawer/profile";
import { AuthContext } from "..";
import { usePathname } from "next/navigation";

export function AltProfileDrawer() {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleLinkClick = () => {
    setShowSignIn(!showSignIn);
  };

  const { loginuser } = useContext(AuthContext);

  const isActive = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <a className="text-white font-bold p-0 text-[16px] hover:text-red-400 cursor-pointer">
          <div className="font-bold transition-all duration-75 hover:text-red-400 text-slate-300">
            Аккаунт
          </div>
        </a>
      </SheetTrigger>
      <SheetContent className="flex justify-center items-center bg-slate-900 border-none">
        {loginuser == null ? (
          <div>
            {showSignIn ? (
              <Login handleLinkClick={handleLinkClick} />
            ) : (
              <Signup handleLinkClick={handleLinkClick} />
            )}
          </div>
        ) : (
          <div>
            <Profile user={loginuser} />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
