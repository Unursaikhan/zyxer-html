"use client";
import { useEffect, useState } from "react";
import { Menu } from "./Foods";
import { Appetizers } from "./Appetizers";
import { Salad } from "./Salad";
import { LunchFav } from "./LunchFav";
import { MainDishes } from "./MainDishes";
import { Badge } from "@/components/ui/badge";
import axios from "axios";

export const Catogories = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [categoriess, setCategoriess] = useState<any[]>([]);

  const getCategories = async () => {
    try {
      const res = await axios.get("http://localhost:3001/category");
      setCategoriess(res.data.categories);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  console.log(categoriess);

  const handleClick = (id: string | null) => {
    setSelected(id === selected ? null : id);
  };
  return (
    <div className="px-12 py-8 flex flex-col gap-9">
      <h1 className="ml-10 font-semibold text-white text-[30px]">Categories</h1>
      <div className="flex gap-2 justify-between items-center">
        <img src="Icon Button.png" alt="" />
        <div className="w-full overflow-x-scroll overscroll-x-contain flex gap-2">
          {categoriess.map((item, index) => (
            <Badge
              className={`${
                item.categoryName === selected ? "text-white" : "text-black"
              } px-5 py-1 rounded-3xl text-[18px] ${
                item.categoryName === selected ? "bg-[#EF4444]" : "bg-white"
              }`}
              key={index}
              onClick={() => handleClick(item.categoryName)}
            >
              {item.categoryName}
            </Badge>
          ))}
        </div>
        <img
          src="Icon Button (1).png"
          alt=""
          className="flex justify-self-end"
        />
      </div>

      {selected === null && <Menu />}
      <div className="px-10 mt-10">
        {selected === "Appetizers" && <Appetizers />}
        {selected === "Salads" && <Salad />}
        {selected === "Lunch favourites" && <LunchFav />}
        {selected === "Main dishes" && <MainDishes />}
      </div>
    </div>
  );
};
