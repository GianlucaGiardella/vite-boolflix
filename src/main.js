import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import LangFlag from "vue-lang-code-flags";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("lang-flag", LangFlag)
  .mount("#app");
