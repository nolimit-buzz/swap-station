"use client";

import CareersPage from "../../components/CareersPage";
import { useSiteNavigation } from "../../components/useSiteNavigation";

export default function Page() {
  const { navigate } = useSiteNavigation();
  return <CareersPage onNavigate={navigate as any} />;
}