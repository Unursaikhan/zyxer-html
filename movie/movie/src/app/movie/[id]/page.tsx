"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "next/navigation";
import { Footer } from "@/app/_components/Footer";
import { Star } from "@/app/assets/Star";
import { Dark } from "@/app/assets/Dark";
import { Badge } from "@/components/ui/badge";

type MovieDetails = {
  poster_path: string;
  adult: boolean;
  title: string;
  id: number;
  overview: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
};
type params = {
  id: string;
};

export default function H() {
  const [movies, setMovies] = useState<MovieDetails | null>(null);
  const { id } = useParams<params>();
  const ACCESS_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI5NjAxYzc3MWJiNjVhNDQxOGRkNDc5MzEzZWVjYSIsIm5iZiI6MTc0MzQwNTc5Ni4zMzIsInN1YiI6IjY3ZWE0MmU0NzAwYTZhOTRjNmU1N2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukgjSLlweWW_iLKPPEo75uBFjp48H1trXme9bnnabkM";

  useEffect(() => {
    const getMovie = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN} `,
          },
        }
      );
      console.log(data);

      setMovies(data);
    };

    getMovie();
  }, [id]);
  console.log(movies);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[375px] lg:w-[1440px] bg-white dark:bg-black flex-col px-5 lg:px-45 ">
        <div className="flex justify-between mb-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-[36px] font-bold">{movies?.title}</h1>
            <p className="text-[18px]">{movies?.release_date}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Rating</h1>
            <div className="flex items-center gap-1 relative">
              <div className="dark:hidden">
                <Star />
              </div>
              <div className="hidden dark:flex ">
                <Dark />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[15px] text-[#71717A]">
                  <b className="text-[black] dark:text-[white] text-[18px]">
                    {movies?.vote_average}
                  </b>
                  /10
                </h1>
                <div className="text-[#71717A]">{movies?.vote_count} votes</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 mb-8">
          <img
            src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`}
            className="h-[428px]"
          />
          <img
            src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`}
            className="h-[428px] w-full"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Badge></Badge>
        </div>
        <Footer />
      </div>
    </div>
  );
}
