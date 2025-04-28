import Link from "next/link";
import { Settings } from "../../FoodMenu/assets/Settingswhite";
import { MenuSvgDark } from "../assets/Menusvgdarlk";
import { TruckWhite } from "../assets/Truckwhite";
import { Orders } from "./OrderList";

export const List = () => {
  return (
    <div className="w-[1440px] bg-[#F4F4F5] gap-6 flex">
      <div className="w-[205px] h-screen flex gap-10 pt-9 px-5 flex-col bg-white">
        <div className="flex gap-2">
          <img src="/Screenshot 2024-12-17 at 18.02.18 1 (Traced).png" alt="" />
          <div className="text-[18px] font-semibold">
            NomNom
            <p className="text-[#71717A] font-light text-[12px]">
              Swift delivery
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Link
            href={"/admin/FoodMenu"}
            className="flex gap-[10px] rounded-3xl bg-white text-black h-10 items-center px-6 text-[14px] font-medium"
          >
            <MenuSvgDark />
            Food Menu
          </Link>
          <div className="flex gap-[10px] rounded-3xl  bg-black text-white h-10 items-center px-6 text-[14px] font-medium">
            <TruckWhite />
            Orders
          </div>
          <div className="flex gap-[10px] rounded-3xl bg-white text-black h-10 items-center px-6 text-[14px] font-medium">
            <Settings />
            Settings
          </div>
        </div>
      </div>
      <div className="flex flex-1 h-full flex-col gap-6 pt-6 pr-10">
        <Orders />
      </div>
    </div>
  );
};
