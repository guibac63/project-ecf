import React, { createRef, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { motion } from "framer-motion";


export default function Header() {
  // get url path of the active page
  const { asPath } = useRouter();

  // state to open mobile menu
  const [mobileMenu, setMobileMenu] = useState(false);

  // display and hide mobile menu on toggle hamburger button
  const handleMenu = (evt) => {
    setMobileMenu(!mobileMenu);
  };

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
            <li
              // underline in menu active link page
              className={[
                "hover:font-bold",
                asPath === "/" ? "border-b-2" : null,
              ].join(" ")}
            >
              <Link href="/">ACCUEIL</Link>
            </li>
            <li
              className={[
                "hover:font-bold",
                asPath === "/Gallery" ? "border-b-2" : null,
              ].join(" ")}
            >
              <Link href="/Gallery">GALERIE</Link>
            </li>
            <li
              className={[
                "hover:font-bold",
                asPath === "/Prestation" ? "border-b-2" : null,
              ].join(" ")}
            >
              <Link href="/Prestation">PRESTATIONS</Link>
            </li>
            <li
              className={[
                "hover:font-bold",
                asPath === "/Contact" ? "border-b-2" : null,
              ].join(" ")}
            >
              <Link href="/Contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-white flex md:hidden">
            SVG
            <div
              onClick={(evt) => handleMenu(evt)}
              id="nav-icon3"
              className={mobileMenu ? "open" : null}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      {/* mobile menu : display when pass to mobile format and click on hamburger icon menu*/}
      <motion.div
        initial={{ x: -800 }}
        animate={mobileMenu ? { x: 0 } : { x: -800 }}
        transition={{ type: "tween", duration: 0.4 }}
        // ref={mobileMenu}
        className="relative z-30 text-white bg-gray-400 md:hidden"
      >
        <ul className="flex flex-col font-Montserrat text-xs ">
          <Link href="/">
            <li className="border-t-2 p-2 hover:bg-gray-600 hover:font-bold">
              ACCUEIL
            </li>
          </Link>
          <Link href="/Gallery">
            <li className="border-t-2 p-2 hover:bg-gray-600 hover:font-bold">
              GALERIE
            </li>
          </Link>
          <Link href="/Prestation">
            <li className="border-t-2 p-2 hover:bg-gray-600 hover:font-bold">
              PRESTATIONS
            </li>
          </Link>
          <Link href="/Contact">
            <li className="border-t-2 p-2 hover:bg-gray-600 hover:font-bold">
              CONTACT
            </li>
          </Link>
        </ul>
      </motion.div>
    </div>
  );
}
