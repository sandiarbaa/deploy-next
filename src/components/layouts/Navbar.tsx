import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-12 flex justify-between items-center bg-black text-white px-10">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={200}
        height={200}
        className="w-10"
      />
      <ul className="flex gap-x-3 text-sm font-medium">
        <Link href="/">
          <li className="hover:text-green-500">Home</li>
        </Link>
        <Link href="/about">
          <li className="hover:text-green-500">About</li>
        </Link>
        {/* <li className="hover:text-green-500">Projects</li>
        <li className="hover:text-green-500">Contact</li>
        <li className="hover:text-green-500">Services</li> */}
      </ul>
    </div>
  );
};

export default Navbar;
