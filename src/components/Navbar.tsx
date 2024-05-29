"use client";
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { FaTimes, FaBars } from "react-icons/fa";
import MenuList from './MenuList';
import { navLinks } from '@/const/links';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleMenu = () => {
    setNavbarOpen((prev) => !prev);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-80">
      <div className="flex flex-wrap items-center justify-between mx-auto py-6 px-12">
        <Link href="/" className="">
          <Image 
            src="/my-portfolio-v2/images/yuhamada.jpg" 
            alt="my profile icon"
            className="rounded-full"
            width={60}
            height={60}
          />
        </Link>

        <div className="hidden md:block">
          <div className="flex">
            {navLinks.map((link, index) => (
              <li key={index} className="flex items-center">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </div>
        </div>

        {navbarOpen ? <MenuList links={navLinks}/> : null}

        <div className="-mr-2 flex md:hidden">
          <button type="button" onClick={handleMenu} className="text-2xl items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gradient-to-br from-indigo-800 via-blue-500 to-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">open main menu</span>
            {navbarOpen ? <FaTimes/>: <FaBars />}
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar