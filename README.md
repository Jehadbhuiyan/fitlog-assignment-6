# 🏋️ FitLog — Workout Library

**Train hard, log honest.**

FitLog is a dark-themed gym companion built with Next.js. Browse a library of exercises, open any workout to see full details, add it to today's plan, or save it for later. Your plan page shows total exercises, minutes and calories at a glance.

---

## ✨ Features

- **Workout Library** — Browse all exercises in a responsive card grid with muscle-group tags, duration, calories and rating.
- **Exercise Details** — Dedicated page for each workout with image, description, muscle groups, equipment, difficulty, sets, reps, duration, calories, rating and step-by-step instructions.
- **Today's Plan** — Add exercises to your daily plan with one click.
- **Save for Later** — Bookmark exercises and find them in the Saved tab.
- **My Plan Dashboard**
  - Live stats: total exercises, total minutes, total calories
  - Switch between **Today's Plan** and **Saved** tabs
  - **Sort By** dropdown: Duration, Calories, Rating
  - Mark exercises as done, save them, or remove them
- **Live Counters** — Navbar shows how many exercises are in your plan and saved list.
- **Toast Notifications** — Instant feedback when you add or save an exercise.
- **Fully Responsive** — Works on mobile, tablet and desktop.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) (App Router) | Framework, routing, server-side data fetching |
| [React](https://react.dev/) | UI and Context API for global state |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications |
| `next/font` (Geist, Oswald, Inter) | Typography |

---

## 📁 Project Structure

```
├── app/
│   ├── layout.js                 # Root layout (Navbar, Footer, providers, toasts)
│   ├── page.js                   # Home page — hero + workout library
│   ├── globals.css
│   ├── detailpage/
│   │   └── [id]/page.js          # Exercise details page
│   ├── planpage/
│   │   └── page.js               # My Plan page (tabs, stats, sort)
│   └── Component/
│       ├── CardDesign.jsx        # Workout card
│       ├── Nevbar.jsx            # Navigation bar with plan/saved counters
│       ├── Footer.jsx            # Site footer
│       └── addPlanbutton/
│           ├── AddBook.jsx       # "Add to today's plan" button
│           └── SaveBook.jsx      # "Save for later" button
├── context/
│   └── AddPlan.js                # Global state (plan + save) via Context API
└── public/
    └── banner.png                # Hero illustration
```

---

## 🔗 Routes

| Route | Description |
| --- | --- |
| `/` | Home page with the workout library |
| `/detailpage/[id]` | Details of a single exercise |
| `/planpage` | Your plan and saved exercises |

---

## 🌐 API

Workout data is fetched from a public API:

```
GET https://api.api-store.workers.dev/api/fitlog        # all workouts
GET https://api.api-store.workers.dev/api/fitlog/:id    # single workout
```

Each workout includes:

```json
{
  "id": 1,
  "name": "Pull-Up",
  "image": "https://...",
  "description": "...",
  "muscleGroups": ["Back", "Arms"],
  "equipment": "Pull-up Bar",
  "difficulty": "Intermediate",
  "sets": 3,
  "reps": 10,
  "duration": 15,
  "caloriesBurned": 120,
  "rating": 4.7,
  "instructions": ["...", "...", "...", "..."]
}
```

---

## 🧠 State Management

Global state lives in `context/AddPlan.js` using React Context:

| Value | Description |
| --- | --- |
| `plan` / `setPlan` | Exercises added to today's plan |
| `save` / `setSave` | Exercises saved for later |

The provider wraps the whole app in `layout.js`, so the Navbar, detail page buttons and plan page all share the same data.

> ⚠️ State is kept in memory only, so the plan and saved list reset when the page is refreshed.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, pnpm or bun

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/fitlog.git
cd fitlog

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## 🎨 Design

- **Theme:** Dark UI with a lime accent (`#ccff00`)
- **Headings:** Oswald (bold, uppercase)
- **Body:** Inter / Geist
- **Style:** Rounded cards, subtle borders, clean spacing

---

## 🗺️ Roadmap

- [ ] Persist plan and saved list with `localStorage`
- [ ] Prevent duplicate exercises in the plan
- [ ] Search and filter by muscle group
- [ ] Weekly progress tracking
- [ ] User accounts

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built with 💪 using Next.js and Tailwind CSS</p>
