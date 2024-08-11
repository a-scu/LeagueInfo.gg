export default function ({ runes }) {
  const primaryRune = runes[0].runes[0];
  const secondaryStyle = runes[1].style;

  return (
    <div className="flex flex-col gap-0.5">
      <img
        src={primaryRune?.icon}
        alt={primaryRune?.name}
        loading="lazy"
        className="object-cover bg-black rounded-full max-sm:size-5-5 max-sm:min-size-5-5 size-6 min-size-6 aspect-square"
      />

      <img
        src={secondaryStyle?.icon}
        alt={secondaryStyle?.name}
        loading="lazy"
        className="object-cover p-1 bg-black rounded-full max-sm:size-5-5 max-sm:min-size-5-5 size-6 min-size-6 aspect-square"
      />
    </div>
  );
}
