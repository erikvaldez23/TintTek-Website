import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { theme, AppContent } from "./App.jsx";

export function render(url) {
  const helmetContext = {};
  const cache = createCache({ key: "css" });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  const html = renderToString(
    <CacheProvider value={cache}>
      <HelmetProvider context={helmetContext}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <StaticRouter location={url}>
            <AppContent />
          </StaticRouter>
        </ThemeProvider>
      </HelmetProvider>
    </CacheProvider>
  );

  const chunks = extractCriticalToChunks(html);
  const emotionStyles = constructStyleTagsFromChunks(chunks);
  const { helmet } = helmetContext;

  return { html, emotionStyles, helmet };
}
