'use client';
import {useEffect} from "react";
import {useRouter} from "next/navigation";
export default function Category(){
	const router = useRouter();	
	useEffect(()=>{
		router.push("/category/shopall");
	},[])
}
