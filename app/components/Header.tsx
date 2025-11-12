import Image from "next/image";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      <div className="relative w-30 h-20">
        <Image
          src="/logo.png"
          alt="SPACEZ Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <button
        aria-label="Menu"
        onClick={() => alert("Menu clicked!")}
        className="p-1"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>
    </header>
  );
}