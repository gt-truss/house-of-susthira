'use client'
import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "../../components/Sidebar";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });


export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [currPath, setCurrPath] = useState('');

  const path = usePathname();

  useEffect(() => {
     setCurrPath(path);
  }, [path]);

  return (
	  <div className="mx-6 mb-10">
	      <div className="mb-6 mt-4 font-semibold">
	       <Link href="/">home</Link>
	       <Link href={currPath}>{currPath}</Link>
	      </div> 
	      <div className="flex md:flex-row flex-col gap-10">
	        <Sidebar/>
	        {children}
	      </div> 
	  </div> 
  );
}
