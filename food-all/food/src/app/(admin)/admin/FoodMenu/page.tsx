import Image from "next/image";
import { Menu } from "./components/menu";

export default function Admin() {
  return (
    <div className="bg-[#232323] w-screen flex justify-center">
      <Menu />
    </div>
  );
}
