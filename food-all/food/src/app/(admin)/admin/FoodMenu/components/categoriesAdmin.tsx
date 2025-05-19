"use client";
import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CatogoriesFilter } from "./CategoriesFilter";
import { AllDishes } from "./AllDishes";
import { SelectedCategory } from "./SelectedCategory";
import { api } from "@/axios/indes";
export type CategoryType = {
  _id: string;
  categoryName: string;
};
export type FoodType = {
  _id: string;
  foodname: string;
  price: number;
  ingredients: string;
  image: string;
  category: {
    categoryName: string;
    _id: string;
  };
};
export const CategoriesAdmin = () => {
  const [selected, setSelected] = useState<string | null>("All Dishes");
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [categoriess, setCategoriess] = useState<CategoryType[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [categorySuccess, setCategorySuccess] = useState<boolean>(false);
  const postCategory = async () => {
    const categoryExists = categoriess.some(
      (existingCategory) =>
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
      const response = await api.post("/category", {
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

  const getFood = async () => {
    try {
      const res = await api.get("/food");
      setFoods(res.data.foods);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFood();
  }, []);
  const filterFoodsByCategory = (category: string) => {
    if (category === "All Dishes") {
      return foods;
    }
    return foods.filter((food) => food.category.categoryName === category);
  };

  const countFoodsInCategory = (category: string) => {
    if (category === "All Dishes") {
      return foods.length;
    }
    return foods.filter((food) => food.category.categoryName === category)
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

      <CatogoriesFilter
        selected={selected}
        setSelected={setSelected}
        categoriess={categoriess}
        countFoodsInCategory={countFoodsInCategory}
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        postCategory={postCategory}
        error={error}
        categorySuccess={categorySuccess}
      />

      <div>
        {selected === "All Dishes" ? (
          <AllDishes
            categoriess={categoriess}
            foods={foods}
            filterFoodsByCategory={filterFoodsByCategory}
          />
        ) : (
          selected && (
            <SelectedCategory
              selected={selected}
              foods={foods}
              filterFoodsByCategory={filterFoodsByCategory}
            />
          )
        )}
      </div>
    </div>
  );
};
