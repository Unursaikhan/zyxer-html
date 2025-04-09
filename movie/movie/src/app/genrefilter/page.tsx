"use client";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useGenres } from "@/app/_components/GenreProvider";
import { Footer } from "@/app/_components/Footer";
import { Star } from "../assets/Star";
import { Dark } from "../assets/Dark";
import { Pagg } from "../UpcomingSeemore/_components/Pagnition";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzgxODUwMTFjZDUyNTJiNGViY2I4ZjA4OWJkMWRlOSIsIm5iZiI6MTc0MzQwMzI2OS43NjYsInN1YiI6IjY3ZWEzOTA1YTk4ZGM4MTNiMGY3MDQxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1XLqvV8qnfJkxisJJn-f7LvyMPNnPkMeUkdvzEL3mU";
export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  popularity: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: string;
};

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const searchParamas = useSearchParams();
  const genre = searchParamas.get("genre");
  const { genres } = useGenres();
  const [page, setPage] = useState(1);
  const [last, setLast] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genre}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      setMovies(data.results);
      setLast(data.total_pages);
    };
    getMovies();
  }, [genre, page]);

  return (
    <div className=" w-full flex items-center justify-center mt-[52px]">
      <div className=" w-[375px] lg:w-[1280px] flex flex-col gap-8 ">
        <div className="text-[30px] font-semibold">Search filter</div>
        <div className="lg:flex">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[24px] font-semibold">Genres</p>
              <p>See lists of movies by genre</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:w-[387px] ">
              {genres.map(({ id, name }) => (
                <Link
                  key={id}
                  href={`/genrefilter?genre=${id}`}
                  onClick={() => {
                    setPage(1);
                  }}
                >
                  <Badge
                    variant={genre === id.toString() ? "default" : "outline"}
                  >
                    {name} &gt;
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-[40px] lg:grid lg:grid-cols-4 lg:gap-8 ">
            {movies.map((movie) => (
              <Link
                href={`/movie/${movie.id}`}
                key={movie.id}
                className="bg-[#f4f4f5]  rounded-md flex flex-col gap-2 dark:bg-[#555556]"
              >
                <div className=" hover:scale-95">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  />
                </div>
                <div className="h-[23px] flex items-center">
                  <div className="flex dark:hidden">
                    <Star />
                  </div>
                  <div className="hidden dark:flex">
                    <Dark />
                  </div>
                  <p>{movie.vote_average.toString().slice(0, 3)}/10</p>
                </div>
                <p className=" text-3">{movie.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <Pagg page={page} setPage={setPage} last={last} />
        <Footer />
      </div>
    </div>
  );
}
