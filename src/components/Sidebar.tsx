'use client';
import {useState} from "react";
import Link from "next/link";

export default function Sidebar(){


	return (

		<div>
			<h1>Browse by</h1> 
			<hr className="my-2"/>

			<ul className="flex flex-col gap-2">
				<li>
		 	          <Link href="/category/shopall">All Products</Link>
				</li> 
				<li>
			          <Link href="/category/newdrops">New In</Link>
				</li> 
				<li>
			          <Link href="/category/sarees">Sarees</Link>
				</li> 
				<li>
			          <Link href="/category/suits">Suits</Link>
				</li> 
			</ul> 



		</div> 

	)


}
