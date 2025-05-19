"use client";
import { Menu } from "./components/menu";
import { useAuth } from "@/app/_providers/AuthProvider";

export default function Admin() {
  const { user } = useAuth();
  if (user?.role !== "admin") return;
  if (!user) return;
  return (
    <div className="bg-[#232323] w-screen flex justify-center">
      <Menu />
    </div>
  );
}
