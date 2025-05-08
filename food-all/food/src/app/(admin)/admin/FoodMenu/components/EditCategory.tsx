"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EditCategoryProps {
  categoriess: Category[];
  selectedCategoryId: string;
  onCategoryChange: (categoryId: string) => void;
}

type Category = {
  _id: string;
  categoryName: string;
};

export const EditCategory = ({
  categoriess,
  selectedCategoryId,
  onCategoryChange,
}: EditCategoryProps) => {
  return (
    <Select value={selectedCategoryId} onValueChange={onCategoryChange}>
      <SelectTrigger className="w-[288px]">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        {categoriess.map((item) => (
          <SelectItem key={item._id} value={item._id}>
            {item.categoryName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
