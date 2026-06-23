"use client";

import LeaseToOwnPage from "../../components/LeaseToOwnPage";
import { useSiteNavigation } from "../../components/useSiteNavigation";

export default function Page() {
  const { navigate } = useSiteNavigation();
  return <LeaseToOwnPage onNavigate={navigate as any} />;
}