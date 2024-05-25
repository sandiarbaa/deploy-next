// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const toggleHamburger = useRef(null);
//   const router = useRouter();
//   const close: MouseEventHandler = (e) => {
//     if (e.target === toggleHamburger.current) {
//       router.back();
//     }
//   };
//   useEffect(() => {
//     console.log("ok");
//   }, [toggleMenu]);
//   const toggle = () => {
//     setToggleMenu(!toggleMenu);
//   };
//   return (
//     <nav className="fixed z-10 w-full text-white bg-black">
//       <div className="flex items-center justify-between w-full h-16 px-10">
//         <Image
//           src={"/icons/logo.png"}
//           alt="logo"
//           width={300}
//           height={300}
//           className="w-10"
//         />
//         {/* Hamburger Menu */}
//         <div onClick={toggle} className="cursor-pointer md:hidden">
//           {toggleMenu ? (
//             <Image
//               src={"/icons/close.png"}
//               alt="close"
//               width={30}
//               height={30}
//             />
//           ) : (
//             <Image
//               src={"/icons/hamburger-menu.png"}
//               alt="hamburger-menu"
//               width={30}
//               height={30}
//             />
//           )}
//         </div>
//         {/* Navbar Menu Desktop */}
//         <div className="hidden md:block">
//           <ul className="flex font-semibold gap-x-5">
//             <Link href={"/"}>
//               <li className="transition duration-200 hover:text-green-500">
//                 Home
//               </li>
//             </Link>
//             <Link href={"/about"}>
//               <li className="transition duration-200 hover:text-green-500">
//                 About
//               </li>
//             </Link>
//             <Link href={"/projects"}>
//               <li className="transition duration-200 hover:text-green-500">
//                 Projects
//               </li>
//             </Link>
//           </ul>
//         </div>
//       </div>
//       {/* Menu while hamburger active */}
//       {toggleMenu && (
//         <div
//           // ref={toggleHamburger}
//           className="p-5 font-semibold text-white bg-yellow-400 border-t border-white"
//           // onClick={close}
//         >
//           <ul className="flex flex-col gap-y-5">
//             <a href={"/"} className="pb-3 border-b border-slate-300">
//               <li className="transition duration-200 hover:text-green-500">
//                 Home
//               </li>
//             </a>
//             <a href={"/about"} className="pb-3 border-b border-slate-300">
//               <li className="transition duration-200 hover:text-green-500">
//                 About
//               </li>
//             </a>
//             <a href={"/projects"}>
//               <li className="transition duration-200 hover:text-green-500">
//                 Projects
//               </li>
//             </a>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };
// export default Navbar;
