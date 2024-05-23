import Image from "next/image";
import Link from "next/link";
import logo from "../../public/House of susthira Final Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



export default function Footer(){

return (
      <div className="bg-[#657342] text-white py-32 px-16 h-screen">


	<div className="flex  items-start gap-24">

		<ul className="text-sm flex flex-col gap-2">
			<p className="font-bold text-2xl">Visit</p>

			<li><Link href={"/about"}>About</Link></li>
	          	<li><Link href={"/category/newdrops"}> New Drops </Link></li>
	          	<li><Link href={"/category/saree"}> Sarees</Link></li>
	          	<li><Link href={"/category/suit"}> Suits </Link></li>
	          	<li><Link href={"/category/shopall"}> Shop All</Link></li>
		</ul>


		<ul className="text-sm flex flex-col gap-2">
			<p className="font-bold text-2xl">Policies</p>
			<li>Privacy Policy</li>
			<li>Shipping Policy</li>
			<li>Refund Policy</li>
			<li>Cookie Policy</li>
			<li>Accessibility statement</li>
		</ul>
	</div>

	<hr className="my-12"/>
	<div className="flex flex-col items-center gap-3">

           <Link href={"/"}><Image width={100} height={100} className="rounded-full " src={logo} alt="logo" /></Link>
	   <p className="text-center">Sustainable, Luxury Indian Wear for the Modern Indian Women</p> 

	   <div className="flex justify-center gap-4">
           	<FaFacebook size={30}/> 
           	<FaInstagramSquare size={30}/> 
           	<FaYoutube size={30}/> 
	   </div> 

	</div> 



</div>
)

}
