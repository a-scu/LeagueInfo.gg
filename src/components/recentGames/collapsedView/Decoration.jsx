export default function Decoration({ win }) {
  return (
    <div
      className={`z-10 w-1 absolute left-0 top-0 800:w-1.5 h-full ${
        win ? "bg-lb-500 dark:bg-db-500" : "bg-lr-500 dark:bg-dr-500"
      }`}
    />
  );
}
