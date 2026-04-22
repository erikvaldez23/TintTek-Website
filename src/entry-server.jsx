import { renderToPipeableStream } from "react-dom/server";
import { Writable } from "stream";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { theme, AppContent } from "./App.jsx";

export async function render(url) {
  const helmetContext = {};
  const cache = createCache({ key: "css" });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  const html = await new Promise((resolve, reject) => {
    const chunks = [];
    const writable = new Writable({
      write(chunk, _enc, cb) {
        chunks.push(chunk);
        cb();
      },
    });
    writable.on("finish", () => resolve(Buffer.concat(chunks).toString("utf-8")));

    const { pipe } = renderToPipeableStream(
      <CacheProvider value={cache}>
        <HelmetProvider context={helmetContext}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <StaticRouter location={url}>
              <AppContent />
            </StaticRouter>
          </ThemeProvider>
        </HelmetProvider>
      </CacheProvider>,
      {
        onAllReady() {
          pipe(writable);
        },
        onError(err) {
          reject(err);
        },
      }
    );
  });

  const chunks = extractCriticalToChunks(html);
  const emotionStyles = constructStyleTagsFromChunks(chunks);
  const { helmet } = helmetContext;

  return { html, emotionStyles, helmet };
}
