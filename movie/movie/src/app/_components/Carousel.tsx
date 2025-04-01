export const Carousel = () => {
  return (
    <div className=" w-[375px] lg:w-[1440px] mb-[52px] flex overflow-hidden relative">
      <div className="w-fit flex animate-wiggle relative">
        <div className=" w-[375px] lg:w-[1440px] relative ">
          <img
            className="lg:w-[1440px] lg:h-[600px] w-[375px] h-[246px]"
            src="/carousel/wicked.png"
          ></img>
          <div className="w-[375px] lg:w-[404px]  flex flex-col gap-4 lg:absolute lg:top-[178px] lg:left-[140px] p-5">
            <div className="w-[325px]  lg:h-[112px] flex lg:flex-col">
              <div className="flex flex-col w-[252px]">
                <p className="lg:text-white text-black  dark:text-white">
                  Now Playing:
                </p>
                <p className="lg:text-white text-black  dark:text-white text-[36px] font-bold">
                  Wicked
                </p>
              </div>
              <div className=" flex  items-center">
                <img src="/carousel/star.png"></img>
                <p className="lg:text-white text-black  dark:text-white">
                  6.9/10
                </p>
              </div>
            </div>
            <p className="lg:text-white text-black dark:text-white">
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.{" "}
            </p>
            <button className="w-[145px] h-[40px] lg:bg-white rounded-[8px] flex gap-2 items-center px-4 bg-black dark:bg-white text-white dark:text-black lg:text-black">
              &#9655; Watch Trailer
            </button>
          </div>
          <button className="max-sm:hidden w-[40px] h-[40px] bg-white flex justify-center items-center absolute top-[280px] left-[1300px] rounded-[9999px]">
            &gt;
          </button>
        </div>
        <div className=" w-[375px] lg:w-[1440px] relative ">
          <img
            className="lg:w-[1440px] lg:h-[600px] w-[375px] h-[246px]"
            src="/carousel/gladiator.png"
          ></img>
          <div className="w-[375px] lg:w-[404px]  flex flex-col gap-4 lg:absolute lg:top-[178px] lg:left-[140px] p-5">
            <div className="w-[325px]  lg:h-[112px] flex lg:flex-col">
              <div className="flex flex-col w-[252px]">
                <p className="lg:text-white text-black dark:text-white">
                  Now Playing:
                </p>
                <p className="lg:text-white text-black  dark:text-white text-[36px] font-bold">
                  Gladiator 2
                </p>
              </div>
              <div className=" flex  items-center">
                <img src="/carousel/star.png"></img>
                <p className="lg:text-white text-black  dark:text-white">
                  6.9/10
                </p>
              </div>
            </div>
            <p className="lg:text-white text-black  dark:text-white">
              After his home is conquered by the tyrannical emperors who now
              lead Rome, Lucius is forced to enter the Colosseum and must look
              to his past to find strength to return the glory of Rome to its
              people.
            </p>
            <button className="w-[145px] h-[40px] lg:bg-white rounded-[8px] flex gap-2 items-center px-4 bg-black dark:bg-white text-white dark:text-black lg:text-black">
              &#9655; Watch Trailer
            </button>
          </div>
          <button className="max-sm:hidden w-[40px] h-[40px] bg-white flex justify-center items-center absolute top-[280px] left-[44px] rounded-[9999px]">
            &lt;
          </button>
          <button className="max-sm:hidden w-[40px] h-[40px] bg-white flex justify-center items-center absolute top-[280px] left-[1300px] rounded-[9999px]">
            &gt;
          </button>
        </div>
        <div className="w-[375px]  lg:w-[1440px] relative ">
          <img
            className="lg:w-[1440px] lg:h-[600px] w-[375px] h-[246px]"
            src="/carousel/moana.png"
          ></img>
          <div className="w-[375px] lg:w-[404px]  flex flex-col gap-4 lg:absolute lg:top-[178px] lg:left-[140px] p-5">
            <div className="w-[325px]  lg:h-[112px] flex lg:flex-col">
              <div className="flex flex-col w-[252px]">
                <p className="lg:text-white text-black dark:text-white">
                  Now Playing:
                </p>
                <p className="lg:text-white text-black dark:text-white text-[36px] font-bold">
                  Moana 2
                </p>
              </div>
              <div className=" flex  items-center">
                <img src="/carousel/star.png"></img>
                <p className="lg:text-white text-black  dark:text-white">
                  6.9/10
                </p>
              </div>
            </div>
            <p className="lg:text-white text-black  dark:text-white">
              After receiving an unexpected call from her wayfinding ancestors,
              Moana must journey to the far seas of Oceania and into dangerous,
              long-lost waters for an adventure unlike anything she's ever
              faced.
            </p>
            <button className="w-[145px] h-[40px] lg:bg-white rounded-[8px] flex gap-2 items-center px-4 bg-black dark:bg-white text-white dark:text-black lg:text-black">
              &#9655; Watch Trailer
            </button>
          </div>
          <button className="max-sm:hidden w-[40px] h-[40px] bg-white flex justify-center items-center absolute top-[280px] left-[44px] rounded-[9999px]">
            &lt;
          </button>
        </div>
      </div>
    </div>
  );
};
