import Link from "next/link";
import React from "react";
import CardDesign from "../Component/CardDesign";

export default async function HomePage() {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  const data = await res.json();

  return (
    <div className="min-h-screen bg-[#090a0f] p-3 font-sans text-white antialiased selection:bg-[#ccff00] selection:text-black sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1200px] space-y-7 sm:space-y-10">

        {/* HERO SECTION */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800/60 bg-[#12151c] p-5 shadow-xl sm:p-8 md:p-12">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8">

            {/* Left Content */}
            <div className="space-y-4 md:col-span-7 sm:space-y-5">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#ccff00] sm:text-[11px]">
                WORKOUT LIBRARY
              </span>

              <h1 className="text-2xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-[44px] lg:leading-[1.08]">
                TRAIN WITH INTENT. LOG
                <br />
                EVERY SET.
              </h1>

              <p className="max-w-lg text-xs font-medium leading-relaxed text-slate-400 sm:text-sm">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today's plan, and watch the week's work add up.
              </p>

              <div className="pt-1 sm:pt-2">
                <Link
                  href="#workouts"
                  className="inline-flex rounded-lg bg-[#ccff00] px-4 py-3 text-[10px] font-extrabold uppercase tracking-wider text-black transition hover:bg-[#b8e600] sm:px-6 sm:py-3.5 sm:text-xs"
                >
                  BROWSE WORKOUTS
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="flex items-center justify-center md:col-span-5 md:justify-end">
              <div className="relative flex h-[140px] w-full max-w-[200px] items-center justify-center sm:h-[200px] sm:max-w-[250px] md:h-[220px] md:max-w-[280px]">
                <img
                  src="/banner.png"
                  alt="Workout Machine"
                  className="h-full w-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>

        {/* SECTION HEADER */}
        <div id="workouts" className="space-y-1">
          <h2 className="text-xl font-black uppercase tracking-tight text-white sm:text-3xl">
            THE LIBRARY
          </h2>

          <p className="text-[11px] font-medium text-slate-400 sm:text-sm">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* WORKOUT CARDS GRID */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {data.map((item) => (
            <Link
              key={item.id}
              href={`/detailpage/${item.id}`}
              className="min-w-0"
            >
              <CardDesign data={item} />
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}