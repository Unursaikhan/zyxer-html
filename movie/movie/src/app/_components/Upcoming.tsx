"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI5NjAxYzc3MWJiNjVhNDQxOGRkNDc5MzEzZWVjYSIsIm5iZiI6MTc0MzQwNTc5Ni4zMzIsInN1YiI6IjY3ZWE0MmU0NzAwYTZhOTRjNmU1N2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukgjSLlweWW_iLKPPEo75uBFjp48H1trXme9bnnabkM";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  popularity: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
};
type Response = {
  results: Movie[];
};

export const Upcoming = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const getMoviesByAxios = async () => {
      const { data } = await axios.get<Response>(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
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
  console.log(movies);
  return (
    <div className="w-full px-[20px] lg:px-[80px] flex-col lg:mb-[52px] mb-[32px]">
      <div className="mb-[32px] w-full h-[36px] flex justify-between">
        <h2 className="font-bold text-[24px]">Upcoming</h2>
        <Link href={"/UpcomingSeemore"} className="flex items-center gap-[8px]">
          See more &#8594;
        </Link>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 w-full h-fit lg:gap-[32px] gap-[20px] ">
        {movies.slice(0, 10).map((item) => {
          return (
            <Link
              className="flex-col gap-y-[4px] justify-center relative"
              href={`/movie/${item.id}`}
              key={item.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                className="hover:scale-95"
              />

              <div className="bg-[#F4F4F5] dark:bg-[#27272A] dark:text-white w-full h-[95px] flex p-[8px]">
                <div className="">
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};
