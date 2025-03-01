import GG from "@/components/icons/GG";

export default function SearchButton({ onClick, inputFocused, expanded }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`z-10 flex items-center h-full max-400:w-14 justify-center border-l border-l-gray-2 w-16 bg-gray-1 text-blue rounded-r ${
        expanded || inputFocused ? "rounded-br-none" : ""
      }`}
    >
      <GG className="max-400:h-3 h-3.5" />
    </button>
  );
}
