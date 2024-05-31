'use client';
import {useEffect, useState} from "react";
import { IoCompassOutline } from "react-icons/io5";
import { LuLeaf } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import Link from "next/link"


export default function About() {

 const [currPath, setCurrPath] = useState('');

 useEffect(() => {
    const path = window.location.pathname;
    setCurrPath(path);
  }, []);


  return (

    <div className=" text-[#1D1D1B] max-w-screen-xl mx-auto  my-16 py-12">
	    <p>
		    <Link href="/">home</Link>
		    <Link href={currPath}>{currPath}</Link>
	    </p> 
      <h1 className="my-3 text-6xl font-bold">About Us.</h1>
      <p className="text-xl max-w-7xl">
	      Welcome to House of Susthira, where elegance meets sustainability in every weave. As a premium saree brand, we take pride in offering meticulously crafted pieces that embody the essence of responsible luxury. Our sarees are more than just garments, they&apos;re a testament to our commitment to sourcing materials ethically, supporting artisans, and preserving traditional craftsmanship.
      </p>
	  {/*<div className="h-12 bg-gray-500"/>*/}
      <div className="grid md:grid-cols-3 grid-cols-1 my-14 gap-12">
        <div className="flex flex-col gap-4">
          <LuLeaf size={45}/>
          <p className="text-xs    ">
		  At House of Susthira, sustainability is not just a trend, it is our foundation. Each saree is thoughtfully curated, ensuring that every step of the production process respects both the environment and the skilled hands that bring our designs to life. From handwoven masterpieces to meticulously sourced materials, every thread tells a story of conscientious creation.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <MdOutlineWbSunny size={45}/>
          <p className="text-xs    ">
		  We believe in offering not only exquisite craftsmanship but also value for money. Our diverse range of sarees celebrates the rich tapestry of India&apos;s cultural heritage, with styles inspired by the vibrant traditions of the East, the intricate motifs of the West, the timeless elegance of the North, and the rich heritage of the South.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <IoCompassOutline size={45}/>
          <p className="text-xs    ">
		  Whether you seek a bespoke creation or a ready-to-wear piece, we cater to your unique tastes with our custom-made and readymade sarees. Explore our collection and discover the beauty of sustainable luxury with House of Susthira.
          </p>
        </div>
      </div>
    </div>
  );
}
