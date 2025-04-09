"use client";
import { ChangeEventHandler, useEffect, useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import { useSearchParams } from "next/navigation";
import { useGenres } from "./GenreProvider";
import axios from "axios";
import { X } from "../assets/X";
import { Xdark } from "../assets/Darkx";

type NavigationType = {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
};
export type Movie = {
  title: string;
  id: number;
  name: string;
  poster_path: string;
  vote_average: string;
  release_date: string;
};

export const Navigation = ({ isDark, setIsDark }: NavigationType) => {
  const inputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };
  const ACCESS_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzgxODUwMTFjZDUyNTJiNGViY2I4ZjA4OWJkMWRlOSIsIm5iZiI6MTc0MzQwMzI2OS43NjYsInN1YiI6IjY3ZWEzOTA1YTk4ZGM4MTNiMGY3MDQxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1XLqvV8qnfJkxisJJn-f7LvyMPNnPkMeUkdvzEL3mU";
  const [search, setSearch] = useState(false);
  const searchParamas = useSearchParams();
  const genre = searchParamas.get("genre");
  const { genres } = useGenres();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [clicked, setClicked] = useState(false);
  const toggle = () => {
    setClicked((prevState) => !prevState);
  };
  const handleSearch = () => {
    setSearch((prevState) => !prevState);
  };
  console.log(search);

  useEffect(() => {
    const searchMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      setSearchResults(data.results);
      console.log(data);
    };

    searchMovies();
  }, [searchValue]);
  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?language=en`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      setMovies(data.genres);
    };
    getMovies();
  }, [genre]);

  return (
    <div className="w-[1440px] h-[59px] px-[20px] lg:px-[80px] flex items-center relative lg:mb-[24px] dark:text-white dark:bg-black">
      {search ? (
        <div className="w-full h-[35px] flex items-center gap-4 justify-between">
          <Popover>
            <PopoverTrigger onClick={toggle} className="flex items-center">
              <div className="border border-[E4E4E7] dark:border-[27272A] w-9 h-9 rounded-[12px] flex justify-center items-center">
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
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-[585px]  flex flex-col">
              <div className="text-[24px] font-semibold mb-1">Genres</div>
              <div className="mb-4">See lists of movies by genre</div>
              <div className="w-full h-[1px] bg-[#E4E4E7] mb-4"></div>
              <div className="flex flex-wrap gap-4">
                {movies.map((item) => {
                  return (
                    <Link href={`/genrefilter?genre=${item.id}`} key={item.id}>
                      <Badge
                        className="w-fit py-[2px] rounded-[20px]"
                        variant="outline"
                      >
                        {item.name}
                        {isDark ? <Arrowdark /> : <Arrow />}
                      </Badge>
                    </Link>
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>
          <input
            className="w-full h-[36px] p-3"
            placeholder="Search..."
            type="text"
            value={searchValue}
            onChange={inputChange}
          ></input>
          <div
            className="w-9 h-9 flex items-center justify-center"
            onClick={() => {
              setSearch(false);
            }}
          >
            {isDark ? <Xdark /> : <X />}
          </div>
        </div>
      ) : (
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
                  {movies.map((item) => {
                    return (
                      <Link
                        href={`/genrefilter?genre=${item.id}`}
                        key={item.id}
                      >
                        <Badge
                          className="w-fit py-[2px] rounded-[20px]"
                          variant="outline"
                        >
                          {item.name}
                          {isDark ? <Arrowdark /> : <Arrow />}
                        </Badge>
                      </Link>
                    );
                  })}
                </div>
              </PopoverContent>
            </Popover>

            <div className="lg:w-[379px] h-full flex px-[12px] items-center rounded-[6px] gap-[12px] border border-[#E4E4E7]">
              {isDark ? <Searchdark /> : <Search />}
              <input
                className="w-[379px] h-[36px] p-3   hidden lg:flex relative border-none outline-none"
                placeholder="Search..."
                type="text"
                value={searchValue}
                onChange={inputChange}
              ></input>
            </div>
          </div>
          <div className="flex gap-[12px]">
            <div
              className="w-[36px] h-[36px] flex lg:hidden justify-center items-center  border border-[#E4E4E7] rounded-[10px]"
              onClick={handleSearch}
            >
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
      )}
    </div>
  );
};
