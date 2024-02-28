"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from "next-themes"

const Navbar = () => {
  const { setTheme, theme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-transparent sticky z-10 top-0 py-6 px-6 flex justify-center items-center md:px-[82px]">
      <div className="w-[100%] lg:w-[80%] ">
      <div className="mx-auto px-4 flex justify-between items-center ">
      <Link href="/">
        {theme == "light" ? (
          <Image src="/sukritlight.svg" alt="light logo" width={150} height={50} />
        ) : (
          <Image src="/sukritdark.svg" alt="dark logo" width={150} height={50} />
        )}
      </Link>
        <div className="hidden md:flex space-x-8">
          <Link className="hover:text-gray-300" href="#">
            work
          </Link>
          <Link className="hover:text-gray-300" href="#">
            about
          </Link>
          <Link className="hover:text-gray-300" href="#">
            contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-end space-y-4">
          <Link className="hover:text-gray-300" href="#">
            work
          </Link>
          <Link className="hover:text-gray-300" href="#">
            about
          </Link>
          <Link className="hover:text-gray-300" href="#">
            contact
          </Link>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
