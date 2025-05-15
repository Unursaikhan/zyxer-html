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
import { Plus } from "../assets/plus";
interface CategoriesFilterProps {
  selected: string | null;
  setSelected: (category: string | null) => void;
  categoriess: any[];
  countFoodsInCategory: (category: string) => number;
  newCategory: string;
  setNewCategory: (name: string) => void;
  postCategory: () => void;
  error: string;
  categorySuccess: boolean;
}
export const CatogoriesFilter = ({
  selected,
  setSelected,
  categoriess,
  countFoodsInCategory,
  newCategory,
  setNewCategory,
  postCategory,
  error,
  categorySuccess,
}: CategoriesFilterProps) => {
  return (
    <div className="flex flex-col rounded-2xl px-6 py-6 bg-white gap-4">
      <h1 className="font-semibold text-[20px]">Dishes category</h1>
      <div className="flex flex-wrap gap-3 ">
        <Badge
          className={`bg-white text-black flex rounded-3xl text-[14px] h-9 items-center gap-2 hover:bg-[#F4F4F5] ${
            selected === "All Dishes" ? "border-[#EF4444]" : "border-[#E4E4E7]"
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
            onClick={() => setSelected(item.categoryName)}
          >
            {item.categoryName}
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
          <DialogContent className="w-[472px]">
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
                ) : null}
                {categorySuccess && (
                  <p className="text-green-600 text-sm text-center">
                    Амжилттай нэмэгдлээ!
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
  );
};
