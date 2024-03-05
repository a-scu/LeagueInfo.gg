export default function Champion({ champName, champLevel, champIcon }) {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-full max-sm:size-11-5 max-sm:min-size-11-5 size-12-5 min-size-12-5 aspect-square">
        <img
          src={champIcon}
          alt={champName}
          loading="lazy"
          className="object-cover bg-black rounded-full pointer-events-none size-12-5 min-size-12-5 max-sm:size-11-5 max-sm:min-size-11-5 aspect-square scale-115"
        />
      </div>

      <span className="absolute bottom-0 right-0 flex items-center justify-center text-white bg-black rounded-full size-4 sm:size-4-5 text-3xs sm:text-2xs">
        {champLevel}
      </span>
    </div>
  );
}
