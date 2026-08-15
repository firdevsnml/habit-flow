const ProgressBar = ({ completed, total }) => {

  const percentage =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">

      <div className="flex justify-between mb-3">
        <span className="font-semibold">
          Bugünkü İlerleme
        </span>

        <span className="font-bold text-green-600">
          {percentage}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4">

        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="text-sm text-gray-500 mt-2">
        {completed} / {total} alışkanlık tamamlandı
      </p>

    </div>
  );
};

export default ProgressBar;