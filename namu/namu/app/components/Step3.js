"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const schema = z.object({
  dateOfBirth: z.string().refine(
    (value) => {
      const date = new Date(value);
      const age = new Date().getFullYear() - date.getFullYear();
      return age >= 18;
    },
    { message: "You must be at least 18 years old" }
  ),
});

export const Step3 = ({ handleNext, handlePrev }) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      dateOfBirth: "",
      image: null,
    },
  });

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(handleNext)}
        className="rounded-sm bg-white flex flex-col gap-3 text-black"
      >
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">Date of Birth</p>
          <input
            {...register("dateOfBirth")}
            type="date"
            className="px-3 py-1 border rounded-sm border-gray-300"
          />
          {formState.errors.dateOfBirth && (
            <p className="text-xs text-red-500">
              {formState.errors.dateOfBirth.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">Profile Image</p>
          <div className="bg-[#f8f8f8] relative w-[448px] h-[180px] flex justify-center items-center">
            <div className="flex-col gap-y-[8px] items-center ">
              <div className="flex justify-center">
                <img src="Upload Icon Container.png" />
              </div>
              <p className="text-[14px] font-medium">Add image</p>
            </div>
            <input
              className="w-full h-full absolute opacity-0"
              {...register("image")}
              type="file"
              placeholder="your image"
            />
          </div>
          {formState.errors.image && (
            <p className="text-xs text-red-500">
              {formState.errors.image.message}
            </p>
          )}
        </div>

        <div className="flex justify-between h-[44px] rounded-[6px] w-[446px] absolute bottom-[16px]">
          <button
            className="flex bg-white text-black justify-center items-center h-[44px] rounded-[6px] w-[148px] border border-[#CBD5E1] "
            type="button"
            onClick={handlePrev}
          >
            <img src="chevron_left.png" />
            Back
          </button>
          <button
            className="flex bg-black text-white justify-center items-center h-[44px] rounded-[6px] w-[290px] "
            type="submit"
          >
            Continue 3/3 <img src="chevron_right.png" />
          </button>
        </div>
      </form>
    </div>
  );
};
