export default function Name({ name, tag, linkToProfile }) {
  return (
    <a href={linkToProfile} className="flex-1 truncate text-2xs sm:text-xs text-white">
      {name} <span className="text-gray-6">#{tag}</span>
    </a>
  );
}
