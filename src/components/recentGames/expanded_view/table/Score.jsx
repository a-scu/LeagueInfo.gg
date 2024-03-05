export default function Score({ score }) {
  const bgColor =
    score === "MVP"
      ? "bg-mvp"
      : score === "ACE"
      ? "bg-ace"
      : "bg-lg-500 dark:bg-dg-500";

  return (
    <div className="flex justify-end sm:hidden">
      <span
        className={`px-1 sm:px-1.5 h-4 flex items-center justify-center text-center w-fit text-3xs text-white rounded-full ${bgColor}`}
      >
        {score}
      </span>
    </div>
  );
}
