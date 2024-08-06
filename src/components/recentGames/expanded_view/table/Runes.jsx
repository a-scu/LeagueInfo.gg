export default function Runes({ runes }) {
  const primaryRune = runes[0].runes[0];
  const secondaryStyle = runes[1].style;

  return (
    <div className="flex flex-col gap-px">
      <img
        src={primaryRune.icon}
        alt={primaryRune.name}
        loading="lazy"
        className="object-cover bg-black rounded-full aspect-square min-size-4-5 size-4-5 sm:min-size-5 sm:size-5"
      />

      <img
        src={secondaryStyle.icon}
        alt={secondaryStyle.name}
        loading="lazy"
        className="object-cover p-1 max-sm:p-[3px] bg-black rounded-full aspect-square min-size-4-5 size-4-5 sm:min-size-5 sm:size-5"
      />
    </div>
  );
}
