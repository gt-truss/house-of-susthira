"use client";
import React,{useState} from 'react'
import Dropzone from 'react-dropzone'
import { IoMdAddCircle } from "react-icons/io";
import axios from "axios";


export default function AddProductForm(){

	

	const [formData, setFormData] = useState({
	   name: "",
	   category: "saree",
	   price: ""
	})

	const [productImage, setProductImage] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState('')

	const categories = ["saree", "suit"];


	const handleChange = (e:any)=>{
		setSelectedCategory(e.target.value)
		const {name, value} = e.target;
		setFormData({...formData, [name]: value})
		console.log(formData);
	}
	const handleDrop = async (acceptedFiles:any)=>{
		 await setProductImage(acceptedFiles[0]);
		 console.log(acceptedFiles)
	}

	const handleSubmit = async(e:any)=>{

	   e.preventDefault();

	   const postData = new FormData();

	   if(productImage){
		postData.append("productImage", productImage);
	   }
	
	   for (const key in formData) {
                postData.append(key, formData[key as keyof typeof formData]);
	   }
	  try {
             const response = await axios.post(
               `${process.env.ENDPOINT_URL}/product`,
               postData
             );
             console.log(response.data);     
	     window.location.reload();
         } catch (error) {
           console.log("Error:", error);   
         }


	}


	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col items-center gap-2">

				<div className="border-dotted border-[2px] border-gray-400 w-full py-3">
                                  <Dropzone onDrop={handleDrop}>
                                    {({getRootProps, getInputProps}) => (
                                      <section>
                                        <div {...getRootProps()}>
                                          <input {...getInputProps()} />
	                                  <div className="flex flex-col gap-3 items-center text-gray-400 ">
	                                    <IoMdAddCircle size={25}/>
	                                    <p>Add Image</p> 
					    {/*{productImage !== null ? <h1>{productImage.path}</h1> : null }*/}
	                                  </div>
                                        </div>
                                      </section>
                                    )}
                                  </Dropzone>
				</div> 

		             <div className="flex flex-col gap-3 items-center">
		                     <input className="px-2 py-3 outline-none border-solid border-[2px] border-gray-200" name="name" id="name" type="text" onChange={handleChange} placeholder="Product name"/> 
				     <select name="category" id="category" onChange={handleChange} value={formData.category}  className="w-full px-2 py-3 outline-none border-solid border-[2px]">
					      {categories.map((category, index) => {
                                                   return (
                                                       <option key={index} value={category}>
                                                           {category}
                                                       </option>
                                                   );
                                              })}
				     </select>
		                     <input className="px-2 py-3 outline-none border-solid border-[2px] border-gray-200" name="price" id="price" type="price" onChange={handleChange} placeholder="Price"/> 
		             </div> 
		             <button  type="submit" className="bg-red-200 rounded-md px-6 py-2 w-full">ADD PRODUCT</button> 
			</div> 
		</form>
	)
}


