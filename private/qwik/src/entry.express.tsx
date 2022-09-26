import express from "express";
import { fileURLToPath } from "url";
import { join } from "path";
import { qwikCity } from "@builder.io/qwik-city/middleware/node";
import render from "./entry.ssr";

const distDir = join(fileURLToPath(import.meta.url), "..", "..", "dist");
const buildDir = join(distDir, "build");

const { router, notFound } = qwikCity(render); // Qwik express middleware
const app = express();
app.use(`/build`, express.static(buildDir, { immutable: true, maxAge: "1y" }));
app.use(express.static(distDir, { redirect: false }));

app.use(router); // routes
app.use(notFound); // 404

app.listen(3000, () => {
  /* eslint-disable */
  console.log(`http://localhost:3000/`);
});
