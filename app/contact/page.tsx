"use client";

import ContactPage from "../../components/ContactPage";
import { useSiteNavigation } from "../../components/useSiteNavigation";

export default function Page() {
  const { navigate } = useSiteNavigation();
  return <ContactPage onNavigate={navigate as any} />;
}