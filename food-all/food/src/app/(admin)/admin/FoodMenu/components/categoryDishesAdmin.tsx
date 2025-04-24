export const CategoryDishes = ({ foods, name, quantity }) => {
  return (
    <div className="flex flex-col px-5 py-20 gap-4 bg-white rounded-2xl">
      <h1 className="font-semibold  text-[20px]">
        {name} ‎ ({quantity})
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex justify-center items-center border border-dashed border-red-500 rounded-2xl ">
          <div className="flex flex-col items-center gap-6 ">
            <div className="w-10 bg-[#EF4444] flex justify-center items-center h-10 rounded-3xl">
              <img src="/plus.png" alt="" />
            </div>
            <p className="w-[150px] text-center">Add new Dish to Salads</p>
          </div>
        </div>
        {foods.map((item) => (
          <div className="p-4 gap-5 flex border rounded-2xl flex-col">
            <div className="w-full">
              <img src={item.image} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h1 className="text-[#EF4444] font-medium text-[14px]">
                  {item.name}
                </h1>
                <p className="text-[14px]">${item.price}</p>
              </div>
              <p className="text-[12px]">{item.desciption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
