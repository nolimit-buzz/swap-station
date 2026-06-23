"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useSiteNavigation } from "../../components/useSiteNavigation";

const LocatorPage = dynamic(() => import("../../components/LocatorPage"), {
  ssr: false,
});

export default function Page() {
  const { navigate } = useSiteNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <LocatorPage
      onNavigate={navigate as any}
      isDarkMode={isDarkMode}
      onToggleTheme={() => setIsDarkMode((prev) => !prev)}
    />
  );
}