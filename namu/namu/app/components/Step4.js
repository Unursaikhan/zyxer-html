"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const Step4 = () => {
  return (
    <div className="w-[480px] h-full bg-[#F4F4F4] absolute left-0">
      <div className="bg-white px-[16px] h-[77px] ]">
        <div className="text-[26px] font-semibold text-black mb-[8px]">
          You're All Set 🔥
        </div>
        <div className="text-[18px] text-[#8E8E8E] mb-[40px]">
          We have received your submission. Thank you!
        </div>
      </div>
    </div>
  );
};
