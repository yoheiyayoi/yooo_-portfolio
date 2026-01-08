import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import Image from "next/image";
import { Github } from "lucide-react"
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <nav className="fixed top-6 z-100 inset-x-4 h-14 bg-white/80 border border-gray-200 max-w-7xl mx-auto rounded-full backdrop-blur-md">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Image
          src="/yooo_.png"
          alt="yooo_ logo"
          width={90}
          height={40}
          className="object-contain"
        />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button className="rounded-xl" size={"icon"}><Github /></Button>

          {/* Mobile Menu */}
          <div className="md:hidden z-150">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
