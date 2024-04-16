import { defineConfig } from "@solidjs/start/config";
import devtools from 'solid-devtools/vite';

export default defineConfig({
    vite: {
        plugins: [
            devtools({
                autoname: true
            }),
        ]
    },
    server: {
        preset: 'cloudflare-pages'
    }
});
