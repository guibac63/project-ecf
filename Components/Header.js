import React, { createRef, useRef } from "react";
import Image from "next/image";
import Link from "next/link";



export default function Header() {


  const mobileMenu = useRef()

  // display and hide mobile menu on toggle hamburger button
  const handleMenu = (evt) => {
    evt.currentTarget.classList.toggle('open');
    mobileMenu.current.classList.toggle('hidden');
  }

  return (
    <div className="h-24 bg-lightViolet">
      <div className="flex justify-between items-center h-full px-2 md:px-4">
        <div className=" static">
          <img
            className="h-16 md:h-20 absolute top-4 md:top-2 border-white border"
            src="/Logo.PNG"
            alt="lOGO"
          />
        </div>
        {/* desktop menu */}
        <div className="text-white w-3/6 hidden md:block ">
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
          <div className="text-white flex md:hidden ">
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
      {/* mobile menu */}
      <div ref={mobileMenu} className="text-white bg-gray-400 md:hidden">
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
