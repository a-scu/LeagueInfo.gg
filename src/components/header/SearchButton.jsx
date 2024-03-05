import GG from "../icons/GG";

export default function SearchButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="z-10 flex items-center px-3 bg-white text-db-500"
    >
      <GG className="h-4 max-sm:h-3.5" />
    </button>
  );
}
