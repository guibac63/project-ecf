import React from "react";

export default function Footer() {
  return (
    <div className="relative h-36 md:h-20 bg-lightViolet text-white">
      <div className="flex md:items-center h-full font-JosefinSans text-xs lg:text-lg">
        <ul className="relative flex flex-col pt-3 md:flex-row md:w-4/6 md:h-full md:justify-around md:items-center mx-auto">
          {/* Mail */}
          <li className="flex items-center pb-2 md:pb-0 mx-auto md:mx-0">
            {/* SVG Mail icon */}
            <img className="h-4 lg:h-5" src="/icons/mail.svg" alt="tree" />
            <a
              className="ml-1 inline align-text-bottom"
              href="mailto:chcantin@gmail.com"
            >
              chcantin@gmail.com
            </a>
          </li>
          {/* phone */}
          <li className="flex leading-5 pb-2 md:pb-0 mx-auto  md:mx-0">
            <img className="h-4 lg:h-4" src="/icons/phone.svg" alt="phone" />
            <a className="ml-1" href="tel:0607502051">
              06-07-50-20-51
            </a>
          </li>
          {/* legal mentions */}
          <li className="flex items-center pb-2 md:pb-0 mx-auto md:mx-0">
            <a href="#">Mentions légales</a>
          </li>
          {/* Facebook icon */}
          <li className="absolute bottom-6 left-5 md:relative md:bottom-0 md:left-0 md:flex items-center md:mb-2">
            <a href="#">
              <img
                className="h-8 lg:h-10"
                src="/icons/facebook.svg"
                alt="facebook icon"
              />
            </a>
          </li>
          {/* Instagram icon */}
          <li className="absolute bottom-6 right-6 md:relative md:bottom-0 md:right-0  md:flex items-center md:mb-2">
            <a href="">
              <img className="h-8 lg:h-10 " src="/icons/instagram.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
