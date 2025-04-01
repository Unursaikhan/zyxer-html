import Image from "next/image";

import { Carousel } from "./_components/Carousel";
import { Upcoming } from "./_components/Upcoming";
import { Popular } from "./_components/Popular";
import { TopRated } from "./_components/TopRated";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[375px] lg:w-[1440px] bg-white dark:bg-black flex-col">
        <Carousel />
        <Upcoming />
        <Popular />
        <TopRated />
        <Footer />
      </div>
    </div>
  );
}
