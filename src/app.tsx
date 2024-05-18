import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, onMount } from "solid-js";
import Footer from "~/components/Footer";
import "./app.css";
import { MetaProvider } from "@solidjs/meta";
import { init, trackEvent } from "@aptabase/web";

export default function App() {
  onMount(() => {
    if(import.meta.env.VITE_APTABASE_APP_KEY) {
      init(import.meta.env.VITE_APTABASE_APP_KEY, {
          host: "https://stats.iamnoah.dev"
      });

      trackEvent("view", {
          path: "/"
      });
    }
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
