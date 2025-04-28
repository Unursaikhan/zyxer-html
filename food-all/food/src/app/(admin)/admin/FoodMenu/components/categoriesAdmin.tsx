"use client";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "../assets/plus";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ImageSvg } from "../assets/Imagesvg";

export const CategoriesAdmin = () => {
  const [selected, setSelected] = useState<string | null>("All Dishes");
  const [foods, setFoods] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [categoriess, setCategoriess] = useState<any[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [categorySuccess, setCategorySuccess] = useState<boolean>(false);
  const postCategory = async () => {
    const categoryExists = categoriess.some(
      (existingCategory: any) =>
        existingCategory.categoryName.toLowerCase() ===
        newCategory.toLowerCase()
    );
    if (categoryExists) {
      setError("Category ner davhtsaj baina.");
      return;
    }

    if (!newCategory.trim()) {
      alert("Category ner oruulna uu!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/category", {
        categoryName: newCategory,
      });
      if (response.status === 200 || response.status === 201) {
        setCategorySuccess(true);
      }
      setCategoriess((prevCategories) => [
        ...prevCategories,
        { categoryName: newCategory, _id: response.data._id },
      ]);
      setNewCategory("");
    } catch (error) {
      console.log(error);
    }
  };

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

  const getFood = async () => {
    try {
      const res = await axios.get("http://localhost:3001/food");
      setFoods(res.data.foods);
      const uniqueCategories: any = [
        ...new Set(
          res.data.foods.map((food: any) => food.category.categoryName)
        ),
      ];
      setCategories(uniqueCategories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  const handleClick = (id: string | null) => {
    setSelected(id === selected ? null : id);
  };

  const filterFoodsByCategory = (category: string) => {
    if (category === "All Dishes") {
      return foods;
    }
    return foods.filter((food: any) => food.category.categoryName === category);
  };

  const countFoodsInCategory = (category: string) => {
    if (category === "All Dishes") {
      return foods.length;
    }
    return foods.filter((food: any) => food.category.categoryName === category)
      .length;
  };

  return (
    <div className="flex flex-col gap-6 pt-6 pr-10">
      <div className="flex justify-end">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col rounded-2xl px-6 py-6 bg-white gap-4">
        <h1 className="font-semibold text-[20px]">Dishes category</h1>
        <div className="flex flex-wrap gap-3 ">
          <Badge
            className={`bg-white text-black flex rounded-3xl text-[14px] h-9 items-center gap-2 hover:bg-[#F4F4F5] ${
              selected === "All Dishes"
                ? "border-[#EF4444]"
                : "border-[#E4E4E7]"
            }`}
            onClick={() => setSelected("All Dishes")}
          >
            All Dishes
            <div className="rounded-2xl px-[10px] py-[2px] bg-black text-white">
              {countFoodsInCategory("All Dishes")}
            </div>
          </Badge>
          {categoriess.map((item, index) => (
            <Badge
              className={`bg-white text-black flex rounded-3xl text-[14px] h-9 items-center gap-2 hover:bg-[#F4F4F5] ${
                item.categoryName === selected
                  ? "border-[#EF4444]"
                  : "border-[#E4E4E7]"
              }`}
              key={index}
              onClick={() => handleClick(item.categoryName)}
            >
              {item.categoryName}{" "}
              <div className="rounded-2xl px-[10px] py-[2px] bg-black text-white">
                {countFoodsInCategory(item.categoryName)}
              </div>
            </Badge>
          ))}
          <Dialog>
            <DialogTrigger>
              <div className="w-9 h-9 rounded-3xl bg-red-500 hover:bg-[#18181B] flex justify-center items-center">
                <Plus />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="flex flex-col gap-6">
                <DialogTitle>Add new category</DialogTitle>
                <DialogDescription className="flex flex-col text-black gap-2 ">
                  Category name
                  <input
                    className="border rounded-[5px] text-[14px] h-[38px] px-3"
                    placeholder="Type category name..."
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                  />
                  {error ? (
                    <div className="text-red-500 text-sm mt-2">{error}</div>
                  ) : (
                    <div></div>
                  )}
                  {categorySuccess && (
                    <p className="text-green-600 text-sm text-center">
                      Amjilttai nemegdlee!
                    </p>
                  )}
                  <Button
                    className="w-[123px] mt-12 self-end"
                    onClick={postCategory}
                  >
                    Add category
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        {selected === "All Dishes" ? (
          <div className="flex flex-col gap-4">
            {categories.map((category, index) => (
              <div
                key={category}
                className="gap-4 flex flex-col px-5 py-5  bg-white rounded-2xl"
              >
                <h1 className="font-semibold text-[20px]">{category}</h1>
                <div className="grid grid-cols-4 gap-4">
                  <div className="border border-dashed rounded-2xl border-red-500 flex justify-center items-center flex-col gap-6">
                    <Dialog>
                      <DialogTrigger>
                        <div className="w-9 h-9 rounded-3xl bg-red-500 hover:bg-[#18181B] flex justify-center items-center">
                          <Plus />
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader className="gap-6">
                          <DialogTitle>Add new Dish to Appetizers</DialogTitle>
                          <DialogDescription className="flex flex-col text-black text-[14px] font-medium gap-6">
                            <div className="grid grid-cols-2 gap-6">
                              <div className="flex flex-col gap-2">
                                Food name
                                <input
                                  placeholder="Type food name"
                                  className="h-[38px] px-3 border rounded-[6px]"
                                />
                              </div>
                              <div className="flex flex-col gap-2">
                                Food price
                                <input
                                  className="h-[38px] border px-3 rounded-[6px]"
                                  placeholder="Enter Price..."
                                  type="number"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              Ingredients
                              <textarea
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
                                <Button>Add dish</Button>
                              </div>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <p className="w-40 text-center">
                      Add new Dish to Appetizers
                    </p>
                  </div>
                  {filterFoodsByCategory(category).map((foodItem) => (
                    <div
                      key={foodItem._id}
                      className="p-4 gap-5 flex border rounded-2xl flex-col"
                    >
                      <div className="w-full">
                        <img
                          src={foodItem.image}
                          alt={foodItem.foodname}
                          className="rounded-2xl"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <h1 className="text-[#EF4444] font-medium text-[14px]">
                            {foodItem.foodname}
                          </h1>
                          <p className="text-[14px]">${foodItem.price}</p>
                        </div>
                        <p className="text-[12px]">{foodItem.ingredients}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          selected && (
            <div className="flex flex-col px-5 py-20 gap-4 bg-white rounded-2xl">
              <div className="grid grid-cols-4 gap-4">
                <div className="border border-dashed rounded-2xl border-red-500 flex justify-center items-center flex-col gap-6 h-[258px]">
                  <Dialog>
                    <DialogTrigger>
                      <div className="w-9 h-9 rounded-3xl bg-red-500 hover:bg-[#18181B] flex justify-center items-center">
                        <Plus />
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>

                  <p className="w-40 text-center">Add new Dish to Appetizers</p>
                </div>
                {filterFoodsByCategory(selected).map((foodItem) => (
                  <div
                    key={foodItem._id}
                    className="p-4 gap-5 flex border rounded-2xl flex-col"
                  >
                    <div className="w-full">
                      <img
                        src={foodItem.image}
                        alt={foodItem.foodname}
                        className="rounded-2xl"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <h1 className="text-[#EF4444] font-medium text-[14px]">
                          {foodItem.foodname}
                        </h1>
                        <p className="text-[14px]">${foodItem.price}</p>
                      </div>
                      <p className="text-[12px]">{foodItem.ingredients}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
