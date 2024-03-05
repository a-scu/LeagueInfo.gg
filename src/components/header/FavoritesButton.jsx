import ArrowDown from "../icons/ArrowDown";

export default function FavoritesButton() {
  return (
    <button className="flex items-center gap-1 text-xs text-white">
      Favorites
      <ArrowDown className="size-3" />
    </button>
  );
}
