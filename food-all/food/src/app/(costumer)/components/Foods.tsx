"use client";

import { useEffect, useState } from "react";
import { CartDialog } from "./CartDialog";
import { api } from "@/axios/indes";

interface Food {
  _id: string;
  foodname: string;
  price: number;
  ingredients: string;
  image: string;
  category: {
    categoryName: string;
  };
}

type Category = {
  categoryId: string;
  categoryName: string;
};

export const AllFoodsCostumer = ({ categoryName, categoryId }: Category) => {
  const [foods, setFoods] = useState<Food[]>([]);

  const getFood = async () => {
    try {
      const res = await api.get(`/food?categoryId=${categoryId}`);
      setFoods(res.data.foods);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  if (foods.length === 0) return null;

  return (
    <div className="flex flex-col mb-[54px]">
      <div className="gap-4 flex flex-col rounded-2xl">
        <h1 className="font-semibold text-[30px] text-white">{categoryName}</h1>
        <div className="grid grid-cols-3 gap-9">
          {foods.map((foodItem) => (
            <div
              key={foodItem._id}
              className="flex flex-col gap-5 p-4 bg-white rounded-2xl h-[342px]"
            >
              <div className="relative h-[210px]">
                <img
                  src={foodItem.image}
                  alt={foodItem.foodname}
                  className="rounded-2xl w-full h-[210px] absolute object-cover"
                />
                <div className="absolute w-11 h-11 bottom-5 right-5">
                  <CartDialog foodItem={foodItem} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h1 className="text-[#EF4444] font-semibold text-[24px]">
                    {foodItem.foodname}
                  </h1>
                  <p className="font-semibold text-black text-[18px]">
                    ${foodItem.price}
                  </p>
                </div>
                <p className="text-black">{foodItem.ingredients}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
