"use client";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { AllDishes } from "./allDishesAdmin";
import { CategoryDishes } from "./categoryDishesAdmin";
import { title } from "process";
const categor = [
  {
    name: "All Dishes",
    quantity: 112,
  },
  {
    name: "Appetizers",
    quantity: 112,
    foods: [
      {
        name: "Finger food ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "/Product Image.png",
      },
      {
        name: "Cranberry Brie Bites",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "/Product Image.png",
      },
      {
        name: "Sunshine Stackers  ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "/Product Image.png",
      },
      {
        name: "Brie Crostini Appetizer",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "/Product Image.png",
      },
      {
        name: "Sunshine Stackers ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
    ],
  },
  {
    name: "Salads",
    quantity: 112,
    foods: [
      {
        name: "Finger foodaaaa ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Cranberry Brie Bites",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers  ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Brie Crostini Appetizer",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
    ],
  },
  {
    name: "Pizzas",
    quantity: 112,
    foods: [
      {
        name: "Finger food ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Cranberry Brie Bites",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers  ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Brie Crostini Appetizer",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
    ],
  },
  {
    name: "Lunch favorites",
    quantity: 112,
    foods: [
      {
        name: "Finger food ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Cranberry Brie Bites",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers  ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Brie Crostini Appetizer",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
    ],
  },
  {
    name: "Main dishes",
    quantity: 112,
    foods: [
      {
        name: "Finger food ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Cranberry Brie Bites",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers  ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Brie Crostini Appetizer",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
    ],
  },
  {
    name: "Fish & Sea foods",
    quantity: 112,
    foods: [
      {
        name: "Finger food ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Cranberry Brie Bites",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers  ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Brie Crostini Appetizer",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
    ],
  },

  {
    name: "Brunch",
    quantity: 112,
    foods: [
      {
        name: "Finger food ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Cranberry Brie Bites",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers  ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Brie Crostini Appetizer",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
    ],
  },
  {
    name: "Side dish ",
    quantity: 112,
    foods: [
      {
        name: "Finger food ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Cranberry Brie Bites",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers  ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Brie Crostini Appetizer",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
    ],
  },
  {
    name: "Desserts",
    quantity: 112,
    foods: [
      {
        name: "Finger food ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Cranberry Brie Bites",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers  ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Brie Crostini Appetizer",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
    ],
  },
  {
    name: "Beverages",
    quantity: 112,
    foods: [
      {
        name: "Finger food ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Cranberry Brie Bites",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers  ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Brie Crostini Appetizer",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
      {
        name: "Sunshine Stackers ",
        price: "12.99",
        desciption:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image: "Product Image.png",
      },
    ],
  },
];

export const CategoriesAdmin = () => {
  const [selected, setSelected] = useState<string | null>("All Dishes");

  const handleClick = (id: string | null) => {
    setSelected(id === selected ? null : id);
  };
  return (
    <div className="flex flex-col gap-6 pt-6 pr-10">
      <div className="flex justify-end">
        <div className="w-9 h-9 rounded-4xl">
          <img src="Avatar Image.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col rounded-2xl px-6 py-6 bg-white gap-4">
        <h1 className="font-semibold text-[20px]">Dishes catergory</h1>
        <div className="flex flex-wrap gap-3 ">
          {categor.map((item, index) => (
            <Badge
              className={`bg-white text-black flex rounded-3xl text-[14px] h-9 items-center gap-2  ${
                item.name === selected ? "border-[#EF4444]" : "border-[#E4E4E7]"
              }`}
              key={index}
              onClick={() => handleClick(item.name)}
            >
              {item.name}{" "}
              <div className="rounded-2xl px-[10px] py-[2px] bg-black text-white">
                {item.quantity}
              </div>
            </Badge>
          ))}
        </div>
      </div>
      <div>
        {selected === "All Dishes" ? (
          <div className="flex flex-col px-5 py-20 gap-4 bg-white rounded-2xl">
            {categor.map(
              (item) =>
                item.name !== "All Dishes" && (
                  <div key={item.name}>
                    <h1 className="font-semibold text-[20px]">
                      {item.name} ‎ ({item.quantity})
                    </h1>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="flex justify-center items-center border border-dashed border-red-500 rounded-2xl">
                        <div className="flex flex-col items-center gap-6">
                          <div className="w-10 bg-[#EF4444] flex justify-center items-center h-10 rounded-3xl">
                            <img src="/plus.png" alt="Add Dish" />
                          </div>
                          <p className="w-[150px] text-center">
                            Add new Dish to {item.name}
                          </p>
                        </div>
                      </div>

                      {item.foods &&
                        item.foods.map((foodItem) => (
                          <div
                            key={foodItem.name}
                            className="p-4 gap-5 flex border rounded-2xl flex-col"
                          >
                            <div className="w-full">
                              <img src={foodItem.image} alt={foodItem.name} />
                            </div>
                            <div className="flex flex-col gap-2">
                              <div className="flex justify-between items-center">
                                <h1 className="text-[#EF4444] font-medium text-[14px]">
                                  {foodItem.name}
                                </h1>
                                <p className="text-[14px]">${foodItem.price}</p>
                              </div>
                              <p className="text-[12px]">
                                {foodItem.desciption}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )
            )}
          </div>
        ) : (
          selected && (
            <CategoryDishes
              foods={categor.find((item) => item.name === selected)?.foods}
              name={selected}
              quantity={
                categor.find((item) => item.name === selected)?.quantity
              }
            />
          )
        )}
      </div>
    </div>
  );
};
