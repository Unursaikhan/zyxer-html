"use client";
import { useEffect, useState } from "react";

import { AllFoodsCostumer } from "./Foods";
import { Badge } from "@/components/ui/badge";

import { api } from "@/axios/indes";
import { CategoryType } from "@/app/(admin)/admin/FoodMenu/components/categoriesAdmin";

export const Catogories = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [categoriess, setCategoriess] = useState<CategoryType[]>([]);
  const getCategories = async () => {
    try {
      const res = await api.get("/category");
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
  const filteredCategory = categoriess.filter((item) => {
    if (selected == null) {
      return true;
    } else {
      return item._id == selected;
    }
  });
  return (
    <div className="px-12 py-8 flex flex-col gap-9">
      <h1 className="ml-10 font-semibold text-white text-[30px]">Categories</h1>
      <div className="flex gap-2 justify-between items-center">
        <img src="Icon Button.png" alt="" />
        <div className="w-full overflow-x-auto flex gap-2">
          {categoriess.map((item, index) => (
            <Badge
              className={`${
                item._id === selected ? "text-white" : "text-black"
              } px-5 py-1 rounded-3xl text-[18px] ${
                item._id === selected ? "bg-[#EF4444]" : "bg-white"
              }`}
              key={index}
              onClick={() => handleClick(item._id)}
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
      <div className="px-10 mt-10">
        {filteredCategory.map((item) => {
          return (
            <div key={item._id} className="flex flex-col gap-9">
              <AllFoodsCostumer
                categoryId={item._id}
                categoryName={item.categoryName}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
