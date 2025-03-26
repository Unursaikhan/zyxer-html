import { Down } from "../assets/Down";
import { Logo } from "../assets/Logo";
import { Moon } from "../assets/Moon";
import { Search } from "../assets/Search";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  return (
    <div className="w-full h-[59px] px-[80px] flex items-center lg:mb-[24px]">
      <div className="w-full h-[35px] flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="hidden lg:flex gap-[12px] h-full">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="lg:w-[379px] h-full flex px-[12px] items-center rounded-[6px] gap-[12px] border border-[#E4E4E7]">
            <Search />
            <input
              placeholder="Search.."
              className="border-none placeholder:text-[#71717A] hidden lg:flex"
            />
          </div>
        </div>
        <div className="w-[36px] h-[36px] flex justify-center items-center  border border-[#E4E4E7] rounded-[10px]">
          <Moon />
        </div>
      </div>
    </div>
  );
};
