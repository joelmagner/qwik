import { component$, useStylesScoped$ } from "@builder.io/qwik";

import { QwikLogo } from "../icons/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="/" target="_blank">
            Start
          </a>
        </li>
        <li>
          <a href="/demo" target="_blank">
            Demo route
          </a>
        </li>
      </ul>
    </header>
  );
});
