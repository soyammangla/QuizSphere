// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import AnchorNav from "./anchor-nav";
// import { useSession } from "next-auth/react";
// import UserAccountNav from "./UserAccountNav";
// import SignInButton from "./SignInButton";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";

// const Navbar = () => {
//   const { data: session } = useSession();
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "Create Todo", href: "/createTodo" },
//     { name: "Calendar", href: "/calendar" },
//   ];

//   return (
//     <nav className="sticky top-0 z-9999 w-full dark:bg-zinc-950/10 bg-white/15 backdrop-blur-lg border-b border-neutral-200 dark:border-zinc-800">
//       <div className="max-w-352 mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex space-x-2 items-center">
//             <Image
//               src="/logo.gif"
//               alt="Donezo Logo"
//               className="rounded-md"
//               width={40}
//               height={40}
//             />
//             <Link href="/" className="flex items-center space-x-1">
//               <span className="text-2xl font-bold">Donezo</span>
//             </Link>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-2">
//             {navItems.map((item) => (
//               <AnchorNav
//                 key={item.name + item.href}
//                 className="text-lg hover:bg-background rounded-2xl px-3 py-1.5 text-neutral-900 dark:text-neutral-100 font-semibold"
//                 absolute
//                 href={item.href}
//               >
//                 {item.name}
//               </AnchorNav>
//             ))}
//             <div className="flex items-center bg-neutral-100 border text-black border-neutral-800 rounded-xl font-medium text-xl space-x-6 ">
//               {session?.user ? (
//                 <UserAccountNav user={session.user} />
//               ) : (
//                 <SignInButton text="Sign In" />
//               )}
//             </div>
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Nav
//         {isOpen && (
//           <div className="md:hidden absolute left-0 right-0 bg-white dark:bg-zinc-950/95 backdrop-blur-lg shadow-lg border-t border-neutral-200 dark:border-zinc-800">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name + item.href}
//                   href={item.href}
//                   className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <div className="px-3 py-2">
//                 {session?.user ? (
//                   <UserAccountNav user={session.user} />
//                 ) : (
//                   <SignInButton text="Sign In" />
//                 )}
//               </div>
//             </div>
//           </div>
//         )} */}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
"use client";

import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

import { useSession } from "next-auth/react";
import UserAccountNav from "./auth/UserAccountNav";
import SignInButton from "./auth/SignInButton";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-black text-black dark:text-white shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            <Link href="/">QuizSphere</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 sm:gap-8">
            <ul className="flex gap-4 sm:gap-8 text-base sm:text-lg font-medium">
              <li>
                <Link href="/" className="transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="transition">
                  Quiz
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition">
                  About
                </Link>
              </li>
            </ul>
            <ModeToggle />
          </div>

          {/* Right Section - Theme Toggle, Sign In, and Hamburger */}
          <div className="flex items-center gap-4">
            {/* Desktop Sign In */}
            <div className="hidden md:flex">
              <div className="flex items-center bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white rounded-xl font-medium text-xl space-x-6">
                {session?.user ? (
                  <UserAccountNav user={session.user} />
                ) : (
                  <SignInButton text="Sign In" />
                )}
              </div>
            </div>

            {/* Mobile Theme Toggle */}
            <div className="md:hidden">
              <ModeToggle />
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-200 dark:border-neutral-800 pt-4">
            <ul className="flex flex-col gap-4 text-base font-medium mb-6">
              <li>
                <Link
                  href="/"
                  className="transition"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="transition"
                  onClick={() => setIsOpen(false)}
                >
                  Quiz
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>

            {/* Mobile Sign In */}
            <div className="w-full">
              {session?.user ? (
                <UserAccountNav user={session.user} />
              ) : (
                <SignInButton text="Sign In" />
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
