import Link from "next/link";

const main = [
  {
    title: "Dear Santa",
    image: "/upcoming/up1.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "How To Train Your Dragon Live Action",
    image: "/upcoming/up2.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "Alien Romulus",
    image: "/upcoming/up3.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "From the Ashes",
    image: "/upcoming/up4.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "Space Dogg",
    image: "/upcoming/up5.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "The Order",
    image: "/upcoming/up6.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "Y2K",
    image: "/upcoming/up7.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "Solo Leveling:‎ ‎ ‎ ‎ ‎ ReAwakening",
    image: "/upcoming/up8.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "Get Away",
    image: "/upcoming/up9.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "Sonic the Hedgehog 3",
    image: "/upcoming/up10.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
];
export const Upcoming = () => {
  return (
    <div className="w-full px-[20px] lg:px-[80px] flex-col lg:mb-[52px] mb-[32px]">
      <div className="mb-[32px] w-full h-[36px] flex justify-between">
        <h2 className="font-bold text-[24px]">Upcoming</h2>
        <Link href={"/UpcomingSeemore"} className="flex items-center gap-[8px]">
          See more &#8594;
        </Link>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 w-full h-fit lg:gap-[32px] gap-[20px]">
        {main.map((item) => {
          return (
            <div
              className="flex-col gap-y-[4px] justify-center relative"
              key={item.title}
            >
              <img src={item.image} alt={item.title} />
              <div className="absolute top-0 w-[159px] h-[233px] lg:w-[230px] lg:h-[340px] bg-black opacity-0 hover:opacity-50">
                {" "}
              </div>
              <div className="bg-[#F4F4F5] w-full h-[95px] flex p-[8px]">
                <div>
                  <div className="flex items-center gap-1 mb-[4px]">
                    <img src={item.star} alt="star" />
                    <span className="text-black">{item.rating}</span>
                  </div>
                  <h4 className="text-black">{item.title}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
