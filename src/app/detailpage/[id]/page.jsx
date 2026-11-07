

import AddBook from '@/app/Component/addPlanbutton/AddBook';
import SaveBook from '@/app/Component/addPlanbutton/SaveBook';
import React from 'react';

export default async function CardDetailsPage({params}) {
  const {id} = await params

  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`)
  const data = await res.json()


  const [first,second,third,fourth] = await data.instructions

  const [Chest,Arms] = await data.muscleGroups
 

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen p-8 flex items-center justify-center font-sans">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left Side: Image / Illustration */}
        <div className="w-full h-full rounded-2xl overflow-hidden bg-[#161616] flex items-center justify-center">
          <img 
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Right Side: Details & Instructions */}
        <div className="flex flex-col space-y-6">
          
          {/* Title & Description */}
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide uppercase text-white mb-2">
              {data.name}
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
             {data.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex items-center space-x-2">
            <span className="bg-[#cbfb00] text-black text-xs font-bold px-3 py-1 rounded-full">
             { Chest}
            </span>
            <span className="bg-[#cbfb00] text-black text-xs font-bold px-3 py-1 rounded-full">
             { Arms}
            </span>
          </div>

          {/* Stats List */}
          <div className="bg-[#121212] rounded-xl overflow-hidden divide-y divide-[#222222]">
            <div className="flex justify-between items-center px-4 py-3 text-sm">
              <span className="text-gray-400 font-medium text-xs tracking-wider uppercase">Equipment</span>
              <span className="text-gray-200 font-semibold">{data.equipment}</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3 text-sm">
              <span className="text-gray-400 font-medium text-xs tracking-wider uppercase">Difficulty</span>
              <span className="text-gray-200 font-semibold">{data.difficulty}</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3 text-sm">
              <span className="text-gray-400 font-medium text-xs tracking-wider uppercase">Sets</span>
            <span className="text-gray-200 font-semibold">{data.sets}</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3 text-sm">
              <span className="text-gray-400 font-medium text-xs tracking-wider uppercase">Reps</span>
              <span className="text-gray-200 font-semibold">{data.reps}</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3 text-sm">
              <span className="text-gray-400 font-medium text-xs tracking-wider uppercase">Duration</span>
              <span className="text-gray-200 font-semibold">{data.duration} min</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3 text-sm">
              <span className="text-gray-400 font-medium text-xs tracking-wider uppercase">Calories</span>
              <span className="text-gray-200 font-semibold">{data.caloriesBurned} kcal</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3 text-sm">
              <span className="text-gray-400 font-medium text-xs tracking-wider uppercase">Rating</span>
              <span className="text-gray-200 font-semibold">{data.rating}</span>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold tracking-widest text-white uppercase">
              Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-400 leading-relaxed">
              <li>{first}</li>
              <li>{second}</li>
              <li>{third}</li>
              <li>{fourth}</li>
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 pt-2">
            <AddBook data={data}/>
            <SaveBook data={data}/>
          </div>

        </div>

      </div>
    </div>
  );
}