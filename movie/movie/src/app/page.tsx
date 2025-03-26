import Image from "next/image";
import { Navigation } from "./components/Navigation";
import { Carousel } from "./components/Carousel";
import { Upcoming } from "./components/Upcoming";
import { Popular } from "./components/Popular";
import { TopRated } from "./components/TopRated";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[375px] lg:w-[1440px] bg-white flex-col">
        <Navigation />
        <Carousel />
        <Upcoming />
        <Popular />
        <TopRated />
        <Footer />
      </div>
    </div>
  );
}
