"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavbarLeft() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <nav className="fixed top-0 left-0 flex items-center justify-between w-full px-10 text-white bg-black h-14 md:px-16">
        <div className="flex justify-between w-full px-3">
          <Image
            src="/icons/logo.png"
            alt="logo"
            width={300}
            height={300}
            className="w-10"
          />
          {/* Navbar Menu Desktop */}
          <div className="hidden md:block">
            <ul className="flex font-semibold gap-x-5">
              <Link href={"/"}>
                <li className="transition duration-200 hover:text-green-500">
                  Home
                </li>
              </Link>
              <Link href={"/about"}>
                <li className="transition duration-200 hover:text-green-500">
                  About
                </li>
              </Link>
              <Link href={"/projects"}>
                <li className="transition duration-200 hover:text-green-500">
                  Projects
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div onClick={toggleMenu} className="md:hidden">
          {toggle ? (
            <Image
              src="/icons/close.png"
              alt="close"
              width={300}
              height={300}
              className="w-8 cursor-pointer"
            />
          ) : (
            <Image
              src="/icons/hamburger-menu.png"
              alt="hamburger"
              width={300}
              height={300}
              className="w-8 cursor-pointer"
            />
          )}
        </div>
      </nav>
      <div
        className={
          toggle
            ? `fixed z-20 left-0 block w-1/2 h-screen text-white bg-black top-[55px] md:hidden ease-in-out duration-500`
            : "fixed z-20 left-[-100%] text-white"
        }
      >
        <ul className="flex flex-col items-center justify-center py-10 text-center gap-y-5">
          <li className="w-8/12 pb-3 transition duration-200 border-b border-slate-400 hover:text-green-500">
            <a href="/">Home</a>
          </li>
          <li className="w-8/12 pb-3 transition duration-200 border-b border-slate-400 hover:text-green-500">
            <a href="/about">About</a>
          </li>
          <li className="transition duration-200 hover:text-green-500">
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
