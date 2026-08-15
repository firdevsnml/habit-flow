const STORAGE_KEY = "habitflow-habits";

export const getHabits = () => {
  const habits = localStorage.getItem(STORAGE_KEY);

  return habits ? JSON.parse(habits) : [];
};

export const saveHabits = (habits) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(habits)
  );
};

export const clearHabits = () => {
  localStorage.removeItem(STORAGE_KEY);
};