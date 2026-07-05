// Google Analytics (GA4) + Meta Pixel — loaded dynamically on the client only.
// Nothing here runs during SSR/prerendering; every export no-ops when
// `window` doesn't exist or the relevant ID isn't configured.
//
// GA4's gtag.js script + initial config is hardcoded in index.html (not
// injected here) so it survives even if a hosting provider's build is
// missing VITE_GA_MEASUREMENT_ID. GA_ID here still falls back to that same
// literal ID so trackPageView/trackEvent keep sending gtag events.

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-N4QT9CLD9T";
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
 * Boots Meta Pixel (GA4's script + config are hardcoded in index.html, not
 * here — see the comment above GA_ID). Idempotent — safe to call on every
 * render, only does work once. Call this on the client after mount (e.g.
 * from App.jsx).
 */
export function initAnalytics() {
  if (typeof window === "undefined" || initialized) return;
  initialized = true;

  ensureGtagStub();

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

const PAGE_STORAGE_KEY = "ttp_last_page";

/**
 * Records the path of the most recently visited page for this session.
 * Needed because the lead form (embedded on nearly every page — see
 * SubContact) is an external TintWiz iframe that redirects the whole page
 * to /thank-you on submit — by then the original page's URL is gone, so
 * ThankYou reads this back to attribute the lead to the page it was
 * submitted from. Called from useRouteTracking on every route change.
 */
export function setLastPageVisited(path) {
  if (typeof window === "undefined" || !path) return;
  try {
    window.sessionStorage.setItem(PAGE_STORAGE_KEY, path);
  } catch {
    // sessionStorage can throw in private browsing / disabled storage — ignore.
  }
}

export function getLastPageVisited() {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem(PAGE_STORAGE_KEY);
  } catch {
    return null;
  }
}

/** Extracts the city slug from a /locations/:city path, or null if it isn't one. */
export function getCityFromPath(path) {
  if (!path) return null;
  const match = path.match(/^\/locations\/([^/?#]+)/);
  return match ? match[1] : null;
}

/**
 * Pushes a raw event object to window.dataLayer in the shape Google Tag
 * Manager's Custom Event trigger matches against ({ event: name, ...params }).
 * This is separate from gtag()/fbq() above — gtag also writes to
 * dataLayer, but as an arguments array, which GTM Custom Event triggers
 * don't match against.
 */
export function pushDataLayerEvent(eventName, params = {}) {
  if (typeof window === "undefined" || !eventName) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
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
