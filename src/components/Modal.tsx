import { RxCross2 } from "react-icons/rx";

interface ModalProps{

	isOpen: any;
	onClose: any;
	children: any;

}
export default function Modal({isOpen, onClose, children}: ModalProps){
	return (
		<>
		{isOpen && (
		  <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
                            {/* Modal Container */}
                             <div className="flex flex-col items-center gap-2 bg-white w-[300px] h-[450px] p-8 rounded-lg shadow-lg">
                               {/* Close Button */}
                               <button
				 className="bg-gray-600 mb-6 self-end rounded-full  p-1 text-white font-bold"
                                 onClick={onClose}
                               >
				 <RxCross2 size={15}/>
                               </button>
                               {/* Modal Content */}
                               <div>{children}</div>
                             </div>
                 </div>
		)}
		</>
	)
}



{/*<div className="flex flex-col gap-3">
			  <h1>Are you an Admin ?</h1> 
			  <div className="flex gap-4">
			  	<button>YES</button> 
			  	<button>NO</button> 
			  </div> 
			</div> */}
