import React, { createRef, useRef } from "react";
import Image from "next/image";
import Link from "next/link";



export default function Header() {


  const mobileMenu = useRef()
  
  
  // display and hide mobile menu on toggle hamburger button
  const handleMenu = (evt) => {
    evt.currentTarget.classList.toggle('open');
    mobileMenu.current.classList.toggle('hidden');

    // mobileMenu.current.classList.contains("hidden")
    //   ?  mobileMenu.current.classList.toggle("menuSlideIn")
    //   : mobileMenu.current.classList.toggle("menuSlideOut");
    //    console.log(mobileMenu.current.classList);
  }

  return (
    <div className="h-20 bg-lightViolet">
      <div className="flex justify-between items-center h-full px-2 md:px-4">
        <div className="static">
          <img
            className="absolute h-14 top-3 md:h-16 md:top-2 border-white border"
            src="/icons/Logo.PNG"
            alt="lOGO"
          />
        </div>
        {/* desktop menu */}
        <div className="text-white w-3/6 hidden md:block">
          <ul className="flex justify-around font-Montserrat text-xs md:text-base">
            <li className="hover:font-bold">
              <Link href="/">ACCUEIL</Link>
            </li>
            <li className="hover:font-bold">
              <Link href="/Gallery">GALERIE</Link>
            </li>
            <li className="hover:font-bold">
              <Link href="/Prestation">PRESTATIONS</Link>
            </li>
            <li className="hover:font-bold">
              <Link href="/Contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-white flex md:hidden">
            SVG
            <div onClick={(evt) => handleMenu(evt)} id="nav-icon3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      {/* mobile menu : display when pass to mobile format and click on hamburger icon menu*/}
      <div
        ref={mobileMenu}
        className="relative z-10 text-white bg-gray-400 hidden md:hidden"
      >
        <ul className="flex flex-col font-Montserrat text-xs ">
          <li className="border-t-2 p-2 hover:bg-gray-600 hover:font-bold">
            <Link href="/">ACCUEIL</Link>
          </li>
          <li className="border-t-2 p-2 hover:bg-gray-600 hover:font-bold">
            <Link href="/Gallery">GALERIE</Link>
          </li>
          <li className="border-t-2 p-2 hover:bg-gray-600 hover:font-bold">
            <Link href="/Prestation">PRESTATIONS</Link>
          </li>
          <li className="border-t-2 p-2 hover:bg-gray-600 hover:font-bold">
            <Link href="/Contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
