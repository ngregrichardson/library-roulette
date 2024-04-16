import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, onMount } from "solid-js";
import Footer from "~/components/Footer";
import "./app.css";
import { MetaProvider } from "@solidjs/meta";
import { init } from "@aptabase/web";

export default function App() {
  onMount(() => {
    init('A-SH-0303914856', {
      host: 'https://stats.iamnoah.dev'
    });
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
