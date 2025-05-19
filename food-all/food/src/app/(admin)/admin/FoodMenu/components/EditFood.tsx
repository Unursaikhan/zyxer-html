import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Trash } from "../assets/trashsvg";
import { EditCategory } from "./EditCategory";
import { useState } from "react";
import { api } from "@/axios/indes";

interface Category {
  _id: string;
  categoryName: string;
}

export interface Food {
  _id: string;
  foodname: string;
  price: number;
  ingredients: string;
  image: string;
  category: {
    categoryName: string;
  };
}

interface EditFoodProps {
  foodItem: Food;
  categoriess: Category[];
  onDelete?: () => void;
}

const formSchema = z.object({
  foodname: z.string().min(1, "Food name is required"),
  price: z.string().min(1, "Price must be positive"),
  ingredients: z.string().optional(),
});

export const EditFood = ({
  foodItem,
  categoriess,
  onDelete,
}: EditFoodProps) => {
  const initialCategory = categoriess.find(
    (cat) => cat.categoryName === foodItem.category.categoryName
  )?._id;

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    initialCategory || ""
  );

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodname: foodItem.foodname,
      price: String(foodItem.price),
      ingredients: foodItem.ingredients,
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await api.put(`/food`, {
        foodId: foodItem._id,
        foodname: values.foodname,
        price: Number(values.price),
        image: foodItem.image,
        ingredients: values.ingredients,
        category: selectedCategoryId,
      });
      console.log("Update success:", res.data);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="foodname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dish Name</FormLabel>
              <FormControl>
                <Input {...field} className="text-black" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <FormLabel>Dish Category</FormLabel>
          <EditCategory
            selectedCategoryId={selectedCategoryId}
            categoriess={categoriess}
            onCategoryChange={setSelectedCategoryId}
          />
        </div>

        <FormField
          control={form.control}
          name="ingredients"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ingredients</FormLabel>
              <FormControl>
                <Textarea {...field} className="text-black" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price ($)</FormLabel>
              <FormControl>
                <Input type="number" {...field} className="text-black" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <FormLabel>Image</FormLabel>
          <div className="relative w-72 h-28 mt-2">
            <img
              src={foodItem.image}
              alt="Dish"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <Button type="button" variant="outline" onClick={onDelete}>
            <Trash />
          </Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </Form>
  );
};
