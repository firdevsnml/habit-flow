import { useState } from "react";

import Navbar from "./components/Navbar";
import HabitForm from "./components/HabitForm";
import Home from "./pages/Home";

import {
  getHabits,
  saveHabits,
} from "./utils/localStorage";

import { createHabit } from "./interfaces/habit";

function App() {

  const [habits, setHabits] = useState(
    getHabits()
  );

  const [editingHabit, setEditingHabit] =
    useState(null);

  const addHabit = (habitData) => {

    const newHabit = createHabit(
      habitData.title,
      habitData.category,
      habitData.frequency
    );

    const updatedHabits = [
      ...habits,
      newHabit,
    ];

    setHabits(updatedHabits);
    saveHabits(updatedHabits);
  };

  const updateHabit = (updatedHabit) => {

    const updatedHabits = habits.map(
      (habit) =>
        habit.id === updatedHabit.id
          ? updatedHabit
          : habit
    );

    setHabits(updatedHabits);
    saveHabits(updatedHabits);

    setEditingHabit(null);
  };

  const deleteHabit = (id) => {

    const confirmed = window.confirm(
      "Bu alışkanlığı silmek istediğine emin misin?"
    );

    if (!confirmed) return;

    const updatedHabits =
      habits.filter(
        (habit) => habit.id !== id
      );

    setHabits(updatedHabits);
    saveHabits(updatedHabits);
  };

  const completeHabit = (id) => {

    const today =
      new Date().toISOString().split("T")[0];

    const updatedHabits = habits.map(
      (habit) => {

        if (habit.id !== id) {
          return habit;
        }

        const completedDates =
          habit.completedDates.includes(today)
            ? habit.completedDates.filter(
                (date) => date !== today
              )
            : [
                ...habit.completedDates,
                today,
              ];

        return {
          ...habit,
          completedDates,
        };
      }
    );

    setHabits(updatedHabits);
    saveHabits(updatedHabits);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-8">

        <HabitForm
          onAdd={addHabit}
          onUpdate={updateHabit}
          editingHabit={editingHabit}
          onCancel={() =>
            setEditingHabit(null)
          }
        />

      </div>

      <Home
        habits={habits}
        onComplete={completeHabit}
        onEdit={setEditingHabit}
        onDelete={deleteHabit}
      />

    </div>
  );
}

export default App;