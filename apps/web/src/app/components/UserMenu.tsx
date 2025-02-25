"use client";

import { Session } from "next-auth";
import Image from "next/image";
import { useState } from "react";
import { logout } from "../../utils/authFunctions";

export default function UserMenu({session}: {session: Session | null}) {
      const [showUserMenu, setShowUserMenu] = useState(false);
    return (
      <div
        // onClick={() => setShowUserMenu(true)}
        onMouseOver={() => setShowUserMenu(true)}
        onMouseLeave={() => setShowUserMenu(false)}
        className="relative flex flex-col items-center justify-between"
      >
        <Image
          src={session?.user?.image || ""}
          alt="imagem do usuário"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div
          className={
            showUserMenu
              ? "absolute flex flex-col gap-1 z-10 bg-white rounded-lg p-2 shadow-lg top-12 right-0 cursor-auto"
              : "hidden"
          }
        >
          <div className="flex flex-col items-center gap-1 mb-5">
            <h2 className="text-lg font-semibold">{session?.user?.name}</h2>
            <span className="text-sm font-light">{session?.user?.email}</span>
          </div>
          <button className="text-red-400 mb-2" onClick={() => logout()}>
            Sair
          </button>
        </div>
      </div>
    );
}