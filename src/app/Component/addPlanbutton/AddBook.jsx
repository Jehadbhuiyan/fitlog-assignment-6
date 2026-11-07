'use client'

import { uesContext } from "@/context/AddPlan";
import { useContext } from "react";
import { toast } from "react-toastify";

const AddBook = ({data}) => {
    const { plan, setPlan } = useContext(uesContext)
    
    const addBookhendle = () => {
        setPlan([...plan, data]) // <-- Fixed: spread 'plan' instead of 'setPlan'
        toast.success('successfully done')
        console.log(setPlan)
    }

    return (
        <div>
            <button onClick={()=>addBookhendle()} className="flex-1 bg-[#cbfb00] hover:bg-[#b8e600] text-black font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Add to today's plan</span>
            </button>
        </div>
    );
};

export default AddBook;