import { Appetizers } from "./Appetizers";
import { LunchFav } from "./LunchFav";
import { MainDishes } from "./MainDishes";
import { Salad } from "./Salad";

export const Menu = () => {
  return (
    <div className="flex flex-col gap-[54px] mt-10 px-10">
      <Appetizers />
      <Salad />
      <LunchFav />
      <MainDishes />
    </div>
  );
};
