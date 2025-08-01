// app/PopularSeemore/PopularSeemoreClient.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Movie } from "@/app/_components/Upcoming";
import { Pagg } from "@/app/UpcomingSeemore/_components/Pagnition";
import { Footer } from "@/app/_components/Footer";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI5NjAxYzc3MWJiNjVhNDQxOGRkNDc5MzEzZWVjYSIsIm5iZiI6MTc0MzQwNTc5Ni4zMzIsInN1YiI6IjY3ZWE0MmU0NzAwYTZhOTRjNmU1N2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukgjSLlweWW_iLKPPEo75uBFjp48H1trXme9bnnabkM";

type Response = {
  results: Movie[];
  total_pages: number;
};

export default function PopularSeemore() {
  const searchParams = useSearchParams();
  const [page, setPage] = useState<number>(
    Number(searchParams.get("page")) || 1
  );
  const [movies, setMovies] = useState<Movie[]>([]);
  const [last, setLast] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get<Response>(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        );
        setMovies(data.results);
        setLast(data.total_pages);
      } catch (err) {
        console.error("Failed to fetch movies", err);
      }
    };
    fetchMovies();
  }, [page]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[375px] lg:w-[1440px] bg-white dark:bg-black flex-col">
        <div className="px-5 lg:px-20 mb-[32px] w-full h-[36px] flex justify-between">
          <h2 className="font-bold text-[24px]">Popular</h2>
        </div>
        <div className="px-5 lg:px-20 grid lg:grid-cols-5 grid-cols-2 w-full h-fit lg:gap-[32px] gap-[20px] mb-[32px]">
          {movies.map((movie) => (
            <Link
              className="flex-col gap-y-[4px] justify-center relative"
              href={`/movie/${movie.id}`}
              key={movie.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                className="hover:scale-95"
              />
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
                    <span>{movie.vote_average}/10</span>
                  </div>
                  <h4>{movie.title}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mb-[76px] flex justify-end">
          <Pagg page={page} setPage={setPage} last={last} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
