'use client'

import { uesContext } from "@/context/AddPlan";
import { useContext } from "react";
import { toast } from "react-toastify";

const SaveBook = ({data}) => {
    const { save, setSave } = useContext(uesContext)
    
    const saveBookinghendle = () => {
        setSave([...save, data]) // <-- Fixed: spread 'plan' instead of 'setPlan'
        toast.success('successfully done')
        console.log(setPlan)
    }

    return (
        <div>
            <button onClick={()=>saveBookinghendle()} className="flex-1 bg-[#1a1a1a] hover:bg-[#252525] text-white border border-[#333] font-semibold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <span>Save for later</span>
            </button>
        </div>
    );
};

export default SaveBook;