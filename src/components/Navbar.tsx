"use client";
import { Comfortaa } from "next/font/google";
import { CiLinkedin, CiTwitter, CiInstagram } from "react-icons/ci";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
// ...

const comfortaa = Comfortaa({ subsets: ["latin"] });

import Link from "next/link";
export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
    document.body.classList.toggle("menu-open");
  };

  return (
    <section className="content ">
      <section
        className={
          "w-full md:back z-[1]  md:px-6 bg-transparent transition-all ease-in delay-300"
        }
      >
        <nav className="flex  justify-between items-center px-10  h-24 rounded-lg  transition-all delay-300 ease-in-out">
          <div
            className={`md:flex hidden sm:flex-row  space-x-10 text-sm sm:text-lg`}
          >
	          	<Link href={"/about"}>About</Link>
	          	<Link href={"/category/newdrops"}> New Drops </Link>
	          	<Link href={"/category/saree"}> Sarees </Link>
	          	<Link href={"/category/suit"}> Suits </Link>
	          	<Link href={"/category/shopall"}> Shop All </Link>
			<Link href={"/faq"}> FAQ </Link>
          </div>

	  {/* navbar for mobile screens */}
          <nav className="md:hidden ">
            {!menuIsOpen ? (
              <div>
		{/*Hamburger Icon*/}
                <button
                  onClick={toggleMenu}
                  className="md:hidden text-3xl pt-2 "
                >
                  &#9776;
                </button>
                {/* <nav className="flex flex-col absolute min-h-screen bg-black"></nav> */}
              </div>
            ) : (
              <div className="min-h-full  fixed z-[2] top-0 left-0 bg-transparent bg-white backdrop-blur-2xl opacity-90 w-full opacity-1 transition-all delay-50">
                <button
                  onClick={toggleMenu}
                  className="md:hidden text-5xl  my-12 absolute left-10 -top-5 text-black"
                >
                  &times;
                </button>
                <nav className="flex flex-col text-center mt-36 gap-7 absolute w-full h-full text-3xl   z-[-3]">
	          	<Link className="hover:text-[#EE959C]" href={"/about"}>About</Link>
	          	<Link className="hover:text-[#EE959C]" href={"/category/newdrops"}> New Drops </Link>
	          	<Link className="hover:text-[#EE959C]" href={"/category/saree"}> Sarees </Link>
	          	<Link className="hover:text-[#EE959C]" href={"/category/suit"}> Suits </Link>
	          	<Link className="hover:text-[#EE959C]" href={"/category/shopall"}> Shop All </Link>
			<Link className="hover:text-[#EE959C]" href={"/faq"}> FAQ </Link>
                </nav>
              </div>
            )}
          </nav>
        </nav>

      </section>
    </section>

  );
}
