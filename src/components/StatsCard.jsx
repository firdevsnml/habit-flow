const StatsCard = ({
  title,
  value,
  icon,
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <p className="text-3xl font-bold mt-2 text-gray-800">
            {value}
          </p>
        </div>

        <div className="text-3xl">
          {icon}
        </div>
      </div>

    </div>
  );
};

export default StatsCard;