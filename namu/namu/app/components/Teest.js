"use client";
import { useState } from "react";

export const Main = () => {
  const [clickedMenu, setClickedMenu] = useState(false);
  const [clickedBonus, setClickedBonus] = useState(false);
  const [clickedZah, setClickedZah] = useState(false);

  const handleClickedMenu = () => {
    setClickedMenu((prevState) => !prevState);
  };
  const handleClickedBonus = () => {
    setClickedBonus((prevState) => !prevState);
  };
  const handleClickedZah = () => {
    setClickedZah((prevState) => !prevState);
  };
  return (
    <div className="flex w-screen justify-center bg-white">
      <div className="flex-col w-[1440px] bg-white ">
        <div className="flex h-[110px] items-center justify-between px-[80px]">
          <div className="flex w-[213px] gap-[8px]">
            <img src="image 20.png" />
            <div className="text-[#28282A] text-[20px] font-bold">
              coffee namu mongolia
            </div>
          </div>
          <div className="flex  gap-[50px] items-center ">
            <div className="flex gap-[24px]">
              <div
                className="flex gap-[4px] relative"
                onClick={handleClickedMenu}
                style={{ color: clickedMenu ? "#AA714A" : "#28282A" }}
              >
                <img
                  src={
                    clickedMenu
                      ? "free_breakfast (1).png"
                      : "free_breakfast.png"
                  }
                />
                Меню
                <div
                  className="w-full h-[3px] bg-[#AA714A] absolute bottom-[-5px] opacity-0"
                  style={{ opacity: clickedMenu ? "1" : "0" }}
                ></div>
              </div>
              <div
                className="flex gap-[4px] relative"
                onClick={handleClickedBonus}
                style={{ color: clickedBonus ? "#AA714A" : "#28282A" }}
              >
                <img src={clickedBonus ? "gift1.png" : "gift.png"} />
                Бонус
                <div
                  className="w-full h-[3px] bg-[#AA714A] absolute bottom-[-5px] opacity-0"
                  style={{ opacity: clickedBonus ? "1" : "0" }}
                ></div>
              </div>
              <div
                className="flex gap-[4px] relative"
                onClick={handleClickedZah}
                style={{ color: clickedZah ? "#AA714A" : "#28282A" }}
              >
                <img src={clickedZah ? "cart2.png" : "cart.png"} />
                Захиалга
                <div
                  className="w-full h-[3px] bg-[#AA714A] absolute bottom-[-5px] opacity-0"
                  style={{ opacity: clickedZah ? "1" : "0" }}
                ></div>
              </div>
            </div>
            <div className="flex gap-[24px]">
              <div className="px-[20px] py-[14.5px] text-[16px] rounded-2xl border-[2px] border-[#AA714A] text-[#AA714A] bg-white hover:bg-[#E0E0E1]">
                Нэвтрэх
              </div>
              <div className="px-[20px] py-[14.5px] text-[16px] rounded-2xl bg-[#AA714A] hover:bg-[#724C31] text-white">
                Бүртгүүлэх
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative h-[531px] mb-[50px]">
          <img src="image 10.png" />
          <div className="absolute top-[167px] left-[1074px] text-white text-[31.5px] font-bold w-[204px] flex-col gap-[24px]">
            Яг одоо захиалаад авах.
            <div className="flex w-[160px] gap-[4px] hover:bg-[#E0E0E1] bg-white px-[22.5px] py-[13.5px] text-[18px] font-medium text-[#AA714A] rounded-[6px] border-[2px] border[#AA714A]">
              Захиалах
              <img src="arrow_forward.png" />
            </div>
          </div>
        </div>
        <div className="flex w-full  px-[80px] mb-[40px]">
          <div className="flex gap-[40px] bg-[#F8F1E7] w-full rounded-[15px]">
            <img src="Order on app.png" />
            <div className="flex-col pt-[68px]">
              <div className="text-[#AA714A] text-[32px] font-bold w-[329px] mb-[27px]">
                Үнэгүй кофе авахад илүү амар боллоо.
              </div>
              <div className="text-black text-[20px] w-[383px] mb-[50px]">
                Coffee namu app -Урамшууллын апп татаж аваад, дуртай зүйлээ
                хаанаас ч, хэзээ ч хамаагүй захиалаарай.
              </div>
              <div className="flex items-center w-[173px] gap-[4px] hover:bg-[#E0E0E1] bg-white px-[24px] py-[16px] text-[20px] font-medium text-[#AA714A] rounded-[6px] border-[2px] border[#AA714A]">
                Апп татах
                <img src="arrow_forward.png" className="w-[26px] h-[26px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col w-full justify-items-center text-black mb-[54px]">
          <div className="font-semibold text-[32px] mb-[19px]">
            Онцлох бүтээгдхүүн
          </div>
          <div className="text-[16px]">
            Энэ сарын онцлох, дуусахаас өмнө захиалаарай!
          </div>
        </div>
        <div className="flex gap-[20px] px-[80px] text-[20px] font-semibold text-black mb-[92px]">
          <div>
            <img src="image (2).png" className="mb-[8px]" />
            <div className="flex justify-evenly">
              <div>affogato</div>
              <div>7.9</div>
            </div>
          </div>
          <div>
            <img src="image (3).png" className="mb-[8px]" />
            <div className="flex justify-center">green tea smoothie</div>
          </div>
          <div>
            <img src="image (4).png" className="mb-[8px]" />
            <div className="flex justify-center">iced grapefruit tea</div>
          </div>
          <div>
            <img src="image (5).png" className="mb-[8px]" />
            <div className="flex justify-center">iced mocha</div>
          </div>
        </div>
        <div className="flex relative bg-[#F8F1E7] px-[80px] h-[361px] pt-[51px]">
          <img src="image 21.png" className="absolute top-[27px]" />
          <div className="text-[#28282A] ml-[62px] w-[302px]">
            <div className="font-bold  text-[24px] mb-[19px]">
              coffee namu mongolia
            </div>
            <div className="w-[282px] text-[18px] mb-[76px]">
              Утас: (976)7772-4422 coffeenamumongolia@gmail.com
            </div>
            <div className="flex gap-[21px] w-fit">
              <img src="icon 1.png" />
              <img src="icon 2.png" />
              <img src="icon 3.png" />
              <img src="Button Text.png" />
            </div>
          </div>
          <div className="ml-[286px] text-[#28282A] font-bold">
            <div className="text-[20px]  mb-[25px]">Бидний тухай</div>
            <div className="flex items-center gap-[10px] mb-[22px]">
              <img src="iconly.png" className="h-[14px]" />
              Байгууллага
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="iconly.png" className="h-[14px]" />
              Бүтээгдхүүн
            </div>
          </div>
          <div className="ml-[197px] text-[#28282A] font-bold">
            <div className="text-[20px]  mb-[25px]">Захиалга</div>
            <div className="flex items-center gap-[10px] mb-[22px]">
              <img src="iconly.png" className="h-[14px]" />
              Аппликэйшн
            </div>
            <div className="flex items-center gap-[10px] mb-[22px]">
              <img src="iconly.png" className="h-[14px]" />
              Урамшуулал
            </div>
            <div className="flex items-center gap-[10px] mb-[22px]">
              <img src="iconly.png" className="h-[14px]" />
              Салбарууд
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
