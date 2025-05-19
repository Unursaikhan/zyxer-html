"use client";
interface Food {
  _id: string;
  foodname: string;
  price: number;
  ingredients: string;
  image: string;
  category: {
    categoryName: string;
    _id: string;
  };
}

interface SelectedCategoryProps {
  selected: string;
  foods: Food[];
  filterFoodsByCategory: (category: string) => Food[];
}

export const SelectedCategory = ({
  selected,
  filterFoodsByCategory,
}: SelectedCategoryProps) => {
  const filteredFoods = filterFoodsByCategory(selected);

  return (
    <div className="flex flex-col px-5 py-20 gap-4 bg-white rounded-2xl">
      <div className="grid grid-cols-4 gap-4">
        {filteredFoods.map((foodItem) => (
          <div
            key={foodItem._id}
            className="p-4 gap-5 flex border rounded-2xl flex-col"
          >
            <div className="w-full relative">
              <img
                src={foodItem.image}
                alt={foodItem.foodname}
                className="rounded-2xl w-full h-40 "
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
  );
};
