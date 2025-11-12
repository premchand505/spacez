import {
  Ticket,
  Calendar,
  Heart,
  User,
  Search,
  UserCircle,
} from "lucide-react";
import { NavItem } from "@/app/lib/types";

type FooterProps = {
  isSignedIn: boolean;
  onSignInClick: () => void;
};

export default function Footer({ isSignedIn, onSignInClick }: FooterProps) {
  const navItems: NavItem[] = [
    { label: "Explore", icon: Search, href: "#" },
    { label: "Offers", icon: Ticket, href: "#" },
    { label: "Bookings", icon: Calendar, href: "#" },
    { label: "Wishlist", icon: Heart, href: "#" },
  ];

  const handleNavClick = (label: string) => {
    if (label !== "Sign In") {
      alert(`${label} clicked!`);
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 flex justify-around py-2 bg-white border-t border-gray-200">
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => handleNavClick(item.label)}
          className={`flex flex-col items-center justify-center w-1/5 text-xs font-medium ${
            item.label === "Offers"
              ? "text-accent"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          <item.icon className="w-6 h-6 mb-0.5" />
          <span>{item.label}</span>
        </button>
      ))}

      <button
        onClick={onSignInClick}
        className="flex flex-col items-center justify-center w-1/5 text-xs font-medium text-gray-500 hover:text-gray-800"
      >
        {isSignedIn ? (
          <UserCircle className="w-6 h-6 mb-0.5" />
        ) : (
          <User className="w-6 h-6 mb-0.5" />
        )}
        <span>{isSignedIn ? "Profile" : "Sign In"}</span>
      </button>
    </footer>
  );
}