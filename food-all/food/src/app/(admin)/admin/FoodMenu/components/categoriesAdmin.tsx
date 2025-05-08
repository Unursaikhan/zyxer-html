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
import { CatogoriesFilter } from "./CategoriesFilter";
import { AllDishes } from "./AllDishes";
import { SelectedCategory } from "./SelectedCategory";

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
  console.log("categories", categories);

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
