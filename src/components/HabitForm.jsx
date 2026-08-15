import { useState } from "react";

const HabitForm = ({
  onAdd,
  onUpdate,
  editingHabit,
  onCancel,
}) => {

  const [title, setTitle] = useState(
    editingHabit?.title || ""
  );

  const [category, setCategory] = useState(
    editingHabit?.category || "Sağlık"
  );

  const [frequency, setFrequency] = useState(
    editingHabit?.frequency || "Her gün"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Lütfen alışkanlık adını gir.");
      return;
    }

    const habitData = {
      title,
      category,
      frequency,
    };

    if (editingHabit) {
      onUpdate({
        ...editingHabit,
        ...habitData,
      });
    } else {
      onAdd(habitData);
    }

    setTitle("");
    setCategory("Sağlık");
    setFrequency("Her gün");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6"
    >

      <h2 className="text-xl font-bold mb-5">
        {editingHabit
          ? "✏️ Alışkanlığı Güncelle"
          : "➕ Yeni Alışkanlık"}
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <div>
          <label className="block text-sm font-medium mb-2">
            Alışkanlık
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            placeholder="Örn: Kitap oku"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Kategori
          </label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3"
          >
            <option>Sağlık</option>
            <option>Eğitim</option>
            <option>Spor</option>
            <option>Kişisel</option>
            <option>Diğer</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Sıklık
          </label>

          <select
            value={frequency}
            onChange={(e) =>
              setFrequency(e.target.value)
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3"
          >
            <option>Her gün</option>
            <option>Haftada 3 gün</option>
            <option>Haftada 5 gün</option>
            <option>Haftada 1 gün</option>
          </select>
        </div>

      </div>

      <div className="flex gap-3 mt-5">

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium"
        >
          {editingHabit
            ? "Güncelle"
            : "Alışkanlık Ekle"}
        </button>

        {editingHabit && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-xl"
          >
            İptal
          </button>
        )}

      </div>
    </form>
  );
};

export default HabitForm;