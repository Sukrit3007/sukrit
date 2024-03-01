'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from "next-themes"
import dynamic from 'next/dynamic';

const Navbar = () => {
  const { setTheme, theme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false);

  const DynamicImage = dynamic(() => import('next/image'), { ssr: false });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-inherit fixed top-0 z-50 w-full py-6 px-6 flex justify-center items-center md:px-[82px]">
      <div className="w-[100%] lg:w-[80%] ">
      <div className="mx-auto px-4 flex justify-between items-center ">
      <Link href="/">
        <DynamicImage
          src={theme === 'light' ? '/light.svg' : '/dark.svg'}
          alt="logo"
          width={150}
          height={50}
        />
      </Link>
        <div className="hidden md:flex space-x-8">
          <Link className="hover:text-gray-300" href="/work">
            work
          </Link>
          <Link className="hover:text-gray-300" href="/about">
            about
          </Link>
          <Link className="hover:text-gray-300" href="/contact">
            contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-foreground"
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
          <Link className="hover:text-gray-300" href="/work">
            work
          </Link>
          <Link className="hover:text-gray-300" href="/about">
            about
          </Link>
          <Link className="hover:text-gray-300" href="/contact">
            contact
          </Link>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;