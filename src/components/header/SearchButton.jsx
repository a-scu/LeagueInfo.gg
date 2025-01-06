import GG from "@/components/icons/GG";

export default function SearchButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="z-10 flex items-center justify-center w-16 bg-gray-1 border-l border-l-gray-2 text-blue rounded-r"
    >
      <GG className="h-3.5" />
    </button>
  );
}
