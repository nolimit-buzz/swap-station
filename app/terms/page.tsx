"use client";

import LegalPage from "../../components/LegalPage";
import { useSiteNavigation } from "../../components/useSiteNavigation";

export default function Page() {
  const { navigate } = useSiteNavigation();
  return <LegalPage type="terms" onNavigate={navigate as any} />;
}