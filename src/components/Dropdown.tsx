"use client";
import {useState} from "react";
import { RxDropdownMenu } from "react-icons/rx";
import Link from "next/link";



export default function Dropdown(){

  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = ()=>{
     setIsOpen(!isOpen);
  }
  return (
      <div>
 	      <button onClick={handleToggle}><RxDropdownMenu size={30}/></button>
	      {isOpen && 
		  (
	           <div className="absolute left-10 w-48 py-10 px-4 mt-2 bg-white rounded-xl shadow-xl">
	   		                   <ul className="flex flex-col gap-2 text-xl">
	   		                   	<li className="hover:bg-gray-200" onClick={()=>setIsOpen(false)}>
	   	 	                             <Link href="/category/shopall">All Products</Link>
	   		                   	</li> 
	   		                   	<li  className="hover:bg-gray-200" onClick={()=>setIsOpen(false)}>
	   		                             <Link href="/category/newdrops">New In</Link>
	   		                   	</li> 
	   		                   	<li className="hover:bg-gray-200" onClick={()=>setIsOpen(false)}>
	   		                             <Link href="/category/saree">Sarees</Link>
	   		                   	</li> 
	   		                   	<li className="hover:bg-gray-200" onClick={()=>setIsOpen(false)}>
	   		                             <Link href="/category/suit">Suits</Link>
	   		                   	</li> 
	   		                   </ul> 
		   </div>
		 ) 

	      }
      </div> 
  )

}
