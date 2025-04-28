import { MenuSvg } from "../assets/Menussvg";
import { Settings } from "../assets/Settingswhite";
import { Truck } from "../assets/Truckwhite";
import { CategoriesAdmin } from "./categoriesAdmin";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className="w-[1440px] bg-[#F4F4F5] gap-6 flex h-screen overflow-auto ">
      <div className="w-[205px]">
        <div className="fixed w-[205px] h-full flex gap-10 pt-9 px-5 flex-col bg-white">
          <div className="flex gap-2">
            <img
              src="/Screenshot 2024-12-17 at 18.02.18 1 (Traced).png"
              alt=""
            />
            <div className="text-[18px] font-semibold">
              NomNom
              <p className="text-[#71717A] font-light text-[12px]">
                Swift delivery
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-[10px] rounded-3xl bg-black text-white h-10 items-center px-6 text-[14px] font-medium">
              <MenuSvg />
              Food Menu
            </div>
            <Link
              href={"/admin/Orders"}
              className="flex gap-[10px] rounded-3xl bg-white text-black h-10 items-center px-6 text-[14px] font-medium"
            >
              <Truck />
              Orders
            </Link>
            <div className="flex gap-[10px] rounded-3xl bg-white text-black h-10 items-center px-6 text-[14px] font-medium">
              <Settings />
              Settings
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 h-full flex-col gap-6">
        <CategoriesAdmin />
      </div>
    </div>
  );

  // };
  // "use client";
  // import { LayoutDashboard, Settings, TruckIcon } from "lucide-react";
  // import { usePathname, useRouter } from "next/navigation";

  // import { useEffect, useState } from "react";
  // export const Navbar = () => {
  //   const router = useRouter();
  //   const pathname = usePathname();

  //   const [activeButton, setActiveButton] = useState<number | null>(null);

  //   const menuButtons = [
  //     { label: "Food menu", icon: LayoutDashboard, path: "/admin/foodMenu" },
  //     { label: "Orders", icon: TruckIcon, path: "/admin/Order" },
  //     { label: "Settings", icon: Settings, path: "/admin/settings" },
  //   ];
  //   useEffect(() => {
  //     const index = menuButtons.findIndex((item) => item.path === pathname);
  //     setActiveButton(index);
  //   }, [pathname]);
  //   const handleClick = (index: number, path: string) => {
  //     if (activeButton === index) {
  //       setActiveButton(null);
  //     } else {
  //       setActiveButton(index);
  //     }
  //     router.push(path);
  //   };
  //   return (
  //     <div className="w-[205px] h-full bg-white flex flex-col gap-10 px-5 py-9">
  //       <div className="w-[146px] h-11 flex gap-3">
  //         <img src="/nomnomLogo.png" />
  //         <div className="w-22 h-11">
  //           <p className="font-semibold text-5 text-black">NomNom</p>
  //           <p className="text-[12px] text-[#71717a]">Swift delivery</p>
  //         </div>
  //       </div>
  //       <div className="flex flex-col gap-6">
  //         {menuButtons.map((item, index) => {
  //           const Icon = item.icon;
  //           const isActive = activeButton === index;

  //           return (
  //             <button
  //               key={index}
  //               onClick={() => handleClick(index, item.path)}
  //               className={`w-full h-10 flex gap-[10px] px-6 py-2 items-center transition-all duration-150 ${
  //                 isActive
  //                   ? "bg-black rounded-[9999px] text-white"
  //                   : "bg-white text-black"
  //               }`}
  //             >
  //               <Icon />
  //               <p className="font-medium text-[14px]">{item.label}</p>
  //             </button>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
};
