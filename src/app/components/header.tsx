"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Heart, ShoppingCart, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  type Language = "English" | "Spanish" | "French";

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("English");

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <nav className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
      {/* Left: Logo */}
      <div className="text-gray-700 font-semibold text-lg">Hekto</div>

      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-gray-700 hover:text-blue-500">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-4">
              {/* Home Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="text-gray-700 hover:text-blue-500 font-medium flex">
                  Home
                  
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 bg-white shadow-md border rounded-md py-2">
                    <Link
                      href="/"
                      className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                      Home
                    </Link>
                    <Link
                href="/about"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                about
              </Link>
                    <Link
                      href="/faqs"
                      className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                     Faq
                    </Link>
           
      
                  </div>
                )}
              </div>
              {/* Other Links */}
              <Link href="/products" className="text-gray-700 hover:text-blue-500">
                Products
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-500">
                Blog
              </Link>
              <Link href="/shop" className="text-gray-700 hover:text-blue-500">
                Shop
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </Link>
              <Link href={"/login"}> <div>
          Login
        </div>
        </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Links for Larger Screens */}
      <div className="hidden md:flex space-x-6">
        {/* Home Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="text-gray-700 hover:text-blue-500 font-medium flex">
            Home
            <ChevronDown />
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white shadow-md border rounded-md py-2">
              <Link
                href="/about"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                about
              </Link>
              <Link
                href="/"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Home
              </Link>
              <Link
                href="/faqs"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
              Faq
              </Link>
            </div>
          )}
        </div>
        <Link href="/products" className="text-gray-700 hover:text-blue-500 font-medium">
          Products
        </Link>
        <Link href="/blog" className="text-gray-700 hover:text-blue-500 font-medium">
          Blog
        </Link>
        <Link href="/shop" className="text-gray-700 hover:text-blue-500 font-medium">
          Shop
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-500 font-medium">
          Contact
        </Link>
      </div>

      {/* Right: Wishlist, Language Selector, Cart, and Search Input */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none hidden md:block"
        />

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            className="text-gray-700 hover:text-blue-500 font-medium flex items-center"
          >
            {selectedLanguage}
            <ChevronDown
              className={`ml-1 transform ${
                isLanguageDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {isLanguageDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-md border rounded-md py-2">
              <button
                onClick={() => handleLanguageChange("English")}
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange("Spanish")}
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Spanish
              </button>
              <button
                onClick={() => handleLanguageChange("French")}
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                French
              </button>
            </div>
          )}
        </div>

        {/* Wishlist */}
        <div>
          <Link href="/wishlist" className="flex items-center text-gray-700 hover:text-blue-500">
            WishList <Heart className="ml-2 hover:text-red-600" />
          </Link>
        </div>

        {/* Cart */}
        <div>
          <Link href="/cart" className="flex items-center text-gray-700 hover:text-blue-500">
            <ShoppingCart />
          </Link>
        </div>
       <Link href={"/login"} className="hidden md:block"  > <div>
          Login
        </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

