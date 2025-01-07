import GG from "@/components/icons/GG";

export default function SearchButton({ onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="z-10 flex items-center h-full max-400:w-14 justify-center w-16 bg-gray-1 border-l border-l-gray-2 text-blue rounded-r"
    >
      <GG className="max-400:h-3 h-3.5" />
    </button>
  );
}
