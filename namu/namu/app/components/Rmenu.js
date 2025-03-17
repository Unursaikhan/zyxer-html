"use client";

import { useState } from "react";

export const Rmenu = () => {
  const [selectedMenu, setSelectedMenu] = useState("Coffee");
  const itemsMenu = [
    {
      id: "Coffee",
      label: "Coffee",
    },
    {
      id: "Cake",
      label: "Cake",
    },
    {
      id: "Tea",
      label: "Tea",
    },
    {
      id: "Smoothie",
      label: "Smoothie",
    },
  ];
  const handleSelectItem = (id) => {
    setSelectedMenu(id === selectedMenu ? null : id);
  };
  return (
    <div className="w-full flex bg-white">
      <div className="w-[325px] flex-col pl-[80px] mt-[64px]">
        {itemsMenu.map((item) => (
          <div
            className="pl-[24px] py-[13.5px] text-[24px] font-semibold"
            key={item.id}
            onClick={() => handleSelectItem(item.id)}
            style={{
              color: selectedMenu === item.id ? "#AA714A" : "#28282A",
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};
