"use client";

import { useState, useEffect } from "react";
import { Data } from "./const";
import { HeartSvgOutline, HeartSvgFilled } from "./assets/HeartSvg";

export const Rmenu = () => {
  const [selectedMenu, setSelectedMenu] = useState("Coffee");
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("menuData");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData(Data);
    }
  }, []);

  const filteredData = selectedMenu
    ? data.filter((item) => item.id === selectedMenu)
    : data;

  const handleToggleFavorite = (itemName) => {
    const updatedData = data.map((item) => {
      if (item.name === itemName) {
        const updatedItem = { ...item, favourite: !item.favourite };
        return updatedItem;
      }
      return item;
    });

    setData(updatedData);
    localStorage.setItem("menuData", JSON.stringify(updatedData));
  };

  const handleSelectItem = (id) => {
    setSelectedMenu(id === selectedMenu ? null : id);
  };

  return (
    <div className="w-full flex bg-white pr-[80px]">
      <div className="w-[325px] flex-col pl-[80px] mt-[64px]">
        {["Coffee", "Cake", "Tea", "Smoothie"].map((item) => (
          <div
            className="pl-[24px] py-[13.5px] text-[24px] font-semibold"
            key={item}
            onClick={() => handleSelectItem(item)}
            style={{
              color: selectedMenu === item ? "#AA714A" : "#28282A",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="w-[4px] h-[647px] bg-[#e3e1ed]"></div>

      <div className="grid gap-y-[32px] grid-cols-3 w-[955px] gap-x-[20px] mt-[64px] ml-[76px]">
        {filteredData.map((item) => (
          <div key={item.name} className="text-center relative">
            <div
              className="absolute right-[21px] top-[16px] cursor-pointer"
              onClick={() => handleToggleFavorite(item.name)}
            >
              {item.favourite ? <HeartSvgFilled /> : <HeartSvgOutline />}
            </div>
            <img
              src={item.imageUrl}
              alt={item.name}
              className="object-cover mb-[8px] hover:shadow-2xl rounded-[15px]"
            />
            <p className="text-[20px] font-semibold text-black">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
