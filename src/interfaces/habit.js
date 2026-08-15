export const createHabit = (
  title,
  category,
  frequency
) => {
  return {
    id: Date.now(),
    title,
    category,
    frequency,
    completedDates: [],
    createdAt: new Date().toISOString(),
  };
};