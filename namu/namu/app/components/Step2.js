"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const schema = z
  .object({
    phone: z
      .string()
      .length(8, { message: "Phone number must be 8 digits" })
      .refine(
        (value) => {
          const chars = value.split("");
          return chars.every((char) =>
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(char)
          );
        },
        { message: "Phone number must only contain numbers" }
      ),

    email: z
      .string()
      .min(1, { message: "Email cannot be empty" })
      .email({ message: "Email wrong" }),
    password: z
      .string()
      .min(1, { message: "Password cannot be empty" })
      .min(6, { message: "Password must be at least 6 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" }),
    confirmPassword: z.string().min(1, { message: "cannot be empty" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const Step2 = ({ handleNext, handlePrev }) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(handleNext)}
        className="rounded-sm bg-white flex flex-col gap-3 text-black"
      >
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">Phone</p>
          <input
            {...register("phone")}
            type="text"
            placeholder="Phone number"
            className="px-3 py-1 border rounded-sm border-gray-300"
          />
          {formState.errors.phone && (
            <p className="text-xs text-red-500">
              {formState.errors.phone.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">Email</p>
          <input
            {...register("email")}
            type="text"
            placeholder="your email"
            className="px-3 py-1 border rounded-sm border-gray-300"
          />
          {formState.errors.email && (
            <p className="text-xs text-red-500">
              {formState.errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">Password</p>
          <input
            {...register("password")}
            type="password"
            placeholder="your password"
            className="px-3 py-1 border rounded-sm border-gray-300"
          />
          {formState.errors.password && (
            <p className="text-xs text-red-500">
              {formState.errors.password.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">Confirm Password</p>
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="confirm your password"
            className="px-3 py-1 border rounded-sm border-gray-300"
          />
          {formState.errors.confirmPassword && (
            <p className="text-xs text-red-500">
              {formState.errors.confirmPassword.message}
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
            Continue 2/3 <img src="chevron_right.png" />
          </button>
        </div>
      </form>
    </div>
  );
};
