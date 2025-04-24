export const LunchFav = () => {
  const LunchFavItems = [
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
  ];
  return (
    <div className="flex flex-col gap-[54px]">
      <h1 className="font-semibold text-[30px] text-white">Lunch favorites</h1>
      <div className="grid grid-cols-3 gap-9">
        {LunchFavItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 p-4 bg-white rounded-2xl"
          >
            <img src={item.image} alt="" />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h1 className="text-[#EF4444] font-semibold text-[24px]">
                  {item.name}
                </h1>
                <p className="font-semibold text-black text-[18px]">
                  ${item.price}
                </p>
              </div>
              <p className="text-black">{item.desciption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
