"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusRed } from "../assets/plusred";

import { PlusBlakc } from "../assets/plusblack";
import { MinusBlack } from "../assets/minusblack";
import { X } from "../assets/Xsvg";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
type CartItem = {
  foodName: string;
  ingredients: string;
  image: string;
  quantity: number;
  price: string;
};
interface FoodItemProps {
  foodItem: {
    _id: string;
    foodname: string;
    ingredients: string;
    image: string;
    price: number;
  };
}

export const CartDialog = ({ foodItem }: FoodItemProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);
  const handleAddCart = () => {
    const newFood = {
      id: foodItem._id,
      foodName: foodItem.foodname,
      price: foodItem.price * quantity,
      image: foodItem.image,
      ingredients: foodItem.ingredients,
      quantity: quantity,
    };

    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    const UpdatedFood = [...stored, newFood];
    localStorage.setItem("cart", JSON.stringify(UpdatedFood));
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="absolute bottom-5 right-5 w-11 h-11 bg-white flex items-center justify-center rounded-4xl">
          <PlusRed />
        </div>
      </DialogTrigger>
      <DialogContent className="w-[826px]">
        <DialogHeader>
          <div className="flex gap-6">
            <div className="flex-1">
              <img
                src={foodItem.image}
                alt=""
                className="h-[361px] w-full object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-end opacity-0">
                <X />
              </div>
              <div>
                <h1 className="text-[#EF4444] font-semibold text-[24px]">
                  {foodItem.foodname}
                </h1>
                <p className="text-black">{foodItem.ingredients}</p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div>
                  <h1>Total price</h1>
                  <p className="font-semibold text-black text-[18px]">
                    ${foodItem.price * quantity}
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div
                    className={`flex items-center justify-center border rounded-4xl w-11 h-11 ${
                      quantity === 1 ? "border-[#E4E4E7]" : "border-black"
                    }`}
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    <MinusBlack />
                  </div>
                  <div>{quantity}</div>
                  <div
                    className="flex items-center justify-center border border-black rounded-4xl w-11 h-11"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <PlusBlakc />
                  </div>
                </div>
              </div>
              <Button onClick={handleAddCart}>Add to cart</Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
