import Star from "./icons/Star";

export default function Banner({ name, tagLine, previousName, icon, level }) {
  return (
    <div className="flex flex-col items-center w-full p-2 py-4 text-center bg-white dark:bg-dg-0">
      <div className="relative flex items-center justify-center">
        <img
          src={icon}
          alt=""
          loading="lazy"
          className="max-800:w-[72px] max-800:h-[72px] w-20 h-20 rounded-full bg-black"
        />

        <button className="absolute flex items-center justify-center border-4 rounded-full group -right-12 bg-lg-200 dark:bg-dg-200 border-lg-100 dark:border-dg-100 size-8">
          <Star className="fill-transparent size-4 stroke-lg-300 dark:stroke-dg-300 group-hover:stroke-mvp" />
        </button>
      </div>

      <span className="max-800:text-2xs text-center text-xs px-2 mt-1.5 py-0.5 text-white bg-black rounded-full">
        {level}
      </span>

      <div>
        <h3 className="text-xl font-black text-black max-800:text-base dark:font-bold dark:text-white">
          {name}{" "}
          <span className="font-normal text-lg-500 dark:text-dg-500">
            #{tagLine}
          </span>
        </h3>

        <p className="text-xs text-center text-lg-500 dark:text-dg-500">
          {previousName !== name && `Prev. ${previousName}`}
        </p>
      </div>

      <button className="flex items-center text-white justify-center w-24 max-800:w-20 h-8 mt-1.5 text-sm max-800:text-xs text-center rounded bg-db-500">
        Update
      </button>
    </div>
  );
}
