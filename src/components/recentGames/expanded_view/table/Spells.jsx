export default function Spells({ spells }) {
  const spell1 = spells[0];
  const spell2 = spells[1];

  return (
    <div className="flex flex-col gap-px">
      <img
        key={spell1.name}
        src={spell1.icon}
        alt={spell1.name}
        loading="lazy"
        className="object-cover bg-black rounded aspect-square size-4-5 min-size-4-5 sm:min-size-5 sm:size-5"
      />

      <img
        key={spell2.name}
        src={spell2.icon}
        alt={spell2.name}
        loading="lazy"
        className="object-cover bg-black rounded aspect-square size-4-5 min-size-4-5 sm:min-size-5 sm:size-5"
      />
    </div>
  );
}
