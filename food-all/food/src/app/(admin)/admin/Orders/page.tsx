"use client";
import { useAuth } from "@/app/_providers/AuthProvider";
import { List } from "./components/List";

export default function Order() {
  const { user } = useAuth();
  if (user?.role !== "admin") return;
  if (!user) return;
  return (
    <div className="bg-[#232323] w-screen flex justify-center">
      <List />
    </div>
  );
}
