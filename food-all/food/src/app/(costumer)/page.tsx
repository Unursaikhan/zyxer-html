import Image from "next/image";
import { Special } from "./components/Specialoffer";
import { Catogories } from "./components/Categories";
import { Menu } from "./components/Foods";

export default function Home() {
  return (
    <div className="bg-[#232323] w-screen flex justify-center">
      <div className="w-[1440px] bg-[#404040]  flex flex-col">
        <Special />
        <Catogories />
      </div>
    </div>
  );
}
