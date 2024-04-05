import Link from "next/link";
export default function Navbar(){

return (
<div className="bg-white shadow-sm">
	<ul className="flex items-center justify-center  py-5 gap-16">
		<Link href={"/about"}><li>About</li></Link>
		<Link href={"/category/newdrops"}><li>New Drops</li></Link>
		<Link href={"/category/saree"}><li>Sarees</li></Link>
		<Link href={"/category/suit"}><li>Suits</li></Link>
		<Link href={"/category/shopall"}><li>Shop All</li></Link>
		<Link href={"/faq"}><li>FAQ</li></Link>
	</ul>	
</div>
)}
