"use client";
import {useState} from "react";
import Image from "next/image";
import logo from "../../public/House of susthira Final Logo.png";
import sareeCategory from "../../public/categories/d53835af-a24d-4673-855d-cebe151b8b8d.jpeg";
import pashminaCategory from "../../public/categories/6986027c-60f3-4e34-b95e-c95999e136ce.jpeg";
import  suitCategory from "../../public/categories/3ede5adb-79ed-4951-84d5-ac4e9497e564.jpeg";
import  magentaSaree  from "../../public/newin/7f72c18c-5e05-4498-b04d-01a2450eece4.jpeg";
import  magentaSaree2  from "../../public/newin/3bc1b086-919b-401a-9332-d22fd2281dac.jpeg";
import  goldenSaree  from "../../public/newin/140d1f35-76ff-4666-a25e-132eaa2cc032.jpeg";
import  goldenSaree2  from "../../public/newin/ac2393f0-f4ae-4aa1-9390-fdb9a4e1c4d6.jpeg";
import  pinkSusthiraSaree  from "../../public/newin/d2f44f66-6215-461f-b38c-f91e020009a0.jpeg";
import  pinkSusthiraSaree2  from "../../public/newin/8ef990d3-7253-4168-9c85-b228aadeb00d.jpeg";

export default function Home() {

	


	const categoryArray = [


		{
			id:1,
			title: "Silk Saree",
			image: sareeCategory,
			text: "The most beautiful silk sarees from the depth of Indian artistic landscape, from North to South to East to West. We have it all at House of Susthira"
		},

		{
			id:2,
			title: "Silk Suits",
			image: suitCategory,
			text: "The epitome of grace and sophistication, the modern Indian woman adorns herself in the most elegant suits, a timeless reflection of her refined taste and cultural heritage"
		},

		{
			id:3,
			title: "Pashmina",
			image: pashminaCategory,
			text: "For the modern Indian woman, pashmina is more than just a fabric—it's a symbol of sophistication and elegance. "
		}	

	]

	const newdropsArray = [

		
		{
			id: 1,
			image:magentaSaree ,
			hoverImage: magentaSaree2,
			itemName: "Magenta Saree",
			price:"₹20,000.00" 
		},
		{
			id: 2,
			image:goldenSaree ,
			hoverImage: goldenSaree2,
			itemName: "Golden Saree",
			price:"₹15,000.00" 
		},
		{
			id: 3,
			image:pinkSusthiraSaree ,
			hoverImage: pinkSusthiraSaree2,
			itemName: "Pink Susthira Saree",
			price:"₹10,200.00" 
		},

	]

       const [hoverStates, setHoverStates] = useState(newdropsArray.map(() => false));

       const handleMouseEnter = (index:any) => {
            const updatedHoverStates = [...hoverStates];
            updatedHoverStates[index] = true;
            setHoverStates(updatedHoverStates);
       };


       const handleMouseLeave = (index: any) => {
         const updatedHoverStates = [...hoverStates];
         updatedHoverStates[index] = false;
         setHoverStates(updatedHoverStates);
       };

  return (
    <div>
      {/*1st section*/}
      <div className="bg-[#f9f3f0]">
        <Image className="rounded-full mx-auto" src={logo} alt="logo" />
      </div>
      {/*2nd section */}
      <div className="relative">
        <div className="absolute top-[50%] left-[5%]">
          <h1 className="text-5xl font-thiner top-[50%] left-[5%] max-w-screen-md font-bold text-[#ffffff]">
            Sustainable Luxury Ethnic Wear handcrafted by the choicest Indian
            craftsmen.
          </h1>
          <button className="rounded-full border-solid border-2 border-white text-white text-xl mt-10 px-10 py-2">
            Explore
          </button>
        </div>
        <video
          autoPlay
          muted
          loop
          className="w-full max-h-[40rem] object-cover"
        >
          <source src="/file.mp4" type="video/mp4" />
        </video>
      </div>
     <div className="mx-10">
      {/*3rd section*/}
      <div className="my-12 mx-auto max-w-screen-2xl">
        <h1 className="text-[6rem] font-extrabold">Categories</h1>

      <div className="flex mt-10 gap-3">

	      {categoryArray.map((item)=>{
		      return(
        		<div key={item.id}>
			  <h1 className="text-3xl font-semibold mb-3">{item.title}</h1>  
			  <div className="overflow-hidden h-[40rem] w-[30rem]">

        		    <Image className="rounded-md  object-cover transition-transform duration-300 transform  hover:scale-[1.1]" src={item.image} alt="category1" />
			  </div> 
        		  <p className="text-sm max-w-xl mt-3">{item.text}</p>
        		  <button className="rounded-full border-solid border-2 border-black text-black text-sm mt-4  px-5 py-2">
        		    Shop Now
        		  </button>
        		</div>

		      )
	      })}

      </div>

     </div>

     {/*4th Section */}

     <div className="my-12  mx-auto max-w-screen-2xl">

        <h1 className="text-[6rem] font-extrabold">New In</h1>

         <div className="grid grid-cols-3 mt-10">

                 {newdropsArray.map((item, index)=>{
           	      return(
           		<div key={item.id} className="relative">
		   	  <div className="overflow-hidden  h-[40rem] w-[30rem]"
				  onMouseEnter={() => handleMouseEnter(index)}
                                  onMouseLeave={() => handleMouseLeave(index)}
			  >
			         {hoverStates[index] ? (
         			   <div className="">
         			     <Image
         			       className="rounded-md object-cover"
         			       src={item.hoverImage}
         			       alt={item.itemName}
         			     />
         			   </div>
				 ): ( <Image className="rounded-md  object-cover" src={item.image} alt="category1" />)}
           		  </div> 
			  <div className="text-center">
           		    <p className="text-sm mt-3">{item.itemName}</p>
           		    <p className="text-sm mt-3">{item.price}</p>
			  </div> 
           		</div>

           	      )
                 })}

         </div>

     </div> 

     </div> 
     {/*5th Section*/}

     <div className=" bg-[#F9F3F0] rounded-2xl py-12 mx-auto">
	<div className="flex flex-col items-center gap-4">
           <h1 className="text-6xl font-semibold">Be a Know it all</h1>
	   <p>Get updates on new drops and special offers</p> 
	   <div className="flex flex-col gap-4">
	       <div className="flex gap-3">
	                 <input placeholder="Name" className="   outline-none py-2 px-4  border-solid border-black border-[1.5px]" type="email" id="email" name="email"/> 
	                 <input placeholder="Email" className="   outline-none py-2 px-4  border-solid border-black border-[1.5px]" type="email" id="email" name="email"/> 
	       </div> 
	       <textarea placeholder="Message" className="outline-none py-2 px-4  border-solid border-black border-[1.5px]"/> 
	   </div> 
	   <button className="rounded-sm px-8 py-2 bg-black text-white ">Submit</button> 
	</div> 
	


     </div> 

   </div>
  );
}
