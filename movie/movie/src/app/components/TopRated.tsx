const main = [
  {
    title: "Pulp Fiction",
    image: "/toprated/tr1.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "The Lord of the Rings: Fellowship of the Kings",
    image: "/toprated/tr2.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "The Good, the Bad and the Ugly",
    image: "/toprated/tr3.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "Forrest Gump",
    image: "/toprated/tr4.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "Fight Club",
    image: "/toprated/tr5.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "Saving Private Ryan",
    image: "/toprated/tr6.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "City of God",
    image: "/toprated/tr7.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "The Green Mile",
    image: "/toprated/tr8.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "Life is Beautiful",
    image: "/toprated/tr9.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
  {
    title: "Terminator 2: Judgement Day",
    image: "/toprated/tr10.png",
    rating: "6.9/10",
    star: "/carousel/star.png",
  },
];
export const TopRated = () => {
  return (
    <div className="w-full lg:px-[80px] px-[20px] flex-col gap-y-[32px] lg:mb-[51px] mb-[32px]">
      <div className="mb-[32px] w-full h-[36px] flex justify-between">
        <h2 className="font-bold text-[24px]">Top Rated</h2>
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
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 w-full h-fit mb:gap-[32px] gap-[20px]">
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
