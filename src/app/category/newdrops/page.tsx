import ProductCard from "../../../components/ProductCard"
import  magentaSaree  from "../../../../public/newin/7f72c18c-5e05-4498-b04d-01a2450eece4.jpeg";
import  goldenSaree  from "../../../../public/newin/140d1f35-76ff-4666-a25e-132eaa2cc032.jpeg";
import  pinkSusthiraSaree  from "../../../../public/newin/d2f44f66-6215-461f-b38c-f91e020009a0.jpeg";

export default function Newdrops(){


	const newdropsArray = [

		
		{
			id: 1,
			image:magentaSaree ,
			itemName: "Magenta Saree",
			price:"₹20,000.00" 
		},
		{
			id: 2,
			image:goldenSaree ,
			itemName: "Golden Saree",
			price:"₹15,000.00" 
		},
		{
			id: 3,
			image:pinkSusthiraSaree ,
			itemName: "Pink Susthira Saree",
			price:"₹10,200.00" 
		},

	]

	return (
		<div>
                  <div className="grid grid-cols-3 gap-3 mt-10">
                          {newdropsArray.map((item)=>{
                    	      return(
	                 	      <div key={item.id}>
	                 	        <ProductCard src={item.image} productName={item.itemName} productPrice={item.price}/>
	                 	      </div> 
                    	      )
                          })}
                  </div>
		</div>
	)
}
