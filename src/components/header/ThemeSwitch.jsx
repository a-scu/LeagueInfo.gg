import { useState, useEffect } from "react";

import Theme from "@/components/icons/Theme";

export default function ThemeSwitch({ theme, handleTheme }) {
  return (
    <button
      onClick={handleTheme}
      className="flex items-center justify-center rounded-full aspect-square"
    >
      <Theme className={`size-4 ${theme === "light" ? "text-mvp" : "text-ace scale-x-[-1]"}`} />
    </button>
  );
}
