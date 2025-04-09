"use client";
import { memo, useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "next/navigation";
import { Footer } from "@/app/_components/Footer";
import { Star } from "@/app/assets/Star";
import { Dark } from "@/app/assets/Dark";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { MoreMap } from "@/app/_components/Morelikethis";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Triangle } from "@/app/assets/Triangle";

type MovieDetails = {
  poster_path: string;
  adult: boolean;
  title: string;
  id: number;
  overview: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  genres: {
    id: number;
    name: string;
  }[];
};
type Crew = {
  name: string;
  job: string;
};
type Response = {
  cast: Casting[];
  crew: Crew[];
};
type Casting = {
  name: string;
};
type params = {
  id: string;
};
type Video = {
  results: [];
  type: string;
  key: string;
};
export default function H() {
  const [movies, setMovies] = useState<MovieDetails | null>(null);
  const [directors, setDirectors] = useState<Crew | null>(null);
  const [writers, setWriters] = useState<Crew[]>([]);
  const [cast, setCast] = useState<Casting[]>([]);
  const [trailer, setTrailer] = useState<Video[]>([]);
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

      setMovies(data);
    };

    getMovie();
  }, [id]);
  useEffect(() => {
    const getCrew = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      const director = data.crew.find(
        (member: Crew) => member.job === "Director"
      );
      const writers = data.crew.filter(
        (member: Crew) => member.job === "Writer"
      );
      const casting = data.cast;
      setDirectors(director || null);
      setWriters(writers);
      setCast(casting);
      console.log(data);
    };
    getCrew();
  }, [id]);
  useEffect(() => {
    const fetchMovieTrailer = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      const trailerData = data.results.find(
        (video: Video) => video.type === "Trailer"
      );
      setTrailer(trailerData.key);
    };
    fetchMovieTrailer();
  }, []);
  return (
    <div className="w-full flex justify-center">
      <div>
        <div className="w-[375px] lg:w-[1440px] bg-white dark:bg-black flex-col px-5 lg:px-45 ">
          <div className="flex justify-between mb-6">
            <div className="flex flex-col gap-1">
              <h1 className="lg:text-[36px] text-[24px] font-semibold">
                {movies?.title}
              </h1>
              <p className="lg:text-[18px] text-[14px]">
                {movies?.release_date}
              </p>
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
                  <h1 className="lg:text-[15px] text-[12px] text-[#71717A]">
                    <b className="text-[black] dark:text-[white] lg:text-[18px] text-[14px]">
                      {movies?.vote_average}
                    </b>
                    /10
                  </h1>
                  <div className=" text-[#71717A] lg:text-[24px] text-[14px] ">
                    {movies?.vote_count} <p className="lg:flex hidden">votes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8 mb-8 ">
            <img
              src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`}
              className="h-[428px] lg:flex hidden"
            />
            <div className="relative w-full">
              <img
                src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`}
                className="lg:h-[428px] h-[211px] w-full"
              />

              <Dialog>
                <DialogTrigger>
                  <div className="absolute  lg:w-50 w-[174px] flex  items-center z-10 lg:top-85 top-35  ">
                    <div className=" w-10 h-10 rounded-full  m-4 flex items-center justify-center lg:text-6 text-4 bg-white ">
                      <Triangle />
                    </div>
                    <p className="text-white">Play Trailer</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-transparent border-none">
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <div className="lg:w-200 lg:h-100 w-full h-full">
                      <iframe
                        className="relative lg:absolute lg:left-[-150px lg:w-200 lg:h-100 w-full h-full"
                        src={`https://www.youtube.com/embed/${trailer}`}
                        title="Movie Trailer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex flex-col gap-5 mb-[31px]">
            <div className="flex gap-[34px]">
              <img
                src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`}
                className="w-[100px] h-[148px] lg:hidden flex"
              />
              <div className="flex flex-col">
                <div className="flex flex-wrap gap-4 mb-5">
                  {movies?.genres.map((genre, index) => (
                    <Badge key={index} variant="outline">
                      {genre.name}
                    </Badge>
                  ))}
                </div>

                <div>{movies?.overview}</div>
              </div>
            </div>
            <div>
              <div className="flex gap-[53px] ">
                <b>Director</b>
                {directors?.name || "Not Available"}
              </div>
              <Separator className="my-4" />
              <div className="flex gap-[53px]">
                <b>Writers</b>
                <div className="flex">
                  {writers.length > 0
                    ? writers.map((writer, index) => (
                        <div key={index}>
                          {writer.name}
                          {index < writers.length - 1 ? " · " : ""}
                        </div>
                      ))
                    : "Not Available"}
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex  gap-[53px]">
                <b>Stars</b>
                <div>
                  {cast.length > 0
                    ? cast.map((writer, index) => (
                        <span key={index}>
                          {writer.name}
                          {index < cast.length - 1 ? " · " : ""}
                        </span>
                      ))
                    : "Not Available"}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-[32px] w-full h-[36px] flex justify-between">
              <h2 className="font-bold text-[24px]">More like this</h2>
              <Link
                href={`/morelikethis/${movies?.id}`}
                className="flex items-center gap-[8px]"
              >
                See more &#8594;
              </Link>
            </div>
            <MoreMap />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
