# 🚀 Chrome Extension Development Template Setup

Effortless Chrome Extension Development — This template streamlines building Chrome extensions with `React`, `TypeScript`, `Vite`, and `Tailwind CSS`, using a JavaScript-format `manifest.json` for full flexibility.

## Directory Structure

`manifest.config.ts` – This TypeScript file defines the configuration for your Chrome extension and is used to generate the `manifest.json` file.

`index.html` – Serves as the default_popup for the extension, configured under the `action` field in the `manifest.config.ts`.

`public/` – Contains static assets that are copied directly into the final build. These files can be referenced in your extension without import.

`public/images` – Contains various icons used by the extension, such as for the toolbar, context menus, or the Chrome Web Store listing.

`src/` – Contains all the source code for the extension, including scripts, styles, and React components.


`src/scripts` – Contains the `content-scripts` used in the extension's [content-scripts](https://developer.chrome.com/docs/extensions/reference/manifest/content-scripts "Content Scripts"). 

`src/scripts/content.tsx` – This file serves as a content script and is referenced in the `content_scripts` section of `manifest.config.ts`.

`src/scripts/app.tsx` – Contains the default React component rendered by `src/scripts/content.tsx`. If you're not using React, you can remove this and instead configure the script path in the `content_scripts` section of `manifest.config.ts`.

`src/service-worker` – Contains the service worker scripts that handle background tasks for the Chrome extension, such as event listeners and message passing.

`src/service-worker/background.ts` – The entry point script for the Chrome extension’s service worker, also included in the `service_worker` section of `manifest.config.ts`.

`src/main.tsx` – The default React entry point file used for rendering the popup UI (`popup.html`).

`src/app.tsx` – Contains the default React component for the popup, which is imported and rendered by `src/main.tsx`.

`src/style.css` – Contains Tailwind CSS styles used for styling the popup UI and other extension components.


### Installation

```bash
git clone https://github.com/katongole-isaac/chrome-extension.git
cd chrome-extension
npm install
```

### Development

This starts Vite in watch mode and rebuilds on changes.

```bash
npm run dev
```

### Build for Production

Builds your extension into the `dist/` directory, ready to load into Chrome.

```bash
npm run build
```

### Features

- React (with fast refresh)
- TypeScript
- Tailwind CSS
- JavaScript-based manifest for flexibility
- HMR (for popup + content scripts via crx plugin)
