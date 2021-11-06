import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-28 md:h-24 bg-lightViolet text-white">
      <div className="flex items-center h-full font-JosefinSans text-xs lg:text-lg">
        <ul className="flex w-4/6 h-3/6 justify-around mx-auto">
          <li className="flex items-center">Charles Cantin</li>
          <li className="flex items-center">
            {/* SVG Mail icon */}
            <Image src="/mail.svg" height="20rem" width="20rem" />
            <a
              className="ml-2 inline align-text-bottom"
              href="mailto:chcantin@gmail.com"
            >
              chcantin@gmail.com
            </a>
          </li>
          <li className="flex items-center ">
            <Image src="/phone.svg" height="20rem" width="20rem" />
            <a className="ml-2 " href="tel:0607502051">
              06-07-50-20-51
            </a>
          </li>
          <li className="flex items-center ">
            <a href="#">
              <Image src="/facebook.svg" height="40rem" width="40rem" />
            </a>
          </li>
          <li className="flex items-center ">
            <a href="">
              <Image src="/instagram.svg" height="40rem" width="40rem" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
