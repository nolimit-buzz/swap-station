"use client";

import ServicesPage from "../../components/ServicesPage";
import { useSiteNavigation } from "../../components/useSiteNavigation";

export default function Page() {
  const { navigate } = useSiteNavigation();
  return <ServicesPage onNavigate={navigate as any} />;
}