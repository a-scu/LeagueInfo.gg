export default function PatchNotesButton({ children }) {
  return (
    <button className="flex gap-1 h-7 sm:h-8 bg-db-100 rounded-full px-2.5 sm:px-3 items-center text-xs text-white">
      <img
        src="https://brand.riotgames.com/static/a91000434ed683358004b85c95d43ce0/8a20a/lol-logo.png"
        alt=""
        className="object-contain size-4"
      />
      <span className="text-[#feec9c] font-bold">{children}</span> Patch Notes
    </button>
  );
}
