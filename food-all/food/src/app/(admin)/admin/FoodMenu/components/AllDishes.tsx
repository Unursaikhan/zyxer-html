"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageSvg } from "../assets/Imagesvg";
import { AddFood } from "./AddFood";
import { PenSvg } from "../assets/pensvg";

import { useState } from "react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { EditFood } from "./EditFood";

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

interface AllDishesProps {
  categoriess: Category[];
  foods: Food[];
  filterFoodsByCategory: (category: string) => Food[];
}
type Category = {
  _id: string;
  categoryName: string;
};
export const AllDishes = ({
  categoriess,
  filterFoodsByCategory,
}: AllDishesProps) => {
  return (
    <div className="flex flex-col gap-4">
      {categoriess.map((category) => (
        <div
          key={category._id}
          className="gap-4 flex flex-col px-5 py-5  bg-white rounded-2xl"
        >
          <h1 className="font-semibold text-[20px]">{category.categoryName}</h1>
          <div className="grid grid-cols-4 gap-4">
            <AddFood
              category={category.categoryName}
              categoryID={category._id}
            />

            {filterFoodsByCategory(category.categoryName).map((foodItem) => (
              <div
                key={foodItem._id}
                className="p-4 gap-5 flex border rounded-2xl flex-col"
              >
                <div className="w-full relative">
                  <img
                    src={foodItem.image}
                    alt={foodItem.foodname}
                    className="rounded-2xl w-full h-40 object-fit"
                  />
                  <Dialog>
                    <DialogTrigger>
                      <div className="absolute w-9 h-9 bg-white rounded-3xl flex justify-center items-center bottom-10 right-5">
                        <PenSvg />
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="mb-6">Dishes info</DialogTitle>
                        <DialogDescription>
                          <EditFood
                            foodItem={foodItem}
                            categoriess={categoriess}
                          />
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h1 className="text-[#EF4444] font-medium text-[14px]">
                      {foodItem.foodname}
                    </h1>
                    <p className="text-[14px]">${foodItem.price}</p>
                  </div>
                  <p className="text-[12px] text-gray-600">
                    {foodItem.ingredients}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
