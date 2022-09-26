/*
 *
 * It's the bundle entry point for `npm run preview`.
 * That is, serving your app built in production mode.
 *
 *
 * Learn more about Vite's preview command:
 * - https://vitejs.dev/config/preview-options.html#preview-options
 *
 */
import { qwikCity } from "@builder.io/qwik-city/middleware/node";
import render from "./entry.ssr";

// Qwik adaptor used by Vite preview.
export default qwikCity(render);
