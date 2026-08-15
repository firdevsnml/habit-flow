import StatsCard from "../components/StatsCard";
import ProgressBar from "../components/ProgressBar";
import HabitCard from "../components/HabitCard";

const Home = ({
  habits,
  onComplete,
  onEdit,
  onDelete,
}) => {

  const today =
    new Date().toISOString().split("T")[0];

  const completedToday =
    habits.filter((habit) =>
      habit.completedDates.includes(today)
    ).length;

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Merhaba! 👋
        </h2>

        <p className="text-gray-500 mt-2">
          Bugünkü alışkanlıklarını tamamla ve
          hedeflerine bir adım daha yaklaş.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-6">

        <StatsCard
          title="Toplam Alışkanlık"
          value={habits.length}
          icon="🎯"
        />

        <StatsCard
          title="Bugün Tamamlanan"
          value={completedToday}
          icon="✅"
        />

        <StatsCard
          title="Başarı Oranı"
          value={
            habits.length === 0
              ? "0%"
              : `${Math.round(
                  (completedToday / habits.length) * 100
                )}%`
          }
          icon="📈"
        />

      </div>

      <ProgressBar
        completed={completedToday}
        total={habits.length}
      />

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-2xl font-bold">
          Bugünün Alışkanlıkları
        </h2>

      </div>

      <div className="space-y-4">

        {habits.length === 0 ? (

          <div className="bg-white rounded-2xl p-10 text-center border border-dashed border-gray-300">

            <div className="text-5xl mb-4">
              🌱
            </div>

            <h3 className="text-xl font-semibold">
              Henüz alışkanlık yok
            </h3>

            <p className="text-gray-500 mt-2">
              İlk alışkanlığını ekleyerek başla!
            </p>

          </div>

        ) : (

          habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onComplete={onComplete}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))

        )}

      </div>

    </main>
  );
};

export default Home;