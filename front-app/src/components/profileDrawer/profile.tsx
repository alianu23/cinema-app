import React, { useContext } from "react";
import { AuthContext, Button } from "..";
import { SheetClose, SheetTitle, SheetHeader } from "../ui/sheet";
import { FaRegUser } from "react-icons/fa";

const Profile = ({ user }: any) => {
  const { logout, loginuser } = useContext(AuthContext);
  return (
    <div className="w-full flex flex-col items-center gap-2 text-white">
      <div>
        {loginuser?.avatarUrl ? (
          <img
            src={loginuser?.avatarUrl}
            className="object-cover rounded-full overflow-hidden size-[60px]"
          />
        ) : (
          <FaRegUser
            size={60}
            color="white"
            style={{
              border: "1px white solid",
              padding: "10px",
              borderRadius: "20px",
            }}
          />
        )}
      </div>
      <SheetHeader>
        <SheetTitle className="text-white">Хэрэглэгч</SheetTitle>
      </SheetHeader>

      <div className="w-[250px] mt-6 flex flex-col gap-2">
        <div className="flex justify-between">
          <p>Email:</p>
          <p>{user.email.charAt(0).toUpperCase() + user.email.slice(1)}</p>
        </div>
        <div className="flex justify-between">
          <p>Утас:</p>
          <p>{user.phone ? user.phone : "99119911"}</p>
        </div>
      </div>
      <SheetClose asChild>
        <Button
          type="button"
          className="w-full py-4 mt-6 bg-[#1f4682]"
          onClick={logout}
        >
          Гарах
        </Button>
      </SheetClose>
    </div>
  );
};

export default Profile;
