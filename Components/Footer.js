import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative h-36 md:h-20 bg-lightViolet text-white">
      <div className="flex md:items-center h-full font-JosefinSans text-xs lg:text-lg">
        <ul className="relative flex flex-col pt-3 md:flex-row md:w-4/6 md:h-full md:justify-around md:items-center mx-auto">
          {/* Mail */}
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="flex items-center pb-2 md:pb-0 mx-auto md:mx-0"
          >
            {/* SVG Mail icon */}
            <img className="h-4 lg:h-5" src="/icons/mail.svg" alt="tree" />
            <a
              className="ml-1 inline align-text-bottom"
              href="mailto:chcantin@gmail.com"
            >
              chcantin@gmail.com
            </a>
          </motion.li>
          {/* phone */}
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="flex leading-5 pb-2 md:pb-0 mx-auto  md:mx-0"
          >
            <img className="h-4 lg:h-4" src="/icons/phone.svg" alt="phone" />
            <a className="ml-1" href="tel:0607502051">
              06-07-50-20-51
            </a>
          </motion.li>
          {/* legal mentions */}
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="flex items-center pb-2 md:pb-0 mx-auto md:mx-0"
          >
            <Link href="/Mentions">Mentions légales</Link>
          </motion.li>
          {/* Facebook icon */}
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="absolute bottom-6 left-5 md:relative md:bottom-0 md:left-0 md:flex items-center md:mb-2"
          >
            <a href="#">
              <img
                className="h-8 lg:h-10"
                src="/icons/facebook.svg"
                alt="facebook icon"
              />
            </a>
          </motion.li>
          {/* Instagram icon */}
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="absolute bottom-6 right-6 md:relative md:bottom-0 md:right-0  md:flex items-center md:mb-2"
          >
            <a href="">
              <img
                className="h-8 lg:h-10 "
                src="/icons/instagram.svg"
                alt="instagram icon"
              />
            </a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
}
