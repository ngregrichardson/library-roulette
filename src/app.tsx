import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, onMount } from "solid-js";
import Footer from "~/components/Footer";
import "./app.css";
import { MetaProvider } from "@solidjs/meta";
import { createScriptLoader } from "@solid-primitives/script-loader";

export default function App() {
  createScriptLoader({
    src: "https://stats.iamnoah.dev/script.js",
    defer: true,
    'data-website-id': '233d552f-a7ee-4ae6-a63d-c7cecbc43c01',
    'data-domains': 'libraryroulette.iamnoah.dev'
  });
  return (
    <MetaProvider>
      <Router
        root={props => (
          <>
            <Suspense>{props.children}</Suspense>
            <Footer />
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
