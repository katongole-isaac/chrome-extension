import { ManifestV3Export } from "@crxjs/vite-plugin";

const manifest: ManifestV3Export = {
  manifest_version: 3,
  name: "Chrome Extension",
  version: "0.1.0",
  icons: {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png",
  },
  action: {
    default_popup: "index.html",
  },
  content_scripts: [
    { js: ["src/scripts/content.js"], matches: ["<all_urls>"] },
  ],
  background: {
    service_worker: "src/service-worker/background.js",
    type: "module",
  },
};

export default manifest;
