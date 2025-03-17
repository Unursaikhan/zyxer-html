"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const schema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name cannot be empty" })
    .refine((value) => /^[A-Z]/.test(value), {
      message: "First name must start with an uppercase letter",
    }),
  lastName: z
    .string()
    .min(1, { message: "Last name cannot be empty" })
    .refine((value) => /^[A-Z]/.test(value), {
      message: "Last name must start with an uppercase letter",
    }),

  userName: z.string().min(1, { message: "Username cannot be empty" }),
});
export const Step1 = ({ handleNext }) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),

    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
    },
  });

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(handleNext)}
        className=" rounded-sm bg-white flex flex-col gap-3  text-black"
      >
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">First Name</p>
          <input
            {...register("firstName")}
            placeholder="your name"
            className="px-3 py-1 border rounded-sm border-gray-300"
          />
          {formState.errors.firstName && (
            <p className="text-xs text-red-500">
              {formState.errors.firstName.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">Last Name</p>
          <input
            {...register("lastName")}
            placeholder="your lastname"
            className="px-3 py-1 border rounded-sm border-gray-300"
          />
          {formState.errors.lastName && (
            <p className="text-xs text-red-500">
              {formState.errors.lastName.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">Username</p>
          <input
            {...register("userName")}
            placeholder="your username"
            className="px-3 py-1 border rounded-sm border-gray-300"
          />
          {formState.errors.userName && (
            <p className="text-xs text-red-500">
              {formState.errors.userName.message}
            </p>
          )}
        </div>

        <button
          className="flex bg-black text-white justify-center items-center h-[44px] rounded-[6px] w-[446px] absolute bottom-[16px]"
          type="submit"
        >
          Continue 1/3 <img src="chevron_right.png" />
        </button>
      </form>
    </div>
  );
};
