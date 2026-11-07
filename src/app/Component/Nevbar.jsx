'use client';

import { uesContext } from "@/context/AddPlan";
import Link from "next/link";
import { useContext, useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('workouts');
  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);
    const {plan,save} = useContext(uesContext)
  

  return (
    <nav className="bg-[#0b0b0b] text-white px-8 py-4 flex items-center justify-between border-b border-neutral-800">
      {/* Left: Logo */}
      <div className="flex items-center">
        <span className="font-extrabold tracking-wider text-xl uppercase text-white font-sans">
          FITLOG
        </span>
      </div>

      {/* Center: Navigation Tabs (Buttons) */}
      <div className="flex items-center space-x-2">
        <Link href={'/'}>
          <button
            onClick={() => setActiveTab('workouts')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
              activeTab === 'workouts'
                ? 'bg-[#1e2a00] text-[#a8f000]'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Workouts
          </button>
        </Link>
        <Link href={'/planpage'}>
          <button
            onClick={() => setActiveTab('myPlan')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
              activeTab === 'myPlan'
                ? 'bg-[#1e2a00] text-[#a8f000]'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            My Plan
          </button>
        </Link>
      </div>

     
      <div className="flex items-center space-x-6 text-sm font-medium">
       <Link href={'/planpage'}>
        <div className="flex items-center space-x-2">
          <span className="text-gray-300">Plan</span>
          <span className="bg-[#a8f000] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
            {plan.length}
          </span>
        </div>
       </Link>

       
        <Link href={'/planpage'}>
        <div className="flex items-center space-x-2">
          <span className="text-gray-300">Saved</span>
          <span className="border border-gray-600 text-gray-300 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
            {save.length}
          </span>
        </div>
        </Link>
      </div>
    </nav>
  );
}