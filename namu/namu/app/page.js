"use client";

import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z, ZodType } from "zod";
// import { Step1 } from "./components/Step1";
// import { Step2 } from "./components/Step2";
// import { Step3 } from "./components/Step3";
// import { Step4 } from "./components/Step4";
import { Main } from "./components/Main";
import { Menu } from "./components/Menu";

export default function Home() {
  // const [step, setStep] = useState(0);
  // const handlePrev = () => {
  //   setStep((prev) => prev - 1);
  // };
  // const handleNext = () => {
  //   setStep((prev) => prev + 1);
  // };
  // return <Main />;
  //   <div className="w-screen h-screen bg-[#F4F4F4] flex justify-center items-center">
  //     <div className="bg-white w-[480px] h-[655px] p-4 relative ">
  //       <img src="Main 1.svg" className="mb-[8px]" />
  //       {step === 3 && <Step4 />}
  //       <div className="text-[26px] font-semibold text-black mb-[8px]">
  //         Join Us! 😎
  //       </div>
  //       <div className="text-[18px] text-[#8E8E8E] mb-[40px]">
  //         Please provide all current information accurately.
  //       </div>
  //       {step === 0 && <Step1 handleNext={handleNext} />}
  //       {step === 1 && (
  //         <Step2 handleNext={handleNext} handlePrev={handlePrev} />
  //       )}
  //       {step === 2 && (
  //         <Step3 handleNext={handleNext} handlePrev={handlePrev} />
  //       )}
  //     </div>
  //   </div>
  // );
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    {
      id: "menu",
      label: "Меню",
      icon: "free_breakfast.png",
      activeIcon: "free_breakfast (1).png",
    },
    { id: "bonus", label: "Бонус", icon: "gift.png", activeIcon: "gift1.png" },
    { id: "zah", label: "Захиалга", icon: "cart.png", activeIcon: "cart2.png" },
  ];
  const handleSelectItem = (id) => {
    setSelectedItem(id === selectedItem ? null : id);
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
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-[4px] relative"
                  onClick={() => handleSelectItem(item.id)}
                  style={{
                    color: selectedItem === item.id ? "#AA714A" : "#28282A",
                  }}
                >
                  <img
                    src={selectedItem === item.id ? item.activeIcon : item.icon}
                    alt={item.label}
                  />
                  {item.label}
                  <div
                    className="w-full h-[3px] bg-[#AA714A] absolute bottom-[-5px] opacity-0"
                    style={{ opacity: selectedItem === item.id ? 1 : 0 }}
                  ></div>
                </div>
              ))}
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
        {selectedItem === null && <Main />}
        {selectedItem === "menu" && <Menu />}
      </div>
    </div>
  );
}
