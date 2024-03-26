import Image from "next/image";

type StaticImageData = { src: string; height: number; width: number; blurDataURL?: string; }
 
interface ProductCardProps{
	src:string | StaticImageData;
	productName: string;
	productPrice: string;
}

export default function ProductCard({src, productName, productPrice}:ProductCardProps){

	return (

        	<div className="flex flex-col items-center gap-2">
			<Image className="max-h-[15em] max-w-[15em]" src={src} alt={productName}/> 
			<p>{productName}</p> 
			<p>{productPrice}</p> 
        	</div> 

	)

}
