import React from "react";

const monsters = [
  {
    id: 1,
    name: "Leanne Graham",
  },
  {
    id: 2,
    name: "Ervin Howell",
  },
  {
    id: 3,
    name: "Clementine Bauch",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
  },
];

const MonsterCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {monsters.map((monster) => (
        <div key={monster.id} className="p-4 border rounded-lg shadow-lg bg-green-100">
          <h2 className="text-xl font-bold text-center">{monster.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default MonsterCard;
