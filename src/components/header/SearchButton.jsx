import GG from "../icons/GG";

export default function SearchButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="z-10 flex items-center px-3 bg-white text-blue"
    >
      <GG className="h-3.5" />
    </button>
  );
}
