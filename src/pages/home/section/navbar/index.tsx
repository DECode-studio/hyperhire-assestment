// components/Navbar.tsx
import Image from "next/image";
import { useState, useEffect } from "react";
import LogoApp from "./components/logo";
import { MenuDesktop, MenuMobile } from "./components/menu";
import ContactButton from "./components/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Listen to the scroll event
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-4 px-6 transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-white bg-opacity-60 shadow-lg backdrop-blur-sm text-gray-800" // Saat di-scroll
          : "bg-transparent text-white" // Saat belum di-scroll
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <LogoApp isScrolled={isScrolled} />

        <MenuDesktop isScrolled={isScrolled} />

        <MenuMobile />

        <ContactButton className="hidden lg:block" />

      </div>
    </nav>
  );
};

export default Navbar;