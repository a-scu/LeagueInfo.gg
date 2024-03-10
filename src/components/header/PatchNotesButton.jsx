export default function PatchNotesButton({ children }) {
  return (
    <button className="flex gap-1 h-8 w-[72px] min-w-[72px] sm:h-8 justify-center bg-db-100 rounded-full items-center text-xs text-white">
      <img
        src="https://brand.riotgames.com/static/a91000434ed683358004b85c95d43ce0/8a20a/lol-logo.png"
        alt=""
        className="object-contain size-4"
      />
      <span className="text-[#feec9c] font-bold">{children}</span>
    </button>
  );
}
