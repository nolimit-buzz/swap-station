"use client";

import AboutPage from "../../components/AboutPage";
import { useSiteNavigation } from "../../components/useSiteNavigation";

export default function Page() {
  const { navigate } = useSiteNavigation();
  return <AboutPage onNavigate={navigate as any} />;
}