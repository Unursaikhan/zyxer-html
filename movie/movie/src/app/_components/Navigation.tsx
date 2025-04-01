"use client";
import { useState } from "react";
import { Down } from "../assets/Down";
import { Logo } from "../assets/Logo";
import { Moon } from "../assets/Moon";
import { Search } from "../assets/Search";
import { Button } from "@/components/ui/button";

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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Up } from "../assets/Up";
import { Right } from "../assets/Right";
import Link from "next/link";
import { Sun } from "../assets/Sun";
import { DownDark } from "../assets/Downdark";
import { Updark } from "../assets/UpDark";
import { Arrowdark } from "../assets/Arrowdark";
import { Arrow } from "../assets/Arrow";
import { Searchdark } from "../assets/Searchdark";
const genres = [
  {
    genre: "Action",
  },
  { genre: "Adventure" },
  { genre: "Animation" },
  { genre: "Biography" },
  { genre: "Comedy" },
  { genre: "Crime" },
  { genre: "Documentary" },
  { genre: "Drama" },
  { genre: "Family" },
  { genre: "Fantasy" },
  { genre: "Film-Noir" },
  { genre: "Game-Show" },
  { genre: "History" },
  { genre: "Horror" },
  { genre: "Music" },
  { genre: "Musical" },
  { genre: "Mystery" },
  { genre: "News" },
  { genre: "Reality-TV" },
  { genre: "Romance" },
  { genre: "Sci-Fi" },
  { genre: "Short" },
  { genre: "Sport" },
  { genre: "Talk-Show" },
  { genre: "Thriller" },
  { genre: "War" },
  { genre: "Western" },
];
type NavigationType = {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
};

export const Navigation = ({ isDark, setIsDark }: NavigationType) => {
  const [clicked, setClicked] = useState(false);
  const toggle = () => {
    setClicked((prevState) => !prevState);
  };
  return (
    <div className="w-[1440px] h-[59px] px-[20px] lg:px-[80px] flex items-center lg:mb-[24px] dark:text-white dark:bg-black">
      <div className="w-full h-[35px] flex items-center justify-between">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="hidden lg:flex gap-[12px] h-full">
          <Popover>
            <PopoverTrigger
              onClick={toggle}
              className="flex items-center gap-[4px]"
            >
              <div>
                {clicked ? (
                  isDark ? (
                    <DownDark />
                  ) : (
                    <Down />
                  )
                ) : isDark ? (
                  <Updark />
                ) : (
                  <Up />
                )}
              </div>{" "}
              Genre
            </PopoverTrigger>
            <PopoverContent className="w-[585px]  flex flex-col">
              <div className="text-[24px] font-semibold mb-1">Genres</div>
              <div className="mb-4">See lists of movies by genre</div>
              <div className="w-full h-[1px] bg-[#E4E4E7] mb-4"></div>
              <div className="flex flex-wrap gap-4">
                {" "}
                {genres.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      className="w-fit py-[2px] rounded-[20px]"
                      variant="outline"
                    >
                      {item.genre}
                      {isDark ? <Arrowdark /> : <Arrow />}
                    </Button>
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>

          <div className="lg:w-[379px] h-full flex px-[12px] items-center rounded-[6px] gap-[12px] border border-[#E4E4E7]">
            {isDark ? <Searchdark /> : <Search />}
            <input
              placeholder="Search.."
              className="w-full h-full border-none placeholder:text-[#71717A] hidden lg:flex"
            />
          </div>
        </div>
        <div className="flex gap-[12px]">
          <div className="w-[36px] h-[36px] flex lg:hidden justify-center items-center  border border-[#E4E4E7] rounded-[10px]">
            {isDark ? <Searchdark /> : <Search />}
          </div>
          <div
            onClick={() => setIsDark(!isDark)}
            className="w-[36px] h-[36px] flex justify-center items-center  border border-[#E4E4E7] rounded-[10px]"
          >
            <div>{isDark ? <Sun /> : <Moon />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
