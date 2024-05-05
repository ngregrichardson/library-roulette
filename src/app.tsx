import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { DEV, Suspense } from "solid-js";
import Footer from "~/components/Footer";
import "./app.css";
import { MetaProvider } from "@solidjs/meta";
import { createScriptLoader } from "@solid-primitives/script-loader";
import umami from "@umami/node";
import { isServer } from "solid-js/web";

export default function App() {
  if(!DEV && !isServer) {
    umami.init({
      hostUrl: "https://stats.iamnoah.dev",
      websiteId: "233d552f-a7ee-4ae6-a63d-c7cecbc43c01",
    });
  }
  
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
