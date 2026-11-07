import React from "react";

const CardDesign = ({ data }) => {
//   console.log(data);
  return (
    <div>
      <div className="bg-[#12151c] rounded-xl overflow-hidden border border-slate-800/60 shadow-lg flex flex-col">
        {/* Card Thumbnail */}
        <div className="relative h-44 w-full bg-[#181c26] overflow-hidden flex items-center justify-center">
          {/* SVG Character Asset Clone */}
          <img
            src={data.image}
            alt={data.name}
            className="h-auto w-auto object-contain rounded-xl"
          />
        </div>

        {/* Card Details */}
        <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2.5">
            {/* Tags */}
            <div className="flex items-center gap-1.5">
              {data.muscleGroups.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#ccff00] text-black font-black text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-[3px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Subtitle */}
            <div>
              <h3 className="text-sm font-black text-white tracking-wide uppercase">
                {data.name}
              </h3>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                {data.equipment}
              </p>
            </div>
          </div>

          {/* Footer Stats Line */}
          <div className="pt-2.5 border-t border-slate-800/80 flex items-center gap-4 text-slate-400 text-[11px] font-medium">
            {/* Clock */}
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 stroke-[2] text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              <span>{data.duration} min</span>
            </div>

            {/* Calories Flame */}
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 stroke-[2] text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c0 0-6 4.5-6 10a6 6 0 0 0 12 0c0-5.5-6-10-6-10z" />
              </svg>
              <span>{data.caloriesBurned} kcal</span>
            </div>

            {/* Rating Star */}
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>{data.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
