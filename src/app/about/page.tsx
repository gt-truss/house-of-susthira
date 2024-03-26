'use client';
import {useEffect, useState} from "react";
import { ImLeaf } from "react-icons/im";
import { MdOutlineWbSunny } from "react-icons/md";
import Link from "next/link"


export default function about() {

 const [currPath, setCurrPath] = useState('');

 useEffect(() => {
    const path = window.location.pathname;
    setCurrPath(path);
  }, []);


  return (

    <div className=" text-[#1D1D1B]  px-6 my-16 py-12 mx-6">
	    <p>
		    <Link href="/">home</Link>
		    <Link href={currPath}>{currPath}</Link>
	    </p> 
      <h1 className="my-3 text-6xl font-bold">About Us.</h1>
      <p className="text-xl max-w-7xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita est
        possimus perspiciatis adipisci eos eaque quas dignissimos
        exercitationem, vero dicta. Eum sint sed illum laborum culpa quo ipsam
        quidem nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita est
        possimus perspiciatis adipisci eos eaque quas dignissimos
        exercitationem, vero dicta. Eum sint sed illum laborum culpa quo ipsam
        quidem nemo! possimus perspiciatis adipisci eos eaque quas dignissimos
        exercitationem, vero dicta. Eum sint sed illum laborum culpa quo ipsam
        quidem nemo!
  
      </p>
	  {/*<div className="h-12 bg-gray-500"/>*/}
      <div className="grid grid-cols-4 my-10 gap-12">
        <div>
          <ImLeaf size={45}/>
          <p className="font-semiold mb-3 text-lg">Sustainability</p>
          <p className="text-xs    ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            cupiditate nihil sapiente ipsa molestiae, accusantium debitis a
            accusamus nisi quidem laudantium, magni consequatur consectetur
            dolore explicabo? Eos quos soluta id.
          </p>
        </div>
        <div>
          <MdOutlineWbSunny size={45}/>
          <p className="font-semiold mb-3 text-lg">Sustainability</p>
          <p className="text-xs    ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            cupiditate nihil sapiente ipsa molestiae, accusantium debitis a
            accusamus nisi quidem laudantium, magni consequatur consectetur
            dolore explicabo? Eos quos soluta id.
          </p>
        </div>
        <div>
          <ImLeaf size={45}/>
          <p className="font-semiold mb-3 text-lg">Sustainability</p>
          <p className="text-xs    ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            cupiditate nihil sapiente ipsa molestiae, accusantium debitis a
            accusamus nisi quidem laudantium, magni consequatur consectetur
            dolore explicabo? Eos quos soluta id.
          </p>
        </div>
        <div>
          <ImLeaf size={45}/>
          <p className="font-semiold mb-3 text-lg">Sustainability</p>
          <p className="text-xs    ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            cupiditate nihil sapiente ipsa molestiae, accusantium debitis a
            accusamus nisi quidem laudantium, magni consequatur consectetur
            dolore explicabo? Eos quos soluta id.
          </p>
        </div>
      </div>
    </div>
  );
}
