"use client";

import { useState } from "react";
import { Rmenu } from "./Rmenu";
import { Featured } from "./Featured";
import { Past } from "./Past";
import { Favourite } from "./Favourite";

export const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState("menu");
  const itemsMenu = [
    {
      id: "menu",
      label: "Меню",
      icon: "home.png",
      activeIcon: "home1.png",
    },
    {
      id: "featured",
      label: "Онцлох",
      icon: "star_border_purple500.png",
      activeIcon: "star_border_purple5001.png",
    },
    {
      id: "past",
      label: "Өмнөх захиалгууд",
      icon: "refresh.png",
      activeIcon: "refresh1.png",
    },
    {
      id: "saved",
      label: "Хадгалсан",
      icon: "favorite_border.png",
      activeIcon: "favorite_border1.png",
    },
  ];
  const handleSelectItem = (id) => {
    setSelectedMenu(id === selectedMenu ? null : id);
  };
  return (
    <div className="w-full bg-white flex-col">
      <div className="w-full h-[79px] bg-[#F2F2F3] px-[80px] flex items-center">
        <div className="flex w-[556px] h-[51px] gap-x-[24px] items-center">
          {itemsMenu.map((item) => (
            <div
              key={item.id}
              className="flex gap-[4px] relative text-[16px] font-semibold"
              onClick={() => handleSelectItem(item.id)}
              style={{
                color: selectedMenu === item.id ? "#AA714A" : "#28282A",
              }}
            >
              <img
                src={selectedMenu === item.id ? item.activeIcon : item.icon}
                alt={item.label}
                className="w-[24px] h-[24px]"
              />
              {item.label}
              <div
                className="w-full h-[3px] bg-[#AA714A] absolute bottom-[-5px] opacity-0"
                style={{ opacity: selectedMenu === item.id ? 1 : 0 }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      {selectedMenu === "menu" && <Rmenu />}
      {selectedMenu === "featured" && <Featured />}
      {selectedMenu === "past" && <Past />}
      {selectedMenu === "saved" && <Favourite />}
    </div>
  );
};
