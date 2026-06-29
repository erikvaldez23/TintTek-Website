// Google Analytics (GA4) + Meta Pixel — loaded dynamically on the client only.
// Nothing here runs during SSR/prerendering; every export no-ops when
// `window` doesn't exist or the relevant ID isn't configured.

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

let initialized = false;

function ensureGtagStub() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function (...args) {
      window.dataLayer.push(args);
    };
  }
}

function ensureFbqStub() {
  if (window.fbq) return;
  const fbq = function (...args) {
    if (fbq.callMethod) {
      fbq.callMethod.apply(fbq, args);
    } else {
      fbq.queue.push(args);
    }
  };
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = window._fbq || fbq;
}

function injectScriptOnce(id, src) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

/**
 * Boots GA4 + Meta Pixel. Idempotent — safe to call on every render, only
 * does work once. Call this on the client after mount (e.g. from App.jsx).
 */
export function initAnalytics() {
  if (typeof window === "undefined" || initialized) return;
  initialized = true;

  if (GA_ID) {
    ensureGtagStub();
    injectScriptOnce(
      "ga4-gtag-js",
      `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    );
    window.gtag("js", new Date());
    // send_page_view is disabled — useRouteTracking sends every page_view,
    // including the first, so the initial load is never double-counted.
    window.gtag("config", GA_ID, { send_page_view: false });
  }

  if (PIXEL_ID) {
    ensureFbqStub();
    injectScriptOnce(
      "meta-pixel-js",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    window.fbq("init", PIXEL_ID);
    // No automatic PageView track here either — same reasoning as above.
  }
}

/** Sends a page_view to GA4 and a PageView to Meta Pixel for `url`. */
export function trackPageView(url) {
  if (typeof window === "undefined") return;

  if (GA_ID && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title,
    });
  }

  if (PIXEL_ID && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
}

// Meta's standard events — anything outside this list is sent as
// trackCustom instead, since Meta only recognizes these for ad optimization.
const META_STANDARD_EVENTS = new Set([
  "AddPaymentInfo", "AddToCart", "AddToWishlist", "CompleteRegistration",
  "Contact", "CustomizeProduct", "Donate", "FindLocation", "InitiateCheckout",
  "Lead", "Purchase", "Schedule", "Search", "StartTrial", "SubmitApplication",
  "Subscribe", "ViewContent",
]);

/**
 * Sends a custom event to both GA4 (`gtag('event', ...)`) and Meta Pixel
 * (`fbq('track', ...)` for standard events, `fbq('trackCustom', ...)` otherwise).
 *
 * @param {string} action - Event name, e.g. "Lead", "chatbot_open". Matched
 *   against Meta's standard events; use a standard name when one fits so
 *   Meta can use it for ad optimization.
 * @param {string} [category] - GA event_category / grouped under Meta's content_category.
 * @param {string} [label] - GA event_label / Meta's content_name.
 * @param {number} [value] - Numeric value (e.g. estimated job value).
 * @param {object} [properties] - Extra key/value pairs merged into both payloads.
 */
export function trackEvent(action, category, label, value, properties = {}) {
  if (typeof window === "undefined") return;

  if (GA_ID && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
      ...properties,
    });
  }

  if (PIXEL_ID && typeof window.fbq === "function") {
    const payload = {
      content_category: category,
      content_name: label,
      value,
      ...properties,
    };
    if (META_STANDARD_EVENTS.has(action)) {
      window.fbq("track", action, payload);
    } else {
      window.fbq("trackCustom", action, payload);
    }
  }
}
