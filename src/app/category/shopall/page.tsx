"use client";
import React from "react";
import Image from "next/image";
import {useEffect, useState} from "react"
import AddProductForm from "../../../components/AddProductForm" ; 
import AdminForm from "../../../components/AdminForm";
import { IoMdAddCircle } from "react-icons/io";
import Modal from "../../../components/Modal";
import axios from "axios";

export default function Shopall(){
	const [fetchedProducts, setFetchedProducts] = useState<any[]>([]);	
	const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
	const [addProductModal, setAddProductModal] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	//const [token, setToken] = useState<String | null>('');

        const fetchProducts = async()=>{
        	try{
        		const response = await axios.get(`${process.env.ENDPOINT_URL}/products`);
			console.log(response.data);
        	   	setFetchedProducts(response.data);
        	}catch(err){
        		console.error(err);
        	}
        }

	const checkAuthicatedAdmin = async()=>{

		try{
			const response = await axios.get(`${process.env.ENDPOINT_URL}/admin/authenticate`, {
				headers: {
					Authorization: localStorage.getItem('token')
				}
			})
			console.log(response.data);
			console.log("Admin authenticated successfully");
			setIsLoggedIn(true);
		} catch(err){
			console.error("Error while authenticating admin", err);
		}

	}

	useEffect(()=>{
	        fetchProducts();
		//const item = localStorage.getItem('token')
		//setToken(item);
		checkAuthicatedAdmin();
	},[])
	return (
		<div>
                  <div className=" flex gap-4">
		      <div className="grid grid-cols-3 gap-4 text-center">
		         {
		               fetchedProducts.map((product)=>{
		            	return(
		            		<div key={product._id}>
						<Image className="max-w-[15rem] max-h-[15rem]" width={205} height={205} src={product.productImageUrl} alt={product.name}/>
		            			<p className="font-semibold">{product.name}</p> 
		            			<p>₹{product.price}</p> 
		            		</div> 
		            	)
		               })
		         }
		     </div> 
		     <div onClick={()=>{if(isLoggedIn){setAddProductModal(true)}else{setIsAdminModalOpen(true)}}} className="flex flex-col gap-3 items-center text-gray-400 cursor-pointer">
		       <IoMdAddCircle size={25}/>
		       <p>Add Product</p> 
		     </div>
		     {isLoggedIn ?  <Modal isOpen={addProductModal} onClose={()=>setAddProductModal(false)} text={<React.Fragment><AddProductForm/></React.Fragment>}/> : <Modal isOpen={isAdminModalOpen} onClose={()=>setIsAdminModalOpen(false)} text={<React.Fragment><AdminForm /></React.Fragment>}/> }
                  </div>
		</div>
	)
}
