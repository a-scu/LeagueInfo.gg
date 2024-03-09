import UpdateButton from "./banner/UpdateButton";
import Star from "./icons/Star";

export default async function Banner({ name, tagLine, icon, level }) {
  return (
    <div className="flex flex-col items-center w-full p-2 py-4 text-center bg-white dark:bg-dg-0">
      <div className="relative flex items-center justify-center">
        <img
          src={icon}
          alt=""
          loading="lazy"
          className="max-800:w-[72px] max-800:h-[72px] w-20 h-20 rounded-full bg-black"
        />

        <button className="absolute flex items-center justify-center bg-black border-4 rounded-full group -right-12 bg-main-3 border-lg-100 dark:border-dg-100 size-8">
          <Star className="fill-transparent size-4 stroke-lg-300 dark:stroke-dg-300 group-hover:stroke-mvp" />
        </button>
      </div>

      <span className="max-800:text-2xs text-center text-xs px-2 mt-1.5 py-0.5 text-white bg-black rounded-full">
        {level}
      </span>

      <h3 className="text-xl font-bold max-800:text-base dark:text-main-text">
        {name} <span className="font-normal text-main-6">#{tagLine}</span>
      </h3>

      <UpdateButton />
    </div>
  );
}
