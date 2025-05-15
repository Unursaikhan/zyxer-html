"use client";
import Image from "next/image";
import { Special } from "./components/Specialoffer";
import { Catogories } from "./components/Categories";
import { useAuth } from "../_providers/AuthProvider";
import { HeaderSignedIn } from "./components/header";
import { HeaderSignedOut } from "./components/HeaderSignedOut";
export default function Home() {
  const { user, signOut } = useAuth();
  return (
    <div className="bg-[#232323] w-screen flex justify-center">
      <div className="w-[1440px] bg-[#404040]  flex flex-col">
        <div className="bg-[#18181B] w-[1440px] h-[68px] px-22 flex items-center justify-between">
          {user ? <HeaderSignedIn /> : <HeaderSignedOut />}
        </div>
        <Special />
        <Catogories />
      </div>
    </div>
  );
}
