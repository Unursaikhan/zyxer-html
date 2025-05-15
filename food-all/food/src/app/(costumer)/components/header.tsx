import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CartSvg } from "../assets/CatsSvg";
import { CartSvgWhite } from "../assets/CartWhiteSvg";
import { Cart } from "./Cart";
import { Orders } from "./Order";

export const HeaderSignedIn = () => {
  return (
    <div className="bg-[#18181B] w-[1440px] h-[68px] px-22 flex items-center justify-between">
      <div className="flex gap-x-4 items-center">
        <img
          src="Screenshot 2024-12-17 at 18.02.18 1 (Traced).png"
          alt=""
          className="h-[37px]"
        />
        <div>
          <div className="flex font-semibold text-[20px] text-white">
            Nom<p className="text-[#EF4444]">Nom</p>
          </div>
          <div className="text-white">Swift delivery</div>
        </div>
      </div>
      <div className="flex gap-[14px]">
        <div className="flex gap-1 px-4 h-9 bg-white items-center rounded-3xl">
          <img src="Location Icon.png" alt="" />
          <p className="text-[#EF4444]">Delivery address:</p>
          <p className="text-[#71717A]">Add Location</p>
          <img src="Chevron Icon.png" alt="" />
        </div>
        <Sheet>
          <SheetTrigger>
            <button className="w-9 h-9 flex justify-center items-center bg-white rounded-[9999px]">
              <CartSvg />
            </button>
          </SheetTrigger>
          <SheetContent className="bg-[#404040] border-none">
            <SheetHeader>
              <div className="flex gap-6 px-8 py-8 flex-col">
                <SheetTitle className="flex gap-3 text-white">
                  <CartSvgWhite />
                  Order detail
                </SheetTitle>
                <div>
                  <Tabs
                    defaultValue="cart"
                    className="w-[471px] h-[44px] flex gap-2 px-1 py-1 rounded-3xl border-none "
                  >
                    <TabsList>
                      <TabsTrigger
                        value="cart"
                        className="w-[227.5px] rounded-3xl "
                      >
                        Cart
                      </TabsTrigger>
                      <TabsTrigger
                        value="order"
                        className="w-[227.5px] rounded-3xl"
                      >
                        Order
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="cart">
                      <Cart />
                    </TabsContent>
                    <TabsContent value="order">
                      <Orders />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className="w-9 h-9 bg-[#EF4444] rounded-[100px] flex justify-center items-center">
          <img src="user.png" alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};
