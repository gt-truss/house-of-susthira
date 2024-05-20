'use client';
import React,{useState} from "react";
import Link from "next/link";
import Dropdown from "./Dropdown"

export default function Sidebar(){

	const [isOpen, setIsOpen] = useState(false);

	const handleClick = ()=>{
		setIsOpen(true);
	}
	const handleCategoryClick = ()=>{
		setIsOpen(false);
	}

	return (
	   <div>
	   	<div className="md:block hidden">
	   		<h1>Browse by</h1> 
	   		<hr className="my-2"/>
	   		<ul className="flex flex-col gap-2 ">
	   			<li>
	   	 	          <Link href="/category/shopall">All Products</Link>
	   			</li> 
	   			<li>
	   		          <Link href="/category/newdrops">New In</Link>
	   			</li> 
	   			<li>
	   		          <Link href="/category/saree">Sarees</Link>
	   			</li> 
	   			<li>
	   		          <Link href="/category/suit">Suits</Link>
	   			</li> 
	   		</ul> 
	   	</div> 
	   	<div className="block md:hidden">
			<Dropdown/>
	   	</div> 
	   </div> 
	)
}
