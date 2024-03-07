export default function Decoration({ win }) {
  return (
    <div
      className={`z-10 w-1 absolute left-0 top-0 800:w-1.5 h-full ${
        win ? "bg-blue" : "bg-red"
      }`}
    />
  );
}
