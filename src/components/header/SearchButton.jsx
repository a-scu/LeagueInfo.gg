import GG from "@/components/icons/GG";

export default function SearchButton({ onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="z-10 flex items-center h-full justify-center w-16 bg-gray-1 border-l border-l-gray-2 text-blue rounded-r"
    >
      <GG className="h-3.5" />
    </button>
  );
}
