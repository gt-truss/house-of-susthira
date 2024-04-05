import { AiOutlineLoading } from "react-icons/ai";

export default function Loading(){

	return (

	   <div className="flex flex-col gap-2">
	   	<AiOutlineLoading className="animate-spin" />
		<h1>Fetching Products...</h1> 
	   </div> 

	)

}
