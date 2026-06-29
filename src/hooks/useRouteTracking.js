import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../utils/analytics";

// Fires once on mount (the initial page load) and again on every subsequent
// route change. Because it's the single place page_view/PageView gets sent
// (initAnalytics disables both platforms' automatic pageview), there's no
// double-counting between hydration and navigation.
export default function useRouteTracking() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    trackPageView(window.location.pathname + window.location.search);
  }, [location.pathname, location.search]);
}
