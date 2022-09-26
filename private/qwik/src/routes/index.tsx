import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <h1>
        Qwik Demo app <span class="lightning">⚡️</span>
      </h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "demoApp",
};
