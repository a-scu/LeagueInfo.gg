export default function Champion({ champName, champLevel, champIcon }) {
  return (
    <div className="relative flex items-center justify-center">
      <div className="overflow-hidden rounded-full size-[37px] min-size-[37px] sm:size-[41px] sm:min-size-[41px]">
        <img
          src={champIcon}
          alt={champName}
          loading="lazy"
          className="object-cover bg-black rounded-full pointer-events-none size-[37px] min-size-[37px] sm:size-[41px] sm:min-size-[41px] scale-115"
        />
      </div>

      <span className="absolute bottom-0 left-0 flex items-center justify-center text-white bg-black rounded-full size-3-5 sm:size-4 text-3xs">
        {champLevel}
      </span>
    </div>
  );
}
