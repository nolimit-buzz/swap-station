"use client";

import ProductsPage from "../../components/ProductsPage";
import { useSiteNavigation } from "../../components/useSiteNavigation";

export default function Page() {
  const { navigate } = useSiteNavigation();
  return <ProductsPage onNavigate={navigate as any} />;
}