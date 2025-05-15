"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "../assets/plus";
import { ImageSvg } from "../assets/Imagesvg";
import { useState } from "react";
import axios from "axios";
type AddfooProps = {
  category: string;
  categoryID: string;
};

export const AddFood = ({ category, categoryID }: AddfooProps) => {
  const [newFoodName, setNewFoodName] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newIngredients, setNewIngredients] = useState("");
  const addFood = async () => {
    try {
      const res = await axios.post("http://localhost:3001/food", {
        foodname: newFoodName,
        price: newPrice,
        image: "./url",
        ingredients: newIngredients,
        category: categoryID,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const HandleAddFood = async () => {
    await addFood();
  };
  return (
    <div className="border border-dashed rounded-2xl border-red-500 flex justify-center items-center flex-col gap-6 h-[258px]">
      <Dialog>
        <DialogTrigger>
          <div className="w-9 h-9 rounded-3xl bg-red-500 hover:bg-[#18181B] flex justify-center items-center">
            <Plus />
          </div>
        </DialogTrigger>
        <DialogContent className="w-[472px]">
          <DialogHeader className="gap-6">
            <DialogTitle>Add new Dish to {category}</DialogTitle>
            <DialogDescription className="flex flex-col text-black text-[14px] font-medium gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  Food name
                  <input
                    value={newFoodName}
                    onChange={(e) => setNewFoodName(e.target.value)}
                    placeholder="Type food name"
                    className="h-[38px] px-3 border rounded-[6px]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  Food price
                  <input
                    value={newPrice}
                    onChange={(e) => setNewPrice(Number(e.target.value))}
                    className="h-[38px] border px-3 rounded-[6px]"
                    placeholder="Enter Price..."
                    type="number"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                Ingredients
                <textarea
                  value={newIngredients}
                  onChange={(e) => setNewIngredients(e.target.value)}
                  className="h-[90px] px-3 py-2 flex items-start border rounded-[6px]"
                  placeholder="List ingredients..."
                />
              </div>
              <div className="flex flex-col gap-2">
                Food image
                <div className="relative h-[138px] w-full">
                  <input
                    type="file"
                    className="opacity-0 absolute z-1 w-full h-full"
                  />
                  <div className="absolute w-full h-full z-0 flex flex-col gap-2 items-center justify-center bg-[#f3f7ff] border rounded-2xl border-dashed border-[#cbd9fa]">
                    <div className="w-8 h-8 rounded-4xl">
                      <ImageSvg />
                    </div>
                    Choose a file or drag & drop it here
                  </div>
                </div>
                <div className="pt-6 w-full flex justify-end">
                  <Button onClick={HandleAddFood}>Add dish</Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <p className="w-40 text-center  ">Add new Dish to {category}</p>
    </div>
  );
};
