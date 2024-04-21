"use client";
import { useContext, useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaUser } from "react-icons/fa6";
import { Login } from "./login";
import { Signup } from "./signup";
import Profile from "./profile";
import { AuthContext } from "..";

export function ProfileDrawer() {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleLinkClick = () => {
    setShowSignIn(!showSignIn);
  };

  const { loginuser } = useContext(AuthContext);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <a className="text-white font-bold p-0 text-[16px] hover:text-red-400 cursor-pointer">
          <FaUser />
        </a>
      </SheetTrigger>
      <SheetContent className="flex justify-center items-center bg-[#000000] bg-opacity-50 border-none">
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
