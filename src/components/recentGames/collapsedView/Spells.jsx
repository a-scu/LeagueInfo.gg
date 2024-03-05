export default function Spells({ spells }) {
  const spell1 = spells[0];
  const spell2 = spells[1];

  return (
    <div className="flex flex-col gap-0.5">
      <img
        key={spell1.name}
        src={spell1.icon}
        alt={spell1.name}
        loading="lazy"
        className="object-cover bg-black rounded aspect-square max-sm:size-5-5 size-6 min-size-6 max-sm:min-size-5-5"
      />

      <img
        key={spell2.name}
        src={spell2.icon}
        alt={spell2.name}
        loading="lazy"
        className="object-cover bg-black rounded aspect-square max-sm:size-5-5 size-6 min-size-6 max-sm:min-size-5-5"
      />
    </div>
  );
}
