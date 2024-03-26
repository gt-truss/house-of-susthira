'use client';
import {useEffect} from "react";
import {useRouter} from "next/navigation";
export default function category(){
	const router = useRouter();	
	useEffect(()=>{
		router.push("/category/shopall");
	},[])
}
