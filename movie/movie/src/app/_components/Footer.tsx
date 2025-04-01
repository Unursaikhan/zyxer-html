import { Logo2 } from "../assets/Logo2";
import { Mail } from "../assets/Mail";
import { Phone } from "../assets/Phone";

export const Footer = () => {
  return (
    <div className="w-full bg-[#4338CA] lg:h-[280px] h-[308px] lg:px-[80px] px-[20px] py-[40px] flex lg:flex-row flex-col justify-between text-[14px]">
      <div className="text-white flex flex-col gap-[12px] mb-[28px]">
        <Logo2 />© 2024 Movie Z. All Rights Reserved.
      </div>
      <div className="lg:w-[544px] w-[315px] flex justify-between">
        <div className="flex flex-col gap-[12px] text-white">
          <div>Contact Information</div>
          <div className="flex justify-between mb-[12px]">
            <Mail />
          </div>
          <div className="flex justify-between">
            <Phone />
          </div>
        </div>
        <div className="text-white">
          <p className="mb-[12px]">Follow us</p>
          <div className="flex flex-col lg:flex-row gap-[12px] text-[14px] font-bold">
            <div>Facebook</div>
            <div>Instagram</div>
            <div>Twitter</div>
            <div>Youtube</div>
          </div>
        </div>
      </div>
    </div>
  );
};
