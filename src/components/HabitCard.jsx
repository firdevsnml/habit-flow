const HabitCard = ({
  habit,
  onComplete,
  onEdit,
  onDelete,
}) => {
  const today = new Date().toISOString().split("T")[0];

  const isCompleted =
    habit.completedDates.includes(today);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex items-center justify-between">
      
      <div className="flex items-center gap-4">

        <button
          onClick={() => onComplete(habit.id)}
          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition ${
            isCompleted
              ? "bg-green-500 border-green-500 text-white"
              : "border-gray-300 hover:border-green-500"
          }`}
        >
          {isCompleted && "✓"}
        </button>

        <div>
          <h3
            className={`font-semibold text-lg ${
              isCompleted
                ? "line-through text-gray-400"
                : "text-gray-800"
            }`}
          >
            {habit.title}
          </h3>

          <div className="flex gap-2 mt-1">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              {habit.category}
            </span>

            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {habit.frequency}
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-2">

        <button
          onClick={() => onEdit(habit)}
          className="px-3 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
        >
          ✏️
        </button>

        <button
          onClick={() => onDelete(habit.id)}
          className="px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
        >
          🗑️
        </button>

      </div>
    </div>
  );
};

export default HabitCard;