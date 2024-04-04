"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
export default function AdminForm(){


	const router = useRouter();
	const [formData, setFormData] = useState({
	  adminName: "",
	  adminPassword: ""
	});

	const handleChange = (e:any)=>{
		const {name, value} = e.target;
		setFormData({...formData, [name]: value})
	}

	const handleSubmit = async (e:any)=>{
	     e.preventDefault();
	     try{
	       const response = await axios.post(`${process.env.ENDPOINT_URL}/admin`, formData);
	       console.log(response.data);
	       const {accessToken} = response.data;
	       localStorage.setItem('token', accessToken); 
	       console.log("Admin Login Success");
	       router.push("/category");
	     } catch(err){
	       console.error("Error while submitting admin form", err);
	     }
	}


	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col gap-5 items-center">
			  <input className="px-2 py-3 outline-none rounded-md border-solid border-[2px] border-gray-300" onChange={handleChange} type="text" id="adminName" name="adminName" placeholder="Admin name"/> 	
			  <input className="px-2 py-3 outline-none rounded-md border-solid border-[2px] border-gray-300" onChange={handleChange} type="password" id="adminPassword" name="adminPassword" placeholder="Admin Password"/> 	
			  <button  type="submit" className="bg-red-200 rounded-md px-6 py-2">Submit</button> 
			</div> 
		</form> 
	)

}
