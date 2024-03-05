"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen dark:bg-dg-200 bg-lg-200">{children}</div>
    </ThemeProvider>
  );
}
