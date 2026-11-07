"use client";

import React, { useContext, useMemo, useState } from "react";
import { uesContext } from "@/context/AddPlan";
import Link from "next/link";
import { Oswald, Inter } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["600", "700"] });
const inter = Inter({ subsets: ["latin"] });

const SORT_OPTIONS = [
  { value: "duration", label: "Duration" },
  { value: "calories", label: "Calories" },
  { value: "rating", label: "Rating" },
  
];

export default function MyPlan() {
  const [activeTab, setActiveTab] = useState("today");
  const [sortBy, setSortBy] = useState("duration");

  const { plan = [], save = [], setPlan, setSave } =
    useContext(uesContext);

  const currentPlan = activeTab === "today" ? plan : save;

  const minits = currentPlan.reduce(
    (total, item) => total + Number(item.duration || 0),
    0
  );

  const caloris = currentPlan.reduce(
    (total, item) => total + Number(item.caloriesBurned || 0),
    0
  );

  const sortedPlan = useMemo(() => {
    const list = [...currentPlan];
    switch (sortBy) {
      case "duration":
        return list.sort(
          (a, b) => Number(a.duration || 0) - Number(b.duration || 0)
        );
      case "calories":
        return list.sort(
          (a, b) =>
            Number(b.caloriesBurned || 0) - Number(a.caloriesBurned || 0)
        );
      case "rating":
        return list.sort(
          (a, b) => Number(b.rating || 0) - Number(a.rating || 0)
        );
     
      default:
        return list;
    }
  }, [currentPlan, sortBy]);

  const handleSave = (exercise) => {
    const alreadySaved = save.some((item) => item.id === exercise.id);
    if (!alreadySaved) {
      setSave((prev) => [...prev, exercise]);
    }
  };

  const handleRemoveSaved = (id) => {
    setSave((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemovePlan = (id) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
  };

  const outlineBtn =
    "rounded-full border border-white/15 px-5 py-2 text-xs font-medium text-white transition hover:border-[#d4ff00] hover:text-[#d4ff00]";
  const limeBtn =
    "rounded-full bg-[#d4ff00] px-5 py-2 text-xs font-semibold text-black transition hover:bg-white";

  return (
    <main
      className={`${inter.className} min-h-screen bg-[#0a0b0f] px-4 py-8 text-white sm:px-8`}
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <header className="mb-6">
          <h1
            className={`${oswald.className} text-3xl font-bold uppercase tracking-wide`}
          >
            My Plan
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </header>

        {/* Stats */}
        <section className="mb-7 grid grid-cols-3 rounded-xl border border-white/10 bg-[#11131a] p-3">
          <div className="px-4 py-3">
            <p className="text-xs text-gray-400">Exercises</p>
            <p
              className={`${oswald.className} mt-1 text-4xl font-bold text-[#d4ff00]`}
            >
              {currentPlan.length}
            </p>
          </div>

          <div className="border-l border-white/10 px-4 py-3">
            <p className="text-xs text-gray-400">Minutes</p>
            <p className={`${oswald.className} mt-1 text-4xl font-bold`}>
              {minits}
            </p>
          </div>

          <div className="border-l border-white/10 px-4 py-3">
            <p className="text-xs text-gray-400">Calories</p>
            <p className={`${oswald.className} mt-1 text-4xl font-bold`}>
              {caloris}
            </p>
          </div>
        </section>

        {/* Tabs + Sort */}
        <section className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex rounded-xl border border-white/10 bg-[#11131a] p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`rounded-lg px-5 py-2 text-xs font-semibold transition ${
                activeTab === "today"
                  ? "bg-[#1d2029] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-5 py-2 text-xs font-semibold transition ${
                activeTab === "saved"
                  ? "bg-[#1d2029] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="sortBy" className="text-xs text-gray-400">
              Sort By
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="cursor-pointer rounded-lg border border-white/10 bg-[#11131a] px-3 py-2 text-xs font-medium text-white outline-none transition hover:border-white/25 focus:border-[#d4ff00]"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* List */}
        {sortedPlan.length > 0 ? (
          <section className="flex flex-col gap-3">
            {sortedPlan.map((data) => {
              const isSaved = save.some((item) => item.id === data.id);

              return (
                <article
                  key={data.id}
                  className="flex flex-col gap-4 rounded-xl border border-white/10 bg-[#11131a] p-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  {/* Left */}
                  <div className="flex items-center gap-4">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="h-14 w-[100px] flex-shrink-0 rounded-lg object-cover"
                    />

                    <div>
                      <h3
                        className={`${oswald.className} text-base font-bold uppercase tracking-wide`}
                      >
                        {data.name}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium text-gray-500">
                        {data.equipment || "Workout"}
                      </p>

                      <div className="mt-1.5 flex flex-wrap items-center gap-4 text-xs text-gray-300">
                        <span className="flex items-center gap-1.5">
                          <span className="inline-block h-2.5 w-2.5 rounded-full border-[1.5px] border-[#d4ff00]" />
                          {data.duration} min
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="text-[#d4ff00]">🔥︎</span>
                          {data.caloriesBurned} kcal
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="text-[#d4ff00]">☆</span>
                          {data.rating || "4.5"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right buttons */}
                  <div className="flex flex-wrap items-center gap-2 sm:pr-4">
                    <Link
                      href={`/detailpage/${data.id}`}
                      className={outlineBtn}
                    >
                      View Details
                    </Link>

                    {activeTab === "today" ? (
                      <>
                        <button
                          onClick={() => handleSave(data)}
                          disabled={isSaved}
                          title={isSaved ? "Saved" : "Save Exercise"}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-sm transition hover:border-[#d4ff00] hover:text-[#d4ff00] disabled:opacity-40"
                        >
                          {isSaved ? "✓" : "☆"}
                        </button>

                        <button
                          onClick={() => handleRemovePlan(data.id)}
                          className={limeBtn}
                        >
                          Mark as Done
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleRemoveSaved(data.id)}
                        title="Remove Saved Exercise"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-sm text-red-400 transition hover:bg-red-500 hover:text-white"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </section>
        ) : (
          /* Empty State */
          <section className="rounded-xl border border-dashed border-white/10 bg-[#11131a] px-5 py-16 text-center">
            <h3 className={`${oswald.className} text-xl font-bold uppercase`}>
              {activeTab === "today"
                ? "No Exercises Yet"
                : "No Saved Exercises"}
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              {activeTab === "today"
                ? "Your workout plan is empty. Explore exercises and start building your routine."
                : "You haven't saved any exercises yet. Save your favorites to find them here."}
            </p>

            <Link href="/" className={`${limeBtn} mt-6 inline-flex`}>
              Explore Exercises
            </Link>
          </section>
        )}
      </div>
    </main>
  );
}
