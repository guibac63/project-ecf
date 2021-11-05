import React, { createRef } from "react";
import Image from "next/image";
import Link from "next/link";



export default function Header() {

  const responsive = createRef()

  return (
    <div className="h-24 bg-lightViolet">
      <div className="flex justify-between items-center h-full px-4">
        <div className="border-white border">
          <img className="h-16 md:h-20" src="/Logo.PNG" alt="lOGO" />
        </div>
        <navbar className="text-white w-3/6 hidden md:block">
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
        </navbar>
        <div>
          <div className="text-white flex md:hidden ">
            SVG
            <div id="nav-icon3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
