"use client";
import React from "react";
import Image from "next/image";
import {useEffect, useState} from "react"
import AddProductForm from "../../../components/AddProductForm" ; 
import AdminForm from "../../../components/AdminForm";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Modal from "../../../components/Modal";
import axios from "axios";
import Loading from "../../../components/Loading"

export default function Shopall(){
	const [fetchedProducts, setFetchedProducts] = useState<any[]>([]);	
	const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
	const [addProductModal, setAddProductModal] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	//const [token, setToken] = useState<String | null>('');

        const fetchProducts = async()=>{
		setIsLoading(true);
        	try{
        		const response = await axios.get(`${process.env.ENDPOINT_URL}/products`);
        	   	setFetchedProducts(response.data);
        	} catch(err){
        		console.error(err);
		} finally{
		        setIsLoading(false);
		}
        }

	const checkAuthicatedAdmin = async()=>{

		try{
			const response = await axios.get(`${process.env.ENDPOINT_URL}/admin/authenticate`, {
				headers: {
					Authorization: localStorage.getItem('token')
				}
			})
			//console.log(response.data);
			console.log("Admin authenticated successfully");
			setIsLoggedIn(true);
		} catch(err){
			console.error("Error while authenticating admin", err);
		}

	}
	const deleteProduct = async (productId:string)=>{
		try{
			//console.log(productId);
			const response = await axios.delete(`${process.env.ENDPOINT_URL}/products/${productId}`)
			//console.log(response.data);
			//console.log("Product Deleted Success");
			window.location.reload();
		} catch(err){}
	}

	useEffect(()=>{
	        fetchProducts();
		checkAuthicatedAdmin();
	},[])
	return (
		<div className="">
		     {isLoading ? <Loading/> : (


		           <div className="flex flex-row flex-wrap gap-4 justify-center md:justify-start text-left">
		              {
		                    fetchedProducts.map((product)=>{
		                 	return(
		                 		<div key={product._id}>
		             			<Image className="max-w-[15rem] max-h-[15rem]" width={205} height={205} src={product.productImageUrl} alt={product.name}/>
		             			<div className="flex justify-between mt-2 items-center">
		                 			   <p>{product.name}</p> 
		             			   <div>
		             				   {isLoggedIn ?  <div className="flex flex-row gap-1 cursor-pointer"> <MdOutlineDeleteOutline onClick={()=>deleteProduct(product._id)}/> </div>  : null}
		             		           </div>  						
		             	                </div> 
		                 			<p className="font-semibold">₹{product.price}</p> 
		                 		</div> 
		                 	)
		                    })
		              }

		              <div onClick={()=>{if(isLoggedIn){setAddProductModal(true)}else{setIsAdminModalOpen(true)}}} className="flex flex-col gap-3 items-center text-gray-400 cursor-pointer">
		                      <div className="w-[13.5rem] h-[15rem] border-dotted border-[3px] border-gray-300 flex flex-col items-center justify-center">
		                       <IoMdAddCircle size={25}/>
		                       <p className="text-xs">Add Product</p> 
		                      </div> 
		              </div>
		           </div> 



		     )}
		     {isLoggedIn ?  <Modal isOpen={addProductModal} onClose={()=>setAddProductModal(false)} text={<React.Fragment><AddProductForm/></React.Fragment>}/> : <Modal isOpen={isAdminModalOpen} onClose={()=>setIsAdminModalOpen(false)} text={<React.Fragment><AdminForm /></React.Fragment>}/> }
		</div>
	)
}
