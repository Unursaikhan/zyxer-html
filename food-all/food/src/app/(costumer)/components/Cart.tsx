"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusBlakc } from "../assets/plusblack";
import { MinusBlack } from "../assets/minusblack";
import { X } from "../assets/Xsvg";

interface CartProps {
  foodItem: {
    foodname: string;
    ingredients: string;
    image: string;
    price: number;
  };
  onAddToCart: (item: {
    foodName: string;
    ingredients: string;
    image: string;
    quantity: number;
    price: number;
  }) => void;
}

export const Cart = ({ foodItem, onAddToCart }: CartProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="flex gap-6">
      <div className="w-1/2">
        <img
          src={foodItem.image}
          alt=""
          className="h-[361px] w-full object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between">
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
        <Button
          className="mt-6"
          onClick={() =>
            onAddToCart({
              foodName: foodItem.foodname,
              ingredients: foodItem.ingredients,
              image: foodItem.image,
              quantity,
              price: foodItem.price,
            })
          }
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};
