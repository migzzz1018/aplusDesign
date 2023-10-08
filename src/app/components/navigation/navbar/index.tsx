'use client'

import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";


const Navbar = () => {

  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      })
  }
  return (
    <>
      <div className="w-full h-20 bg-main sticky z-10 top-0">
        <div className="container mx-auto px-4 h-full scroll-behavior: smooth">
          <div className="flex justify-between items-center h-full">
            <div>
                <div onClick={scrollToTop}>
                  <div className="relative right-24 flex text-3xl  font-bold h-full items-center ">
                    <Logo />
                    <div>A+ Design</div>
                  </div>
                </div>
            </div>
            <ul className="hidden md:flex gap-x-32 text-white font-bold text-lg">
            <li>
                <Link href="#home">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;