"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "./Upcoming";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI5NjAxYzc3MWJiNjVhNDQxOGRkNDc5MzEzZWVjYSIsIm5iZiI6MTc0MzQwNTc5Ni4zMzIsInN1YiI6IjY3ZWE0MmU0NzAwYTZhOTRjNmU1N2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukgjSLlweWW_iLKPPEo75uBFjp48H1trXme9bnnabkM";

type Response = {
  results: Movie[];
};
export const Popular = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const getMoviesByAxios = async () => {
      const { data } = await axios.get<Response>(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );

      setMovies(data.results);
    };
    getMoviesByAxios();
  }, []);
  return (
    <div className="w-full lg:px-[80px] px-[20px] flex-col gap-y-[32px] lg:mb-[52px] mb-[32px]">
      <div className="mb-[32px] w-full h-[36px] flex justify-between">
        <h3 className="text-[24px] font-bold">Popular</h3>
        <div className="flex items-center gap-[8px]">
          See more
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.3335 8.00016H12.6668M12.6668 8.00016L8.00016 3.3335M12.6668 8.00016L8.00016 12.6668"
              stroke="#18181B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 w-full h-fit lg:gap-[32px] gap-[20px]">
        {movies.slice(0, 10).map((item) => {
          return (
            <div
              className="flex-col gap-y-[4px] justify-center relative"
              key={item.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              />
              <div className="absolute top-0 w-[159px] h-[233px] lg:w-[230px] lg:h-[340px] bg-black opacity-0 hover:opacity-50">
                {" "}
              </div>
              <div className="bg-[#F4F4F5] dark:bg-[#27272A] dark:text-white w-full h-[95px] flex p-[8px]">
                <div>
                  <div className="flex items-center gap-1 mb-[4px]">
                    <img
                      src="/carousel/star.png"
                      alt="star"
                      className="dark:hidden"
                    />
                    <img
                      src="carousel/stardark.png"
                      alt="darkstar"
                      className="hidden dark:flex w-[24px] h-[25px]"
                    />
                    <span className="">{item.vote_average}/10</span>
                  </div>
                  <h4 className="">{item.title}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
