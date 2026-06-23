"use client";

import TeamPage from "../../components/TeamPage";
import { useSiteNavigation } from "../../components/useSiteNavigation";

export default function Page() {
  const { navigate } = useSiteNavigation();
  return <TeamPage onNavigate={navigate as any} />;
}