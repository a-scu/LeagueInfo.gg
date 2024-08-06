import GG from "@/components/icons/GG";

export default function SearchButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="z-10 flex items-center px-3 bg-gray-1 border-l border-l-gray-2 text-blue"
    >
      <GG className="h-3.5" />
    </button>
  );
}
